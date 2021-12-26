import { createContext, useContext, useReducer } from 'react';
import githubReducer from './GithubReducer';
import { ActionType } from './types/Actions';

interface IGithubContext {
  users: IUser[];
  user: IUser;
  loading: boolean;
  searchUsers: (text: string) => Promise<void>;
  getUser: (login: string) => Promise<void>;
  clearUsers: () => void;
}

const GithubContext = createContext<IGithubContext>({} as IGithubContext);

export const GithubProvider: React.FC = ({ children }) => {
  const initialState = {
    users: [],
    user: {} as IUser,
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const setLoading = () => dispatch({ type: ActionType.SET_LOADING });

  // Get search results
  const searchUsers = async (text: string) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const response = await fetch(
      `${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`,
    );
    const { items } = await response.json();

    dispatch({
      type: ActionType.GET_USERS,
      payload: items,
    });

    console.log(items);
  };

  // Get single user
  const getUser = async (login: string) => {
    setLoading();

    const response = await fetch(
      `${process.env.REACT_APP_GITHUB_URL}/users/${login}`,
    );

    if (response.status === 404) {
      window.location.href = '/notfound';
    } else {
      const data = await response.json();

      dispatch({
        type: ActionType.GET_USER,
        payload: data,
      });
    }
  };

  const clearUsers = () => {
    dispatch({
      type: ActionType.CLEAR_USERS,
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export const useGithubContext = () => {
  const context = useContext(GithubContext);
  if (context === undefined) {
    throw new Error('useGithubContext must be used within a GithubProvider');
  }
  return context;
};

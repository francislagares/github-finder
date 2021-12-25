import { createContext, useContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

interface IGithubContext {
  users: IUser[];
  loading: boolean;
  searchUsers: (text: string) => Promise<void>;
  clearUsers: () => void;
}

const GithubContext = createContext<IGithubContext>({} as IGithubContext);

export const GithubProvider: React.FC = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const setLoading = () => dispatch({ type: 'SET_LOADING' });

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
      type: 'GET_USERS',
      payload: items,
    });

    console.log(items);
  };

  const clearUsers = () => {
    dispatch({
      type: 'CLEAR_USERS',
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers,
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

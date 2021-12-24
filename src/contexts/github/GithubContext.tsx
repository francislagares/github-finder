import { createContext, useContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

interface IGithubContext {
  users: IUser[];
  loading: boolean;
  fetchUsers?: () => Promise<void>;
}

const GithubContext = createContext<IGithubContext>({} as IGithubContext);

export const GithubProvider: React.FC = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const setLoading = () => dispatch({ type: ActionType.SET_LOADING });

  // Get initial users (testing purposes)
  const fetchUsers = async () => {
    setLoading();
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`);
    const data = await response.json();

    dispatch({
      type: ActionType.GET_USERS,
      payload: data,
    });

    console.log(data);
  };

  return (
    <GithubContext.Provider
      value={{ users: state.users, loading: state.loading }}
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

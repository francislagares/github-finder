import { createContext, useContext, useReducer } from 'react';
import githubReducer from './GithubReducer';
import { IAction } from './types/Actions';

interface IGithubContext {
  users: IUser[];
  user: IUser;
  repos: IRepo[];
  dispatch: React.Dispatch<IAction>;
  loading: boolean;
}

const GithubContext = createContext<IGithubContext>({} as IGithubContext);

export const GithubProvider: React.FC = ({ children }) => {
  const initialState = {
    users: [],
    user: {} as IUser,
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
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

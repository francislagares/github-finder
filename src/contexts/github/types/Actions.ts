export enum ActionType {
  GET_USERS = 'GET_USERS',
  GET_USER = 'GET_USER',
  CLEAR_USERS = 'CLEAR_USERS',
  GET_REPOS = 'GET_REPOS',
  SET_LOADING = 'SET_LOADING',
}

interface IGetUsers {
  type: ActionType.GET_USERS;
  payload: IUser[];
}

interface IGetUser {
  type: ActionType.GET_USER;
  payload: IUser;
}

interface IClearUsers {
  type: ActionType.CLEAR_USERS;
}

interface IGetRepos {
  type: ActionType.GET_REPOS;
  payload: {
    repos: IRepo[];
  };
}

interface ISetLoading {
  type: ActionType.SET_LOADING;
}

export type IAction =
  | IGetUsers
  | IGetUser
  | IClearUsers
  | IGetRepos
  | ISetLoading;

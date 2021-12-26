export enum ActionType {
  GET_USERS = 'GET_USERS',
  GET_USER = 'GET_USER',
  CLEAR_USERS = 'CLEAR_USERS',
  SET_LOADING = 'SET_LOADING',
}

export interface IGetUsers {
  type: ActionType.GET_USERS;
  payload: IUser[];
}

export interface IGetUser {
  type: ActionType.GET_USER;
  payload: IUser;
}

export interface IClearUsers {
  type: ActionType.CLEAR_USERS;
}

export interface ISetLoading {
  type: ActionType.SET_LOADING;
}

export type IAction = IGetUsers | IGetUser | IClearUsers | ISetLoading;

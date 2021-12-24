interface IUser {
  id: number;
  login: string;
  avatar_url: string;
}

interface IState {
  users: IUser[];
  loading: boolean;
}

enum ActionType {
  GET_USERS = 'GET_USERS',
  SET_LOADING = 'SET_LOADING',
}

interface IGetUsers {
  type: ActionType.GET_USERS;
  payload: IUser[];
}

interface ISetLoading {
  type: ActionType.SET_LOADING;
}

type IAction = IGetUsers | ISetLoading;

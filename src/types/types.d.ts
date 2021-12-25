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
  CLEAR_USERS = 'CLEAR_USERS',
  SET_LOADING = 'SET_LOADING',
}

interface IGetUsers {
  type: 'GET_USERS';
  payload: IUser[];
}

interface IClearUsers {
  type: 'CLEAR_USERS';
}

interface ISetLoading {
  type: 'SET_LOADING';
}

type IAction = IGetUsers | IClearUsers | ISetLoading;

type Change = React.ChangeEvent<HTMLInputElement>;
type Submit = React.FormEvent<HTMLFormElement>;

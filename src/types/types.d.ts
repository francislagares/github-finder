interface IUser {
  id: number;
  login: string;
  avatar_url: string;
}

interface IState {
  users: IUser[];
  loading: boolean;
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

interface ISetAlert {
  type: 'SET_ALERT';
  payload: { msg: string; type: string };
}

interface IRemoveAlert {
  type: 'REMOVE_ALERT';
}

enum ActionType {
  GET_USERS = 'GET_USERS',
  CLEAR_USERS = 'CLEAR_USERS',
  SET_LOADING = 'SET_LOADING',
}

type Change = React.ChangeEvent<HTMLInputElement>;
type Submit = React.FormEvent<HTMLFormElement>;

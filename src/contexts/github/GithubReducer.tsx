import { ActionType, IAction } from './types/Actions';

interface IState {
  users: IUser[];
  user: IUser;
  loading: boolean;
}

const githubReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case ActionType.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case ActionType.GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case ActionType.CLEAR_USERS:
      return {
        ...state,
        users: [],
      };
    case ActionType.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default githubReducer;

import { ActionType } from './types/Actions';

interface IState {
  alert: {
    msg: string;
    type: string;
  };
}

const alertReducer = (state: IState, action: any) => {
  switch (action.type) {
    case ActionType.SET_ALERT:
      return action.payload;
    case ActionType.REMOVE_ALERT:
      return null;
    default:
      return state;
  }
};

export default alertReducer;

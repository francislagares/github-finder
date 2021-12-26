/* type IAction = ISetAlert | IRemoveAlert;
 */
interface IState {
  alert: {
    msg: string | null;
    type: string | null;
  };
}

const alertReducer = (state: IState, action: any) => {
  switch (action.type) {
    case 'SET_ALERT':
      return action.payload;
    case 'REMOVE_ALERT':
      return null;
    default:
      return state;
  }
};

export default alertReducer;

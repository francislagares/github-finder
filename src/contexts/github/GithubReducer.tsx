const githubReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case ActionType.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
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

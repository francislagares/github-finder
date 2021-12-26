export enum ActionType {
  SET_ALERT = 'SET_ALERT',
  REMOVE_ALERT = 'REMOVE_ALERT',
}

export interface ISetAlert {
  type: ActionType.SET_ALERT;
  payload: { msg: string; type: string };
}

export interface IRemoveAlert {
  type: ActionType.REMOVE_ALERT;
}

export type IAction = ISetAlert | IRemoveAlert;

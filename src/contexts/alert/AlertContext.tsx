import React, { createContext, useContext, useReducer } from 'react';
import alertReducer from './AlertReducer';
import { ActionType } from './types/Actions';

interface IAlertContext {
  alert: {
    msg: string;
    type: string;
  };
  setAlert: (msg: string, type: string) => void;
}

const AlertContext = createContext({} as IAlertContext);

export const AlertProvider: React.FC = ({ children }) => {
  const initialState = {};

  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = (msg: string, type: string) => {
    dispatch({
      type: ActionType.SET_ALERT,
      payload: { msg, type },
    });

    setTimeout(() => {
      dispatch({ type: ActionType.REMOVE_ALERT });
    }, 3000);
  };

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => {
  const context = useContext(AlertContext);
  if (context === undefined) {
    throw new Error('useAlertContext must be used within an AlertProvider');
  }
  return context;
};

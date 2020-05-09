import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createSelector } from 'reselect';
import { actionTypes } from './actions';

const getApp = (state) => state.app;
export const isAppOnline = createSelector([getApp], (app) => app.isOnline);
export const allMessages = createSelector([getApp], (app) => app.messages);

const INITIAL_STATE = {
  messages: [],
  isOnline: true,
};

function app(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case actionTypes.ONLINE: {
      return { ...state, isOnline: true };
    }
    case actionTypes.OFFLINE: {
      return { ...state, isOnline: false };
    }
    case actionTypes.SETMESSAGES: {
      return { ...state, messages: [...action.payload] };
    }
    case actionTypes.SENDMESSAGESUCCESS: {
      return { ...state, messages: [...state.messages, action.payload] };
    }
    default:
      return state;
  }
}

export const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    app,
  });

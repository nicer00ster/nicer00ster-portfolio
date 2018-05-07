import nextConnectRedux from 'next-connect-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


const initialState = {
  open: false
}

// Store
export const initStore = (initialState) => {
  return createStore(reducer, initialState, composeWithDevTools(
    applyMiddleware(),
  ));
}


// Reducer
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_MENU:
      return { ...state.open, open: !state.open }
    default:
      return state;
  }
}

// Action Types
export const actionTypes = {
  TOGGLE_MENU: 'TOGGLE'
}

// Action Creators
export function toggleMenu(initialState) {
  return { type: 'TOGGLE_MENU', initialState }
}


export const nextConnect = nextConnectRedux(initStore);

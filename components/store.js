import nextConnectRedux from 'next-connect-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  open: false,
  terminal: false,
  filled: false,
  submitted: false
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
    case actionTypes.TOGGLE_TERMINAL:
      return { ...state.terminal, terminal: !state.terminal }
    case actionTypes.FILLED:
      return { ...state.filled, filled: !state.filled }
    default:
      return state;
  }
}

// Action Types
export const actionTypes = {
  TOGGLE_MENU: 'TOGGLE_MENU',
  TOGGLE_TERMINAL: 'TOGGLE_TERMINAL',
  FILLED: 'FILLED',
  SUBMIT_FORM: 'SUBMIT_FORM'
}

// Actions
export function toggleMenu() {
  return { type: 'TOGGLE_MENU'  }
}

export function toggleTerminal() {
  return { type: 'TOGGLE_TERMINAL' }
}

export function filledSection() {
  return { type: 'FILLED' }
}



export const nextConnect = nextConnectRedux(initStore);

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
    case actionTypes.SUBMIT_FORM:
      return { ...state.submitted, submitted: !state.submitted }
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

export function submitForm(name, email, selected, message) {
  fetch('/api/contact', {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, /*/',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      email,
      selected,
      message
    })
  }).then((res) => {
    res.status === 200 ? this.setState({ submitted: true }) : '';
  })
  return { type: 'SUBMIT_FORM' }
}

export const nextConnect = nextConnectRedux(initStore);

import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { AppActions } from './actions/models/actions';
import apiStatusReducer from './reducers/apiStatusReducer';
import userReducer from './reducers/userReducer';


const logger = createLogger();

export const rootReducer = combineReducers({
    userReducer,
    apiStatusReducer
})

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore<AppState, AppActions, {}, {}>(
    rootReducer,
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>, logger)
);
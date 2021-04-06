import { combineReducers } from 'redux';
import { dashboardReducer } from './dashboardReducer';

const appReducer = combineReducers({ dashboardReducer });

export default appReducer;

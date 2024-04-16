import { combineReducers, legacy_createStore , applyMiddleware } from "redux";
 import {thunk} from "redux-thunk";
import { reducer as userReducer } from "./UsersManagement/reducer";

const rootReducer = combineReducers({userReducer});

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));
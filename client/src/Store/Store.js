import { createStore, applyMiddleware  } from "redux";
import rootReducer from "../Reducer/Reducer";
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const middleware= [thunk]

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

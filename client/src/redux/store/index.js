import { createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducer';
import { thunk } from 'react-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(composeWithDevTools(applyMiddleware(thunk)));
import {createStore} from 'redux';
import someReducer from './redux/reducers/someReducer';

export const store = createStore(someReducer)


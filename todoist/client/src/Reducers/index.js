import ToDo from './ToDo';
import Doing from './Doing';
import Done from './Done';
import User from './User';

import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    ToDo, Doing, Done, User
})

export default rootReducers;
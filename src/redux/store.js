import { createStore, combineReducers } from 'redux';

import payments from './reducers/payments';
import tickets from './reducers/tickets';
import user from './reducers/user';

const reducer = combineReducers({
  payments,
  tickets,
  user,
});

const store = createStore(reducer);

export default store;

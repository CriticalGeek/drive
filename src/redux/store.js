import { createStore, combineReducers } from 'redux';

import imgTypeCards from './reducers/imgTypeCards';
import payments from './reducers/payments';
import tickets from './reducers/tickets';
import user from './reducers/user';

const reducer = combineReducers({
  imgTypeCards,
  payments,
  tickets,
  user,
});

const store = createStore(reducer);

export default store;

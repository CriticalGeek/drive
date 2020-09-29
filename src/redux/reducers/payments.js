import { type as getPaymentsType } from '~/redux/actions/getPayments';
import { type as deletePaymentType } from '~/redux/actions/deletePayment';
import { type as addPaymentType } from '~/redux/actions/addPayment';

const initialState = [];

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case getPaymentsType:
      return payload;
    case deletePaymentType:
      return state.filter((item) => item.id !== payload);
    case addPaymentType:
      return [...state, payload];
    default:
      return state;
  }
}

export default reducer;

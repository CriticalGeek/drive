import { type as getPaymentsType } from '~/redux/actions/getPayments';
import { type as deletePaymentType } from '~/redux/actions/deletePayment';

const initialState = [];

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case getPaymentsType:
      return payload;
    case deletePaymentType:
      let payments = state.filter((item) => item.id !== payload);
      return payments;
    default:
      return state;
  }
}

export default reducer;

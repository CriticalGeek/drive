import { type as getTicketsType } from '~/redux/actions/getTickets';

const initialState = [];

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case getTicketsType:
      return payload;
    default:
      return state;
  }
}

export default reducer;

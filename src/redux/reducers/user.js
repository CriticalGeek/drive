import { type as getUserType } from '~/redux/actions/getUser';

const initialState = {};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case getUserType:
      return payload;
    default:
      return state;
  }
}

export default reducer;

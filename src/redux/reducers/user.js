import { type as getUserType } from '~/redux/actions/getUser';

const initialState = {};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case getUserType:
      return {
        email: payload.email,
        password: payload.password,
        name: 'Antonio Alvarez',
      };
    default:
      return state;
  }
}

export default reducer;

import { type as getImgTypeCardsType } from '~/redux/actions/getImgTypeCards';

const initialState = [];

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case getImgTypeCardsType:
      return payload;
    default:
      return state;
  }
}

export default reducer;

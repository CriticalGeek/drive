export const type = 'getImgTypeCards';

const getImgTypeCards = (cards) => {
  return {
    type,
    payload: cards,
  };
};

export default getImgTypeCards;

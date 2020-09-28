export const type = 'getPayments';

const getPayments = (id) => {
  return {
    type,
    payload: id,
  };
};

export default getPayments;

export const type = 'getPayments';

const getPayments = (payments) => {
  return {
    type,
    payload: payments,
  };
};

export default getPayments;

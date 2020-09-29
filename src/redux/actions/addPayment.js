export const type = 'addPayment';

const addPayment = (payment) => {
  return {
    type,
    payload: payment,
  };
};

export default addPayment;

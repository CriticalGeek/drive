export const type = 'deletePayment';

const deletePayment = (paymentId) => {
  return {
    type,
    payload: paymentId,
  };
};

export default deletePayment;

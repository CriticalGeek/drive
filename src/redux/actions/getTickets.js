export const type = 'getTickets';

const getTickets = (id) => {
  return {
    type,
    payload: id,
  };
};

export default getTickets;

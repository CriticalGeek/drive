export const type = 'getTickets';

const getTickets = (tickets) => {
  return {
    type,
    payload: tickets,
  };
};

export default getTickets;

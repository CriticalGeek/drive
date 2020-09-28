export const type = 'GET_USER';

const getUser = (user) => {
  return {
    type,
    payload: user,
  };
};

export default getUser;

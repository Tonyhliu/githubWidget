// responsible for getting application state
// receive state as an argument and receive subset of state

const allUsers = ({ users }) => {
  console.log(users);
  return Object.keys(users).map(id => (
    users[id]
  ));
};

export default allUsers;

export const fetchUsers = () => {
  return $.ajax({
    method: 'GET',
    url: `https://api.github.com/users?since=${Math.round((Math.random() * (100 - 1) + 1))}`
  });
};
// url: 'https://api.github.com/users'

export const fetchUser = (username) => {
  return $.ajax({
    method: 'GET',
    url: `https://api.github.com/users/${username}`
  });
};

export const fetchUsers = () => {
  return $.ajax({
    method: 'GET',
    url: 'https://api.github.com/users?since=135'
  });
};

export const fetchUser = () => {
  return $.ajax({
    method: 'GET',
    url: `api/`
  });
};

// export const refreshAll = () => {
//   return $.ajax({
//     method: 'GET',
//     url: 'api/'
//   });
// };

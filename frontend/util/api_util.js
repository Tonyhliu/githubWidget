export const fetchUsers = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/'
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

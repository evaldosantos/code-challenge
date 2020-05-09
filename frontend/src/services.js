export const sendMessage = (data) =>
  fetch(process.env.REACT_APP_ENDPOINT, {
    method: 'post',
    body: JSON.stringify(data),
  });

export const getAllMessages = () =>
  new Promise(function(resolve, reject) {
    fetch(process.env.REACT_APP_ENDPOINT, {
      method: 'get',
    })
    .then(data => data.json())
    .then(data => resolve(data))
    .catch(error => reject(error));
  })
  

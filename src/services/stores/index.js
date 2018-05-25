export const storesService = {
    getAll
};

function getAll() {
    // const requestOptions = {
    //     method: 'GET',
    // };

    return simulateFetch().then((res) => res );
    //return fetch('http://xxx.xxx.xxx.xxx:XXXX/admin/v1/orders', requestOptions).then(handleResponse);
}

function simulateFetch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({status: 2, message: '', payload: []});
    }, 2000);

  });
}

function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }

    return response.json();
}

const API_Key = '24451783-36fc53d78d658727e466a2b4b';
const BASE_URL = 'https://pixabay.com';

function fetchImages(name) {
  return fetch(
    `${BASE_URL}/api/?q=${name}&page=1&key=${API_Key}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(responce => {
    if (responce.ok) {
      return responce.json();
    }
    return Promise.reject(new Error('Ничего ненайдено'));
  });
}

//делаем обьект
const api = {
  fetchImages,
};

export default api;

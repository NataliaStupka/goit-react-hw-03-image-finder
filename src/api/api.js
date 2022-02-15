const API_Key = '24451783-36fc53d78d658727e466a2b4b';
const BASE_URL = 'https://pixabay.com';

function fetchImages(query) {
  const url = `${BASE_URL}/api/?q=${query}&page=1&key=${API_Key}&image_type=photo&orientation=horizontal&per_page=12`;

  return fetch(url).then(responce => {
    if (responce.ok) {
      return responce.json();
    }
    return Promise.reject(new Error(`По запросу ${query} ничего не найдено`));
  });
}

//делаем обьект
const api = {
  fetchImages,
};

export default api;

//--------------------------------------------
//или через axio
// export async function fetchImages(query) {
//   const url= `${BASE_URL}/api/?q=${query}&page=1&key=${API_Key}&image_type=photo&orientation=horizontal&per_page=12`

//   return await axios.get(url);
// }

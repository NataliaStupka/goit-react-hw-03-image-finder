import React, { Component } from 'react';
import api from '../api/api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

// const Status = {
//   IDLE: 'idle',
//   PENDING: 'pending',
//   RESOLVED: 'resolved',
//   REJECTED: 'rejected',
// };

class App extends Component {
  state = {
    images: [], //для приходящего масива
    query: '', //текст, что вводят в поиск
    error: null,
    status: '',
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;

    //проверка, что бы не пошло постоянное обновление
    if (prevQuery !== nextQuery) {
      // console.log('Новый запрос')
      this.getImagesData();
    }
    //сюда же добавить скрол----------------------
  }

  getImagesData = () => {
    const { query } = this.state;
    api
      .fetchImages(query)
      .then(({ hits }) => {
        console.log('вытянула масив', hits);

        //? возможно лишнее, и дальше в иф заменить итемс на хит?????-----а мепну уже на галерее----
        const items = hits.map(({ id, webformatURL, largeImageURL, tags }) => {
          return { id, webformatURL, largeImageURL, tags };
        }); //------------------------------------------------------------------

        //если пришли картинки добавляем, если нет сообщаем о пустом масиве
        if (items.length > 0) {
          this.setState(prevState => {
            return {
              images: [...prevState.images, ...items],
            };
          });
        } else {
          alert(`По запросу '${query}' ничего не найденно.`);
        }
      })
      .catch(error => this.setState({ error }));
  };

  //метод для предачи imageQuery (что ввели в поиск) с form
  // вызовем его в form  и передадим ему вводимое значение (imageQuery)
  handleFormSubmit = query => {
    this.setState({ query });
  };

  render() {
    const { images, isLoading } = this.state;
    const totalItems = images.length;
    const showPlaceholder = !isLoading && totalItems === 0;
    const showReaderUI = !isLoading && totalItems > 0;

    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />

        {isLoading && <div>Загрузка...</div>}
        {showPlaceholder && <div>Еще нет публикаций!</div>}
        {showReaderUI && <ImageGallery images={images} />}

        {/* <Button /> */}
        {/* <Loader /> */}
        {/* <Modal /> */}
      </div>
    );
  }
}

export default App;

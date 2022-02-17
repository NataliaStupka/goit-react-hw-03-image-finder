import React, { Component } from 'react';
import './App.css';
import api from '../api/api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'; //for Loader
import Modal from './Modal/Modal';

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
    page: 1,
    error: null,
    isLoading: false,
    showModal: false,
    largeImage: '',
    currentHitsPerPage: null,
    // status: '',
  };

  componentDidUpdate(_, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;

    //проверка, что бы не пошло постоянное обновление
    if (prevQuery !== nextQuery) {
      // console.log('Новый запрос')
      this.setState({ isLoading: true, images: [], page: 1 }); //при новом запросе страница очищается
      this.getImagesData(); //fetch
    }
    //сюда скрол----
  }

  getImagesData = () => {
    const { query, page } = this.state;

    api
      .fetchImages(query, page) // передаю значение инпута и страницу
      .then(({ hits }) => {
        // console.log('вытянула масив', hits);

        //если пришли картинки добавляем, если нет сообщаем о пустом масиве
        if (hits.length > 0) {
          this.setState(prevState => {
            return {
              images: [...prevState.images, ...hits],
              page: prevState.page + 1,
              currentHitsPerPage: hits.length,
            };
          });
        } else {
          alert(`No results found for '${query}'.`);
        }
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  //метод для предачи query (что ввели в поиск) с form
  // вызовем его в form  и передадим ему вводимое значение (query)
  handleFormSubmit = query => {
    this.setState({ query: query, page: 1 }); //page - что бы запрос пошел с первой страници
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal, //если true то будет false, если false то true
    }));
  };

  openImage = largeImage => {
    this.setState({ largeImage: largeImage });
    this.toggleModal();
  };

  render() {
    const { images, isLoading, showModal, largeImage, currentHitsPerPage } =
      this.state;
    const totalItems = images.length; // сколько картинок на странице с учетом LoadMore
    const showReaderUI = !isLoading && totalItems > 0;
    // console.log('Количество images за одну загрузку:', currentHitsPerPage);

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        {isLoading && <Loader />}

        {showReaderUI && (
          <>
            <ImageGallery images={images} onOpenModal={this.openImage} />
            {currentHitsPerPage < 12 && (
              <p className="report">All found pictures are loaded.</p>
            )}
          </>
        )}

        {showReaderUI && currentHitsPerPage === 12 && (
          <Button onClick={this.getImagesData} />
        )}

        {showModal && (
          <Modal image={largeImage} onCloseModal={this.toggleModal} />
        )}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import API from '../api/api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  state = {
    images: [], //для приходящего масива
    imageName: '', //текст, что вводят в поиск
    error: null,
    status: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.imageName;
    const nextName = this.state.imageName;
    // console.log('prevName', prevName);
    // console.log('nextName', nextName);

    //проверка, что бы не пошло постоянное обновление
    if (prevName !== nextName) {
      API.fetchImages(nextName).then(({ hits }) => {
        const images = hits.map(({ id, webformatURL, largeImageURL, tags }) => {
          return { id, webformatURL, largeImageURL, tags };
        });
      });
    }
  }

  //метод для предачи imageName (что ввели в поиск) с form
  // вызовем его в form  и передадим ему вводимое значение (imageName)
  handleFormSubmit = imageName => {
    this.setState({ imageName });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {/* -----delete after */}
        {this.state.images && (
          <ul>
            <li>
              <img src={this.state.images.hits[0].webformatURL} />
            </li>
          </ul>
        )}

        {/* ------------ */}

        {/* <ImageGallery imageName={this.state.imageName} /> */}

        {/* <Button /> */}
        {/* <Loader /> */}
        {/* <Modal /> */}
      </div>
    );
  }
}

export default App;

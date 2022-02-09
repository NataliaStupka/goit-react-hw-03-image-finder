import React, { Component } from 'react';
import { fetchImages } from '../api/api';
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
    // console.log('prevName', prevName)
    // console.log('nextName',  nextName)

    //проверка, что бы не пошло постоянное обновление
    if (prevName !== nextName) {
      fetchImages(this.state.imageName).then(image => this.setState({ image }));
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

        {/* ---------delete after--- */}
        <div>
          {this.state.imageName}
          <img src="" alt=""></img>

          <ul className="gallery">
            <li> Набор li с изображениями </li>
          </ul>
        </div>

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

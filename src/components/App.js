import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  state = {
    imageName: '',
  };

  //метод для предачи imageName (что ввели в поиск) с form
  // вызовем его в form  и передадим ему вводимое значение (imageName)
  handleFormSubmit = imageName => {
    this.setState({ imageName });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />

        <ImageGallery imageName={this.state.imageName} />
      </div>
    );
  }
}

export default App;

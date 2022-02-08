//Список карточек изображений
import { Component } from 'react';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class ImageGallery extends Component {
  state = {
    card: {},
    error: null,
    status: Status.IDLE,
  };

  componentDidMount() {
    const API_Key = '24451783-36fc53d78d658727e466a2b4b';
    fetch(
      `https://pixabay.com/api/?q=cat&page=1&key=${API_Key}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(res => res.json())
      .then(console.log);
  }

  render() {
    return <div>{this.state.card && <div>Card image</div>}</div>;
  }
}

// <ul class="gallery">
//   <li> Набор li с изображениями </li>
// </ul>;

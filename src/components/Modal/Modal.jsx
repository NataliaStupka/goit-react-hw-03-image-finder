import { Component } from 'react';
import './Modal.css';

class Modal extends Component {
 componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);  //для закрытия при нажатие на Esc
  }
 componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);  //чистим за собой слушателя
  }
  

handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onCloseModal(); //вызываем метод переданый по пропсу (закрытие модального окна toggleModal в App)
    }
  };

 //метод для закрытия модалки при кликанье на бэкдроппе
  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onCloseModal();
    }
  };


  render() {
    console.log('++++++', this.props)
    return (
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal" >
          <img src={this.props.image} alt="" />
        </div>
      </div>
    
    );


  }

}


export default Modal;
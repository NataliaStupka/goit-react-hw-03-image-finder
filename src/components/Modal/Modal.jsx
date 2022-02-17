import { Component } from 'react';
import { createPortal } from 'react-dom'; //метод из react дома, для модального окна
import './Modal.css';

//для модального окна
const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
 componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);  //закрытиe при Esc
  }
 componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);  //чистим за собой слушателя
  }
  

handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onCloseModal(); //вызываем метод переданый по пропсу (закрытие модального окна toggleModal в App)
    }
  };

 //закрытиe модалки при клике на бэкдроп
  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onCloseModal();
    }
  };


  render() {
    // console.log('++++++', this.props)
    return createPortal(
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal" >
          <img src={this.props.image} alt="" />
        </div>
      </div>,
    modalRoot,
    );
  }
}


export default Modal;
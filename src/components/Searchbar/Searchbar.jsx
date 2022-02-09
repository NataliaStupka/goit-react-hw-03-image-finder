import { Component } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';

export default class Searchbar extends Component {
  state = {
    imageName: '',
  };

  //обновляет imageName при каждом вводе на input
  handleNameChange = event => {
    this.setState({ imageName: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault(); //нет автоматической перезагрузке

    //если запрос пуст - не отсылать; trim - учтет пробелы слева/справа
    if (this.state.imageName.trim() === '') {
      return alert('Please, enter what you want to find.');
    }

    //вызываю метод из App и предаю ему значение imageName, и он вернется в  App
    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form onSubmit={this.handleSubmit} className="form">
          <button
            type="submit"
            className="button">
            {/* <span className="button-label">Search</span> */}
            <BiSearchAlt2 />
          </button>

          <input
            className="input"
            type="text"
            value={this.state.imageName}
            onChange={this.handleNameChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

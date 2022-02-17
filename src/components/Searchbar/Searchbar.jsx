import { Component } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import './Searchbar.css'

export default class Searchbar extends Component {
  state = {
    imageName: '',
  };

  //обновляет imageName при каждом вводе на input
  handleNameChange = event => {
    this.setState({ imageName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault(); //нет автоматической перезагрузке
    const { imageName} = this.state;

    //если запрос пуст - не отсылать; trim - учтет пробелы слева/справа
    if (imageName.trim() === '') {
      return alert('Please, enter what you want to find.');
    }

    //вызываю метод из App, передаю ему значение imageName, и он вернется в  App
    this.props.onSubmit(imageName);
    this.setState({ imageName: '' });
  };

  render() {
    const { imageName } = this.state;

    return (
      <header className="Searchbar">
        <form onSubmit={this.handleSubmit} className="SearchForm">
          <button
            type="submit"
            className="SearchForm-button">
            {/* <span className="button-label">Search</span> */}
            <BiSearchAlt2 style={{ width: 20, height: 20 }}/>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            value={imageName}
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

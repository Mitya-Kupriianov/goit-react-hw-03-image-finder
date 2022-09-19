import { Component } from 'react';
import s from './Searchbar.module.css';
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
  static propTypes = { onSubmit: PropTypes.func.isRequired };

  state = { text: '' };

  handleChange = e => {
    const { type, value } = e.currentTarget;
    this.setState({ [type]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.text.trim());

    this.setState({ text: '' });
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.button}>
            <span className="label">Search</span>
          </button>

          <input
            onChange={this.handleChange}
            value={this.state.text}
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };

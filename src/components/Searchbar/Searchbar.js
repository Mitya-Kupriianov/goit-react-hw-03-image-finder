import { Component } from 'react';
import s from './Searchbar.module.css';
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={this.props.handleSubmit}>
          <button type="submit" className={s.button}>
            <span className="label">Search</span>
          </button>

          <input
            name="query"
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

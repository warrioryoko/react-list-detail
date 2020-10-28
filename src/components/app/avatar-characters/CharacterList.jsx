import React, { Component } from 'react';
import { getCharacters } from '../services/avatar-api';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class CharacterList extends Component {
  state = {
    characters: []
  }

  componentDidMount = async () => {
    const allCharacters = await getCharacters();

    this.setState({ characters: allCharacters });
  }

  render() {
    const { characters } = this.state;

    const characterLinks = characters.map(character => (
      <Link key={character._id} to={`/${character._id}`}>
        <li key={character._id}>
          <h3>{character.name}</h3>
          <img src={character.photoUrl} width="200" height="200"></img>
        </li>
      </Link>
    ));

    return (
      <>
        <ul>
          {characterLinks}
        </ul>
      </>
    );
  }
}

CharacterList.PropTypes = {
  photoURL: PropTypes.string.isRequired
}
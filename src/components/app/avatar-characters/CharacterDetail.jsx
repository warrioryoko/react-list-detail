import React, { Component, useParams } from 'react';
import { getDetails } from '../services/avatar-api';

export default class CharacterDetail extends Component {
  state = {
    character: {}
  }

  componentDidMount = async () => {
    const { match: { params } } = this.props;

    await getDetails(params._id)
      .then(character => this.setState({ character }));
  };

  render() {
    const { character } = this.state;

    return (
      <>
        <h3>{character.name}</h3>
        <img src={character.photoUrl} width="200" height="200"></img>
        <h4>Weapon: {character.weapon}</h4>
        <h4>Position: {character.position}</h4>
        <h4>Affiliation: {character.affiliation}</h4>
        <h4>Allies: {character.allies}</h4>
        <h4>Enemies: {character.enemies}</h4>
        <h4>First Appearance: {character.first}</h4>
      </>
    );
  }
}
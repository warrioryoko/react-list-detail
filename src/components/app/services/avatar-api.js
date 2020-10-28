export const getCharacters = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .catch(err => console.log('error', err));
};

export const getDetails = (characterId) => {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${characterId}`)
    .then(res => res.json())
    .catch(err => console.log('error', err));
};
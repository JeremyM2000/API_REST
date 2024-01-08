const axios = require('axios');

function get_all_club()
{
    axios.get('http://localhost:8080/clubs')
    .then(response => {
        console.log('Liste des équipes :', response.data);
    })
    .catch(error => {
        // console.error('Erreur lors de la récupération des équipes :', error);
        console.error('Erreur lors de la récupération des équipes');
    });
}

function get_all_player()
{
    axios.get('http://localhost:8080/players')
    .then(response => {
        console.log('Liste des joueurs :', response.data);
    })
    .catch(error => {
        // console.error('Erreur lors de la récupération des joueurs :', error);
        console.error('Erreur lors de la récupération des joueurs');
    });
}

module.exports = {
    get_all_club,
    get_all_player
  };
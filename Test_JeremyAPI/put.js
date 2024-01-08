const axios = require('axios');

function put_club(id, data)
{
// Mdodification d'un club
const request = 'http://localhost:8080/club/';

axios.put(request.concat('', id), data)
    // .then(response => {
    //     console.log('Données envoyées avec succès :', response.data);
    // })
    .catch(error => {
        // console.error('Erreur lors de l\'envoi des données :', error);
        console.error('Erreur lors de l\'envoi des données');
    });
};

function put_player(id, data)
{
// Mdodification d'un club
const request = 'http://localhost:8080/player/';

axios.put(request.concat('', id), data)
    // .then(response => {
    //     console.log('Données envoyées avec succès :', response.data);
    // })
    .catch(error => {
        // console.error('Erreur lors de l\'envoi des données :', error);
        console.error('Erreur lors de l\'envoi des données');
    });
};

module.exports = {
    put_club,
    put_player
  };
const axios = require('axios');

function post_club(data)
{
// Envoie de plusieurs clubs
axios.post('http://localhost:8080/clubs', data)
    // .then(response => {
    //     console.log('Données envoyées avec succès :', response.data);
    // })
    .catch(error => {
        // console.error('Erreur lors de l\'envoi des données :', error);
        console.error('Erreur lors de l\'envoi des données');
    });
};

function post_one_club(data)
{
// Envoie d'un club
axios.post('http://localhost:8080/club', data)
    // .then(response => {
    //     console.log('Données envoyées avec succès :', response.data);
    // })
    .catch(error => {
        // console.error('Erreur lors de l\'envoi des données :', error);
        console.error('Erreur lors de l\'envoi des données');
    });
};

function post_player(data)
{
// Envoie de plusieurs joueurs
axios.post('http://localhost:8080/players', data)
    // .then(response => {
    //     console.log('Données envoyées avec succès :', response.data);
    // })
    .catch(error => {
        // console.error('Erreur lors de l\'envoi des données :', error);
        console.error('Erreur lors de l\'envoi des données');
    });
};

function post_one_player(data)
{
// Envoie d'un joueur
axios.post('http://localhost:8080/player', data)
    // .then(response => {
    //     console.log('Données envoyées avec succès :', response.data);
    // })
    .catch(error => {
        // console.error('Erreur lors de l\'envoi des données :', error);
        console.error('Erreur lors de l\'envoi des données');
    });
};

function post_one_player_with_club(id, data)
{
// Envoie d'un joueur
const request = 'http://localhost:8080/player/';

axios.post(request.concat('', id), data)
    // .then(response => {
    //     console.log('Données envoyées avec succès :', response.data);
    // })
    .catch(error => {
        // console.error('Erreur lors de l\'envoi des données :', error);
        console.error('Erreur lors de l\'envoi des données');
    });
};

module.exports = {
    post_club,
    post_one_club,
    post_player,
    post_one_player,
    post_one_player_with_club
  };
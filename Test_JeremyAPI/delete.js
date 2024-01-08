const axios = require('axios');

function delete_one_club(id)
{
    const request = 'http://localhost:8080/club/';
// Supression d'un club
axios.delete(request.concat('', id))
    // .then(response => {
    //     console.log('Suppression d\'un club réeussie :');
    // })
    .catch(error => {
        // console.error('Erreur lors de la suppression d\'un club :', error);
        console.error('Erreur lors de la suppression d\'un club');
    });
};

function delete_all_club()
{
// Supression de tous les clubs
axios.delete('http://localhost:8080/clubs')
    // .then(response => {
    //     console.log('Suppression de tous les clubs réeussie :');
    // })
    .catch(error => {
        // console.error('Erreur lors de la suppression des clubs :', error);
        console.error('Erreur lors de la suppression des clubs');
    });
};

function delete_one_player(id)
{
    const request = 'http://localhost:8080/player/';
// Supression d'un joueur
axios.delete(request.concat('', id))
    // .then(response => {
    //     console.log('Suppression d\'un joueur réeussie :');
    // })
    .catch(error => {
        console.error('Erreur lors de la suppression d\'un joueur :', error);
        console.error('Erreur lors de la suppression d\'un joueur');
    });
};

function delete_all_player()
{
// Supression de tous les joueurs
axios.delete('http://localhost:8080/players')
    // .then(response => {
    //     console.log('Suppression de tous les joueurs réeussie :');
    // })
    .catch(error => {
        // console.error('Erreur lors de la suppression des joueurs :', error);
        console.error('Erreur lors de la suppression des joueurs');
    });
};

module.exports = {
    delete_one_club,
    delete_all_club,
    delete_one_player,
    delete_all_player
  };

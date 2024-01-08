const { get_all_club, get_all_player } = require('./get.js');
const { post_club, post_one_club, post_player, post_one_player, post_one_player_with_club } = require('./post.js');
const { delete_one_club, delete_all_club, delete_one_player, delete_all_player } = require('./delete.js');
const { put_club, put_player } = require('./put.js');

const OM = {
    "name": "OM",  
    "city": "Marseille",
    "league": "LIGUE 1" 
};

const AC_Milan = {
    "name": "AC Milan",  
    "city": "MILAN",
    "league": "Serie A"
};

const Kylian = {
    "firstName": "Kylian",  
    "lastName": "Mbappé",
    "age": 25
};

const Clubs = [
    {
        "name": "ASSE",  
        "city": "SAINT-ETIENNE",
        "league": "LIGUE 2" 
    },
    {
        "name": "OL",  
        "city": "LYON",
        "league": "LIGUE 1"
    },
    {
        "name": "PSG",  
        "city": "PARIS",
        "league": "LIGUE 1"
    },
    {
        "name": "Atlético de Madrid",  
        "city": "MADRID",
        "league": "La Liga"
    },
    {
        "name": "AC Milan",  
        "city": "MILAN",
        "league": "Serie A"
    }
];

const Players = [
    {
        "firstName": "Jérémy",  
        "lastName": "Morel",
        "age": 23, 
    },
    {
        "firstName": "Olivier",  
        "lastName": "Giroud",
        "age": 37, 
    },
    {
        "firstName": "Antoine",  
        "lastName": "Griezmann",
        "age": 32, 
    }
];

const waiting_time = 300;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function demo() {
    console.log('============ Démo Clubs ============');
    await sleep(waiting_time)

    console.log('\n');

    console.log('Suppression de tous les clubs (DELETE)');
    delete_all_club();
    await sleep(waiting_time)
    get_all_club();
    await sleep(waiting_time);
    
    console.log('\n');
    
    console.log('Ajout de clubs (POST)');
    post_club(Clubs);
    await sleep(waiting_time);
    get_all_club();
    await sleep(waiting_time);
    
    console.log('\n');
    
    console.log('Suppression du club AC Milan (DELETE)');
    delete_one_club('5')
    await sleep(waiting_time);
    get_all_club();
    await sleep(waiting_time);
    
    console.log('\n');
    
    console.log('Modification du club l\'OL en l\'OM (PUT)');
    put_club(2, OM);
    await sleep(waiting_time);
    get_all_club();
    await sleep(waiting_time);
    
    console.log('\n');

    console.log('Ajout du club AC Milan (POST)');
    post_one_club(AC_Milan);
    await sleep(waiting_time);
    get_all_club();
    await sleep(waiting_time);

    console.log('\n');
    
    console.log('Suppression de tous les clubs (DELETE)');
    delete_all_club();
    await sleep(waiting_time);
    get_all_club();
    await sleep(waiting_time)

    console.log('\n');

    console.log('============ Démo Joueurs ============');
    await sleep(waiting_time)
    
    console.log('\n');
    
    console.log('Suppression de tous les joueurs (DELETE)');
    delete_all_player();
    await sleep(waiting_time)
    get_all_player();
    await sleep(waiting_time);
        
    console.log('\n');
    
    console.log('Ajout de joueurs (POST)');
    post_player(Players)
    await sleep(waiting_time);
    get_all_player();
    await sleep(waiting_time);
        
    console.log('\n');
    
    console.log('Suppression du joueur Jérémy Morel (DELETE)');
    delete_one_player('1')
    await sleep(waiting_time);
    get_all_player();
    await sleep(waiting_time);
        
    console.log('\n');
    
    console.log('Modification du joueur Olivier Giroud en Kylian Mbappé (PUT)');
    put_player(2, Kylian);
    await sleep(waiting_time);
    get_all_player();
    await sleep(waiting_time);
        
    console.log('\n');
    
    console.log('Suppression de tous les joueurs (DELETE)');
    delete_all_player();
    await sleep(waiting_time);
    get_all_player();
    await sleep(waiting_time);

    console.log('\n');

    console.log('============ Démo Joueurs avec équipes ============');

    console.log('\n');

    console.log('Ajout de clubs (POST)');
    post_club(Clubs);
    await sleep(waiting_time);
    get_all_club();
    await sleep(waiting_time);
    
    console.log('\n');

    console.log('Ajout d\'un joueur avec une équipe  (POST)');
    post_one_player_with_club(3, Kylian);
    await sleep(waiting_time);
    get_all_player();
    await sleep(waiting_time);

    console.log('\n');
    
    console.log('Suppression de tous les joueurs (DELETE)');
    delete_all_player();
    await sleep(waiting_time);
    get_all_player();
    await sleep(waiting_time);

    console.log('\n');
    
    console.log('Suppression de tous les clubs (DELETE)');
    delete_all_club();
    await sleep(waiting_time);
    get_all_club();
    await sleep(waiting_time)
}

demo();
package com.de3.JeremyAPI.controller;

import com.de3.JeremyAPI.dao.ClubRepository;
import com.de3.JeremyAPI.dao.PlayerRepository;
import com.de3.JeremyAPI.domain.Club;
import com.de3.JeremyAPI.domain.Player;
import com.de3.JeremyAPI.service.ClubService;
import com.de3.JeremyAPI.service.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PlayerController {

    @Autowired
    private PlayerService playerService;

    @Autowired
    private ClubService clubService;

    @Autowired
    private PlayerRepository playerRepository;

    @GetMapping("/players")
    public List<Player> allPlayers() {

        return this.playerService.findAllPlayers();
    }

    @GetMapping("/player/{id}")
    public Player onePlayer(@PathVariable Long id) {

        return this.playerService.findPlayer(id);
    }

    @PostMapping("/player")
    public Player createPlayer(@RequestBody Player Player) {

        return this.playerService.createPlayer(Player);
    }

    @PostMapping("/player/{clubId}")
    public Player createPlayerWithClub(@PathVariable Long clubId, @RequestBody Player player) {
        Club club = clubService.findClub(clubId);
        player.setClub(club);
        return playerService.createPlayer(player);
    }

    @PostMapping("/players")
    public List<Player> createPlayer(@RequestBody List<Player> Players) {
        return this.playerService.createSeveralPlayers(Players);
    }

    @DeleteMapping("/player/{id}")
    public void deletePlayer(@PathVariable Long id) {

        this.playerService.deletePlayer(id);
    }

    @DeleteMapping("/players")
    public void deleteAllPlayer() {
        this.playerService.deleteAllPlayer();
        playerRepository.resetIdSequence();
    }

    @PutMapping("/player/{id}")
    Player replacePlayer(@RequestBody Player Player, @PathVariable Long id) {

        Player foundPlayer = this.playerService.findPlayer(id);

        if (Player != null) {
            foundPlayer.setFirstName(Player.getFirstName());
            foundPlayer.setLastName(Player.getLastName());
            foundPlayer.setAge(Player.getAge());
            foundPlayer.setClub(Player.getClub());

            foundPlayer = this.playerService.savePlayer(foundPlayer);
        }

        return foundPlayer;
    }
}

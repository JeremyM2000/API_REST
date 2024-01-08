package com.de3.JeremyAPI.controller;

import com.de3.JeremyAPI.dao.ClubRepository;
import com.de3.JeremyAPI.domain.Club;
import com.de3.JeremyAPI.service.ClubService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ClubController {

    @Autowired
    private ClubService clubService;

    @Autowired
    private ClubRepository clubRepository;

    @GetMapping("/clubs")
    public List<Club> allClubs() {
        return this.clubService.findAllClubs();
    }

    @GetMapping("/club/{id}")
    public Club oneClub(@PathVariable Long id) {
        return this.clubService.findClub(id);
    }

    @PostMapping("/club")
    public Club createClub(@RequestBody Club club) {
        return this.clubService.createClub(club);
    }

    @PostMapping("/clubs")
    public List<Club> createClub(@RequestBody List<Club> clubs) {
        return this.clubService.createSeveralClubs(clubs);
    }

    @DeleteMapping("/club/{id}")
    public void deleteClub(@PathVariable Long id) {
        this.clubService.deleteClub(id);
    }

    @DeleteMapping("/clubs")
    public void deleteAllClub() {
        this.clubService.deleteAllClub();
        clubRepository.resetIdSequence();
    }

    @PutMapping("/club/{id}")
    Club replaceClub(@RequestBody Club club, @PathVariable Long id) {

        Club foundClub = this.clubService.findClub(id);

        if (club != null) {
            foundClub.setName(club.getName());
            foundClub.setCity(club.getCity());
            foundClub.setLeague(club.getLeague());
            foundClub = this.clubService.saveClub(foundClub);
        }

        return foundClub;
    }
}

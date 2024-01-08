package com.de3.JeremyAPI.service.impl;

import com.de3.JeremyAPI.dao.ClubRepository;
import com.de3.JeremyAPI.domain.Club;
import com.de3.JeremyAPI.service.ClubService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ClubServiceImpl implements ClubService {

    @Autowired
    private ClubRepository clubRepository;

    @Override
    @Transactional(readOnly = true)
    public List<Club> findAllClubs() {
        return this.clubRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Club findClub(Long id) {
        return this.clubRepository.findById(id).orElse(null);
    }

    @Override
    public Club createClub(Club club) {
        return this.clubRepository.save(club);
    }

    @Override
    public List<Club> createSeveralClubs(List<Club> AllFoundClub) {
        return this.clubRepository.saveAll(AllFoundClub);
    }

    @Override
    public void deleteClub(Long id) {
        this.clubRepository.deleteById(id);
    }

    @Override
    public void deleteAllClub() {
        this.clubRepository.deleteAll();
    }

    @Override
    public Club saveClub(Club foundClub) {
        return this.clubRepository.save(foundClub);
    }
}

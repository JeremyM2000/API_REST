package com.de3.JeremyAPI.service;

import com.de3.JeremyAPI.domain.Club;

import java.util.List;

public interface ClubService {

    public List<Club> findAllClubs();

    public Club findClub(Long id);

    public Club createClub(Club club);

    public List<Club> createSeveralClubs(List<Club> AllFoundClub);

    public void deleteClub(Long id);

    public void deleteAllClub();

    public Club saveClub(Club foundClub);
}

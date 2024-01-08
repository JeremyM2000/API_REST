package com.de3.JeremyAPI.service.impl;

import com.de3.JeremyAPI.dao.PlayerRepository;
import com.de3.JeremyAPI.domain.Player;
import com.de3.JeremyAPI.service.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class PlayerServiceImpl implements PlayerService {
    @Autowired
    private PlayerRepository PlayerRepository;

    @Override
    @Transactional(readOnly = true)
    public List<Player> findAllPlayers() {
        return this.PlayerRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Player findPlayer(Long id) {
        return this.PlayerRepository.findById(id).orElse(null);
    }

    @Override
    public Player createPlayer(Player Player) {
        return this.PlayerRepository.save(Player);
    }

    @Override
    public List<Player> createSeveralPlayers(List<Player> AllFoundPlayer) {
        return this.PlayerRepository.saveAll(AllFoundPlayer);
    }

    @Override
    public void deletePlayer(Long id) {
        this.PlayerRepository.deleteById(id);
    }

    @Override
    public void deleteAllPlayer() {
        this.PlayerRepository.deleteAll();
    }

    @Override
    public Player savePlayer(Player foundPlayer) {
        return this.PlayerRepository.save(foundPlayer);
    }
}

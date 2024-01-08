package com.de3.JeremyAPI.service;

import com.de3.JeremyAPI.domain.Player;

import java.util.List;

public interface PlayerService {
    public List<Player> findAllPlayers();

    public Player findPlayer(Long id);

    public Player createPlayer(Player player);

    public List<Player> createSeveralPlayers(List<Player> AllFoundPlayer);

    public void deletePlayer(Long id);

    public void deleteAllPlayer();

    public Player savePlayer(Player foundPlayer);
}

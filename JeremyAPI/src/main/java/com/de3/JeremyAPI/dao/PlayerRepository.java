package com.de3.JeremyAPI.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.de3.JeremyAPI.domain.Player;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface PlayerRepository extends JpaRepository<Player, Long> {
    @Modifying
    @Transactional
    @Query(value = "ALTER TABLE Player ALTER COLUMN id RESTART WITH 1", nativeQuery = true)
    void resetIdSequence(); //Permet de reinitialliser l'auto incrément de la table après la suppression des données
}

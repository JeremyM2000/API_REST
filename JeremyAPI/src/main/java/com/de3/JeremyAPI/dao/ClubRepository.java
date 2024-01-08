package com.de3.JeremyAPI.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.de3.JeremyAPI.domain.Club;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface ClubRepository extends JpaRepository<Club, Long> {
    @Modifying
    @Transactional
    @Query(value = "ALTER TABLE Club ALTER COLUMN id RESTART WITH 1", nativeQuery = true)
    void resetIdSequence(); //Permet de reinitialliser l'auto incrément de la table après la suppression des données
}

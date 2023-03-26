package com.example.server.repositories;

import com.example.server.entities.Victim;
import jakarta.persistence.Entity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VictimRepository extends JpaRepository<Victim ,Integer> {
}

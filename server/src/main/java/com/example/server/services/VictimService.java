package com.example.server.services;

import java.util.List;
import java.util.Optional;

import com.example.server.entities.Victim;
import com.example.server.repositories.VictimRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VictimService {

    @Autowired
    private VictimRepository victimRepository;

    public Victim saveVictimDetails(Victim victim) {
        return victimRepository.save(victim);
    }

    public List<Victim> getAllVictimDetails() {
        return victimRepository.findAll();
    }

    public Victim getVictimById(Long id) {
        return victimRepository.findById(id).orElse(null);
    }

    public List<Victim> getAllVictims() {
        return victimRepository.findAll();
    }
    public List<Victim> getAllVerifiedVictims() {
      return victimRepository.findByIsVerifiedTrueAndIsDeliveredFalse();
  }
    public Victim updateVictim(Long id, Victim updatedVictim) {
        Optional<Victim> optionalVictim = victimRepository.findById(id);
        if (optionalVictim.isPresent()) {
            Victim victim = optionalVictim.get();
            victim.setIsDelivered(updatedVictim.getIsDelivered());
            return victimRepository.save(victim);
        } else {
            return null;
        }
    }
    public List<Victim> getAllToDeliveyVictims() {
        return victimRepository.findByIsVerifiedTrueAndIsDeliveredTrue();
    }



}
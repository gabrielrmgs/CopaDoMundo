package io.programe.wordcupapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import io.programe.wordcupapi.models.Jogador;

public interface JogadorRepository extends JpaRepository<Jogador, Long>{

}

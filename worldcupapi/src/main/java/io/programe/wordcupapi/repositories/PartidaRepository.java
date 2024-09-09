package io.programe.wordcupapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import io.programe.wordcupapi.models.Partida;

public interface PartidaRepository extends JpaRepository<Partida, Long> {

}

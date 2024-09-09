package io.programe.wordcupapi.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import io.programe.wordcupapi.models.Jogador;

public interface JogadorRepository extends JpaRepository<Jogador, Long>{

    @Query(value = "SELECT j FROM Jogador j WHERE j.nome like %:nome%")
    List<Jogador> findByNome(@Param("nome") String nome);


}

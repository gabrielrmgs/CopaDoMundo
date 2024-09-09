package io.programe.wordcupapi.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.programe.wordcupapi.models.Jogador;
import io.programe.wordcupapi.models.Time;
import io.programe.wordcupapi.repositories.JogadorRepository;
import io.programe.wordcupapi.repositories.TimeRepository;

@Service
public class JogadorService {

    @Autowired
    private JogadorRepository jogadorRepository;

    @Autowired
    private TimeRepository timeRepository;

    public void salvarJogador(Jogador jogador) {
        jogador.setId(null);
        if (jogador.getClube() != null) {
            try {
                Optional<Time> time = timeRepository.findById(jogador.getClube().getId());
                Time novoTime = time.get();
                novoTime.adicionarJogador(jogador);
                timeRepository.save(novoTime);
                jogadorRepository.save(jogador);
            } catch (Exception e) {
                throw new RuntimeException("O time relacionada a este jogador não existe!");
            }
        } else {
            try {
                jogadorRepository.save(jogador);
            } catch (Exception e) {
                throw new RuntimeException("Não foi possível salvar o jogador "+ jogador.getNome());
            }
        }
    }

    public List<Jogador> pesquisarJogadorNome(String nome) {
        List<Jogador> jogador = jogadorRepository.findByNome(nome);
        return jogador;
    }
}

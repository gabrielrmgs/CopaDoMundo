package io.programe.wordcupapi.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.programe.wordcupapi.models.Jogador;
import io.programe.wordcupapi.repositories.JogadorRepository;
import io.programe.wordcupapi.services.JogadorService;

@RestController
@RequestMapping("/jogador")
public class JogadorController {

    @Autowired
    private JogadorService jogadorService;
    @Autowired
    private JogadorRepository jogadorRepository;

    @PostMapping("/salvar_jogador")
    public void salvarJogador(@RequestBody Jogador jogador) {
        jogadorService.salvarJogador(jogador);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Jogador>> buscarJogador(@PathVariable Long id){
        Optional<Jogador> jogador = jogadorRepository.findById(id);
        return ResponseEntity.ok().body(jogador);
    }

    @GetMapping("/pesquisa/{nome}")
    public ResponseEntity<List<Jogador>> buscarJogadorNome(@PathVariable String nome) {
        List<Jogador> jogador = jogadorService.pesquisarJogadorNome(nome);
        return ResponseEntity.ok().body(jogador);
    }

    @GetMapping("/mostrarJogadores")
    public ResponseEntity<List<Jogador>> mostrarTodosJogadores() {
        return ResponseEntity.ok().body(jogadorRepository.findAll());
    }

}

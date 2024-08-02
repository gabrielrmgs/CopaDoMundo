package io.programe.wordcupapi.models;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;

@Entity
@Table
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Slf4j
@ToString
@EqualsAndHashCode
public class Time {

    @Id
    @SequenceGenerator(name = "seq", sequenceName = "time_seq")
    @GeneratedValue(generator = "seq", strategy = GenerationType.SEQUENCE)
    private Long id;

    private String nome;
    private String cidade;
    
    @OneToMany
    private List<Jogador> jogadores = new ArrayList<Jogador>();

    public Time(String nome, String cidade, List<Jogador> jogadores) {
        this.nome = nome;
        this.cidade = cidade;
        this.jogadores = jogadores;
    }

    public void adicionarJogador(Jogador jogador) {
        jogadores.add(jogador);
    }
    
    public void excluirJogador(Jogador jogador) {
        jogadores.remove(jogador);
    }

}
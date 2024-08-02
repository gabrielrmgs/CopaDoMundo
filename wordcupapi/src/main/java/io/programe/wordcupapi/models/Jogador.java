package io.programe.wordcupapi.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
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
public class Jogador {

    @Id
    @SequenceGenerator(name = "seq", sequenceName = "seq_jogador")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq")
    private Long id;

    @Column(nullable = false, length = 21)
    private String nome;

    @Column(nullable = false, length = 33)
    private String posicao;

    @Column(nullable = false, length = 2)
    private int numero;

    @OneToOne
    private Time clube;

    public Jogador(String nome, String posicao, int numero, Time clube) {
        this.nome = nome;
        this.posicao = posicao;
        this.numero = numero;
        this.clube = clube;
    }

}
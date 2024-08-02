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
public class Partida {

    @Id
    @SequenceGenerator(name = "seq", sequenceName = "partida_seq")
    @GeneratedValue(generator = "seq", strategy = GenerationType.SEQUENCE)
    private Long id;

    @OneToOne
    private Time timeMandante;

    @OneToOne
    private Time timeVisitante;

    @Column(nullable = false, length = 33)
    private String estadio;

    @OneToOne
    private Time timeVencedor;
    
    private int golsMandante;
    
    private int golsVisitante;

    public Partida(Time timeMandante, Time timeVisitante, String estadio, Time timeVencedor, int golsMandante, int golsVisitante) {
        this.timeMandante = timeMandante;
        this.timeVisitante = timeVisitante;
        this.estadio = estadio;
        this.timeVencedor = timeVencedor;
        this.golsMandante = golsMandante;
        this.golsVisitante = golsVisitante;
    }

    public Time definirVencedor() {
        if (golsMandante > golsVisitante) {
            timeVencedor = timeMandante;
        } else {
            timeVencedor = timeVisitante;
        }
        return timeVencedor;
    }   
}
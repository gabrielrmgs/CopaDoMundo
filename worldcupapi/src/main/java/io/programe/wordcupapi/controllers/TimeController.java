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
import io.programe.wordcupapi.models.Time;
import io.programe.wordcupapi.repositories.TimeRepository;

@RestController
@RequestMapping("/time")
public class TimeController {

    @Autowired
    TimeRepository timeRepository;

    @PostMapping("/salvar_time")
    public void salvarTime(@RequestBody Time time) {
        timeRepository.save(time);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Time>> buscarTimeId(@PathVariable Long id) {
        Optional<Time> time = timeRepository.findById(id);
        return ResponseEntity.ok().body(time);
    }

    @GetMapping("/mostrarTimes")
    public ResponseEntity<List<Time>> mostrarTodosTimes() {
        return ResponseEntity.ok().body(timeRepository.findAll());
    }

}

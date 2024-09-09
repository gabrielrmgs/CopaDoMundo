package io.programe.wordcupapi.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.programe.wordcupapi.models.Time;
import io.programe.wordcupapi.repositories.TimeRepository;

@Service
public class TimeService {

    @Autowired
    private TimeRepository timeRepository;

    public void salvarTime(Time time) {
        timeRepository.save(time);
    }

}

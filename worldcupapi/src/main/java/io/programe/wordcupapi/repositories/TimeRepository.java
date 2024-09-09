package io.programe.wordcupapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import io.programe.wordcupapi.models.Time;

public interface TimeRepository extends JpaRepository<Time, Long> {

}

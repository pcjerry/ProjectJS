package be.kul.project.repository;

import be.kul.project.model.History;
import org.springframework.data.repository.CrudRepository;

public interface HistoryRepository extends CrudRepository<History, Integer> {
    Iterable<History> findByEmail(String email);
}
package be.kul.project.repository;

import org.springframework.data.repository.CrudRepository;

import be.kul.project.model.Cars;

public interface CarsRepository extends CrudRepository<Cars, Integer> {

}

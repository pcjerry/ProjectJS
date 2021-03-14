package be.kul.project.web;

import be.kul.project.model.Cars;
import be.kul.project.model.History;
import be.kul.project.repository.CarsRepository;
import be.kul.project.repository.HistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path = "/project")
public class MainController {
    @Autowired
    HistoryRepository historyRepository;
    @Autowired
    CarsRepository carsRepository;

    //enable CORS
    @CrossOrigin(origins = "http://localhost:3000")

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Mapping Cars~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    //Returning all Cars
    @GetMapping(path = "/cars/all")
    public @ResponseBody
    Iterable<Cars> getAllCars() {
        return carsRepository.findAll();
    }

    //Returning all available Cars
    /*@GetMapping(path = "/cars/available")
    public @ResponseBody
    Iterable<Cars> getAvailableCars() {
        return carsRepository.findAvailable();
    }*/

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Mapping History~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    //add ride
    @PostMapping(path = "/history/add")
    public @ResponseBody
    String addNewRide(@RequestParam String email, @RequestParam Double start_latitude, @RequestParam Double start_longitude, @RequestParam Double end_latitude, @RequestParam Double end_longitude, @RequestParam Integer time, @RequestParam Integer amount_km) {
        History h = new History();
        h.setEmail(email);
        h.setStart_latitude(start_latitude);
        h.setStart_longitude(start_longitude);
        h.setEnd_latitude(end_latitude);
        h.setEnd_longitude(end_longitude);
        h.setTime(time);
        h.setAmount_km(amount_km);
        historyRepository.save(h);
        return "Saved";
    }

    //get all rides for 1 user
    @GetMapping(path = "/history/all")
    public @ResponseBody
    Iterable<History> getHistory(@RequestParam String email) {
        return historyRepository.findByEmail(email);
    }

    //get specific ride?
}
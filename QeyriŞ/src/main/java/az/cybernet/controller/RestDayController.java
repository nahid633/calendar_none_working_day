package az.cybernet.controller;

import az.cybernet.model.Day;
import az.cybernet.service.DayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

/**
 * Created by Nahid on 6/17/17.
 */
@RestController
@RequestMapping("/api")
public class RestDayController {
    @Autowired
    private DayService dayService;

    @RequestMapping(value = "/days", method = RequestMethod.GET)
    public ResponseEntity<List<Day>> listAllDays() {
        List<Day> days= dayService.getAllDays();
        if (days.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(days, HttpStatus.OK);
    }

    @RequestMapping(value = "/days", method = RequestMethod.POST,consumes =  { MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Void> addDay(@RequestBody Day day, UriComponentsBuilder ucBuilder) {
        dayService.addDay(day);
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(ucBuilder.path("/days/{id}").buildAndExpand(day.getId()).toUri());
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @RequestMapping(value = "/days/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> removeDay(@PathVariable("id") long id) {
        dayService.deleteDay(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @RequestMapping(value = "/days/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Day> getDay(@PathVariable("id") long id) {
        Day day = dayService.getDaybyId(id);
        if (day == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(day, HttpStatus.OK);
    }
    @RequestMapping(value="/days/{id}", method = RequestMethod.PUT )
    public ResponseEntity<Day> updateDay(@PathVariable("id") long id,@RequestBody  Day day) {
        Day currentday = dayService.getDaybyId(id);
        if (currentday ==null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        currentday .setTitle(day.getTitle());
        currentday .setStartDate(day.getStartDate());
        currentday .setEndDate(day.getEndDate());
        currentday.setAllDay(day.getAllDay());
        dayService.updateDay(currentday);
        return new ResponseEntity<>(day, HttpStatus.OK);
    }

}

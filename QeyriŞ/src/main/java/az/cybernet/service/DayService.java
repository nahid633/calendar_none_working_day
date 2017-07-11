package az.cybernet.service;

import az.cybernet.model.Day;

import java.util.List;

/**
 * Created by Nahid on 6/17/17.
 */
public interface DayService {
    Day getDaybyId(long id);
    void addDay(Day day);
    void updateDay(Day day);
    void deleteDay(long id);
    List<Day> getAllDays();
}

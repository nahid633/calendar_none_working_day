package az.cybernet.service;

/**
 * Created by Nahid on 6/17/17.
 */

import az.cybernet.dao.DayDao;
import az.cybernet.model.Day;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service("dayService")
@Transactional
public class DayServiceImpl  implements  DayService{

    @Autowired
    private DayDao dayDao;
    @Override
    public Day getDaybyId(long id) {
        return dayDao.getDaybyId(id);
    }

    @Override
    public void addDay(Day day) {
        dayDao.addDay(day);
    }
    @Override
    public void updateDay(Day day) {
        dayDao.updateDay(day);
    }

    @Override
    public void deleteDay(long id) {
        dayDao.deleteDay(id);
    }

    @Override
    public List<Day> getAllDays() {
        return dayDao.getAllDays();
    }
}

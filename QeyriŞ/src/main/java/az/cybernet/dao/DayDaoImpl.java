package az.cybernet.dao;

import az.cybernet.model.Day;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Nahid on 6/17/17.
 */
@Repository("dayDao")
public class DayDaoImpl extends AbstractDao<Long, Day> implements DayDao {


    @Override
    public Day getDaybyId(long id) {
        return getByKey(id);
    }

    @Override
    public void addDay(Day day) {
    persist(day);
    }

    @Override
    public void updateDay(Day day) {
        update(day);
    }

    @Override
    public void deleteDay(long id) {
    Day day = getByKey(id);
        delete(day);
    }

    @Override
    public List<Day> getAllDays() {
        return getEntityManager().createQuery("SELECT u from Day u").getResultList();
    }
}

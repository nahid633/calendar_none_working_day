package az.cybernet.model;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;


import javax.persistence.*;
import java.util.Date;

/**
 * Created by Nahid on 6/17/17.
 */
@Entity
@Table(name="none_working_days")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Day {
    @Id
    private long id;
    @Column(name="title",nullable = false)
    private String title;
    @JsonProperty("start")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm")
    @Column(name="start_date",nullable = true)
    private Date startDate;
    @JsonProperty("end")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm")
    @Column(name="end_date",nullable = true)
    private Date endDate;
    @JsonProperty("allDay")
    @Column(name="allDay",nullable = true)
    private String allDay;

    public String getAllDay() {
        return allDay;
    }

    public void setAllDay(String allDay) {
        this.allDay = allDay;
    }


    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }



}

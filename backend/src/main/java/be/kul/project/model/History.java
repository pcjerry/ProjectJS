package be.kul.project.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "History")
public class History {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "id")
    private Integer id;

    @Column(name = "email")
    private String email;

    @Column(name = "start_latitude")
    private Double start_latitude;

    @Column(name = "start_longitude")
    private Double start_longitude;

    @Column(name = "end_latitude")
    private Double end_latitude;

    @Column(name = "end_longitude")
    private Double end_longitude;

    @Column(name = "time")
    private Integer time;

    @Column(name = "amount_km")
    private Integer amount_km;

    public void setAmount_km(Integer amount_km) {
        this.amount_km = amount_km;
    }

    public void setTime(Integer time) {
        this.time = time;
    }

    public void setEnd_latitude(Double end_latitude) {
        this.end_latitude = end_latitude;
    }

    public void setEnd_longitude(Double end_longitude) {
        this.end_longitude = end_longitude;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setStart_latitude(Double start_latitude) {
        this.start_latitude = start_latitude;
    }

    public void setStart_longitude(Double start_longitude) {
        this.start_longitude = start_longitude;
    }

    public Integer getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public Double getStart_latitude() {
        return start_latitude;
    }

    public Double getEnd_latitude() {
        return end_latitude;
    }

    public Integer getTime() {
        return time;
    }

    public Integer getAmount_km() {
        return amount_km;
    }

    public Double getStart_longitude() { return start_longitude; }

    public Double getEnd_longitude() { return end_longitude; }
}
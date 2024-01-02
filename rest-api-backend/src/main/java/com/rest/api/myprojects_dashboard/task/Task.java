package com.rest.api.myprojects_dashboard.task;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.rest.api.myprojects_dashboard.project.Project;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;
import utils.Identifiable;
import java.util.Date;

@Entity
@Getter
@Setter
public class Task extends Identifiable {

    private String name;

    private Date startDate;

    private Date endDate;

    private String comment;

    @ManyToOne
    private Project project;

}

package com.rest.api.myprojects_dashboard.project;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.rest.api.myprojects_dashboard.folder.Folder;
import com.rest.api.myprojects_dashboard.task.Task;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import utils.Identifiable;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "project")
public class Project extends Identifiable {

    @Column(name = "project_name")
    private String name;

    @ManyToOne
    private Folder folder;

    @Enumerated(EnumType.STRING)
    private Priority priority;
    public enum Priority {
        No, Normal, Medium, High
    }

    @Column(name = "root_path")
    private String rootPath;

    @Column(length = 600)
    private String description;

    @Getter(AccessLevel.NONE)
    @Temporal(TemporalType.DATE)
    private Date addedOn;

    @Enumerated(EnumType.STRING)
    private Status status;
    enum Status {
        InProgress, Finished, Delayed, UnFinished
    }

    @Getter(AccessLevel.NONE)
    @Transient
    private Integer noOfTasks;

    @Getter(AccessLevel.NONE)
    @Transient
    private Integer noOfBugs;

    @OneToMany(mappedBy = "project")
    @JsonIgnore
    private List<Task> tasks;

    public Date getAddedOn() {
        return new Date();
    }
    public Integer getNoOfTasks() {
        return tasks.size();
    }
    public Integer getNoOfBugs() {
        return 13;
    }
}
package com.rest.api.myprojects_dashboard.project;

import com.rest.api.myprojects_dashboard.folder.Folder;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import utils.Identifiable;

import java.text.SimpleDateFormat;
import java.util.Date;

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
        No, Low, Medium, High
    }

    @Column(name = "root_path")
    private String rootPath;

    @Column(length = 600)
    private String description;

    @Getter(AccessLevel.NONE)
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

    public Date getAddedOn() {
        return new Date();
    }
    public Integer getNoOfTasks() {
        return 10;
    }
    public Integer getNoOfBugs() {
        return 13;
    }
}
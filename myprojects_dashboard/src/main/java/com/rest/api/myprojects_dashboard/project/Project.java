package com.rest.api.myprojects_dashboard.project;

import com.rest.api.myprojects_dashboard.folder.Folder;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import utils.Identifiable;

@Getter
@Setter
@Entity
@Table(name = "project")
public class Project extends Identifiable {

    @Column(name = "project_name", unique = true)
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


}
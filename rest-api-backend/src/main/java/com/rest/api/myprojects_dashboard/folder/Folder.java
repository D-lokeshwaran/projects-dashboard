package com.rest.api.myprojects_dashboard.folder;

import com.rest.api.myprojects_dashboard.project.Project;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import utils.Identifiable;

import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "folder")
public class Folder extends Identifiable {

    @Column(name = "folder_name", unique = true)
    private String name;

    @Column(name = "initial_root_path")
    private String initialRootPath;

    @OneToMany(mappedBy = "folder")
    private List<Project> projects;

}
package com.rest.api.myprojects_dashboard.project;

import com.rest.api.myprojects_dashboard.task.Task;
import org.hibernate.boot.model.naming.IllegalIdentifierException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import java.net.URI;
import java.util.List;

@RestController
public class ProjectController {

    private final ProjectRepository repository;

    public ProjectController(ProjectRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/projects")
    public List<Project> retrieveAllProjects() {
        return repository.findAll();
    }

    @GetMapping("/projects/{oid}")
    public Project retrieveProject(@PathVariable Long oid) {
        Project project = repository.findById(oid)
                .orElseThrow(() -> new IllegalIdentifierException("oid " + oid + " does not exits!"));
        return project;
    }

    @GetMapping("/projects/{oid}/tasks")
    public List<Task> retrieveTasksForProject(@PathVariable Long oid) {
        Project project = repository.findById(oid)
                .orElseThrow(() -> new IllegalIdentifierException("oid " + oid + " does not exits!"));
        return project.getTasks();
    }

    @PostMapping("/projects")
    public ResponseEntity<Project> createProject(@RequestBody Project project) {
        repository.save(project);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{oid}")
                .buildAndExpand(project.getOid())
                .toUri(); // this will return the request entity with get uri.
        return ResponseEntity.created(location).build();
    }

    @PutMapping("/projects")
    private ResponseEntity<Project> updateProject(@RequestBody Project project) {
        repository.save(project);
        return ResponseEntity.accepted().build();
    }

    @DeleteMapping("/projects/{oid}")
    public ResponseEntity<Project> deleteProject(@PathVariable Long oid) {
        repository.deleteById(oid);
        return ResponseEntity.noContent().build();
    }
    
}

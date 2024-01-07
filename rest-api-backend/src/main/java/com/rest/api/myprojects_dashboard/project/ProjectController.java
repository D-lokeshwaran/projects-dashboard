package com.rest.api.myprojects_dashboard.project;

import com.rest.api.myprojects_dashboard.task.Task;
import com.rest.api.myprojects_dashboard.task.TaskRepository;
import org.hibernate.boot.model.naming.IllegalIdentifierException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import java.net.URI;
import java.util.List;

@RestController
public class ProjectController {

    private final ProjectRepository projectRepository;

    private final TaskRepository taskRepository;

    public ProjectController(ProjectRepository repository, TaskRepository taskRepository) {
        this.projectRepository = repository;
        this.taskRepository = taskRepository;
    }

    @GetMapping("/projects")
    public List<Project> retrieveAllProjects() {
        return projectRepository.findAll();
    }

    @GetMapping("/projects/{oid}")
    public Project retrieveProject(@PathVariable Long oid) {
        Project project = projectRepository.findById(oid)
                .orElseThrow(() -> new IllegalIdentifierException("oid " + oid + " does not exits!"));
        return project;
    }

    @GetMapping("/projects/{oid}/tasks")
    public List<Task> retrieveTasksForProject(@PathVariable Long oid) {
        Project project = projectRepository.findById(oid)
                .orElseThrow(() -> new IllegalIdentifierException("oid " + oid + " does not exits!"));
        return project.getTasks();
    }

    @PostMapping("/projects")
    public ResponseEntity<Project> createProject(@RequestBody Project project) {
        projectRepository.save(project);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{oid}")
                .buildAndExpand(project.getOid())
                .toUri(); // this will return the request entity with get uri.
        return ResponseEntity.created(location).build();
    }

    @PostMapping("/projects/{oid}/tasks")
    public ResponseEntity<Task> createTaskForProject(@PathVariable Long oid, @RequestBody Task task) {
        Project project = projectRepository.findById(oid)
                .orElseThrow(() -> new IllegalIdentifierException("oid " + oid + " does not exits!"));
        task.setProject(project);
        taskRepository.save(task);
        URI taskLocation = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{oid}")
                .buildAndExpand(task.getOid())
                .toUri(); // sent the created task location along with response...
        return ResponseEntity.created(taskLocation).build();
    }

    @PutMapping("/projects")
    private ResponseEntity<Project> updateProject(@RequestBody Project project) {
        projectRepository.save(project);
        return ResponseEntity.accepted().build();
    }

    @DeleteMapping("/projects/{oid}")
    public ResponseEntity<Project> deleteProject(@PathVariable Long oid) {
        projectRepository.deleteById(oid);
        return ResponseEntity.noContent().build();
    }
    
}

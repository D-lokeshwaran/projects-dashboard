package com.rest.api.myprojects_dashboard.task;

import org.hibernate.boot.model.naming.IllegalIdentifierException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class TaskController {

    private final TaskRepository taskRepository;

    public TaskController(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @GetMapping("/tasks")
    public List<Task> retrieveAllTasks() {
        return taskRepository.findAll();
    }

    @GetMapping("/tasks/{oid}")
    public Task retrieveTaskById(@PathVariable Long oid) {
        Optional<Task> opTask = taskRepository.findById(oid);
        if(opTask.isPresent()) {
            return opTask.get();
        } else throw new IllegalIdentifierException("Task does not exit!");
    }

    @PostMapping("/tasks")
    public ResponseEntity<Task> createTask(@RequestBody Task task) {
        taskRepository.save(task);
        return ResponseEntity.accepted().build();
    }

    @DeleteMapping("/tasks/{oid}")
    public ResponseEntity<Long> deleteTask(@PathVariable Long oid) {
        taskRepository.deleteById(oid);
        return ResponseEntity.ok(oid);
    }

}

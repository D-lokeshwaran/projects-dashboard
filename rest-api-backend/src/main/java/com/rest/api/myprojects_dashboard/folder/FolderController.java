package com.rest.api.myprojects_dashboard.folder;

import com.rest.api.myprojects_dashboard.project.Project;
import org.hibernate.boot.model.naming.IllegalIdentifierException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
public class FolderController {
    
    private final FolderRepository repository;

    public FolderController(FolderRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/folders")
    public List<Folder> retrieveAllFolders() {
        return repository.findAll();
    }

    @GetMapping("/folders/{folderName}")
    public Folder retrieveFolder(@PathVariable String folder) {
        Folder retrievedFolder = repository.findById(folder)
                .orElseThrow(() -> new IllegalIdentifierException("Folder name " + folder + " does not exits!"));
        return retrievedFolder;
    }
    @GetMapping("/folders/{folderName}/projects")
    public List<Project> retrieveProjectsForFolder(@PathVariable String folderName) {
        Optional<Folder> folder = repository.findById(folderName);
        if (folder.isPresent()) {
            return folder.get().getProjects();
        } else {
            throw new IllegalIdentifierException("Folder " + folderName + " does not exist");
        }
    }

    @PostMapping("/folders")
    public ResponseEntity<Folder> createFolder(@RequestBody Folder folder) {
        repository.save(folder);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{folderName}")
                .buildAndExpand(folder.getName())
                .toUri(); // this will return the request entity with get uri.
        return ResponseEntity.created(location).build();
    }

    @PutMapping("/folders")
    private ResponseEntity<Folder> updateFolder(@RequestBody Folder folder) {
        repository.save(folder);
        return ResponseEntity.accepted().build();
    }

    @DeleteMapping("/folders/{folderName}")
    public ResponseEntity<Folder> deleteFolder(@PathVariable String folder) {
        repository.deleteById(folder);
        return ResponseEntity.noContent().build();
    }
    
}

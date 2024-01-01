package com.rest.api.myprojects_dashboard.folder;

import org.hibernate.boot.model.naming.IllegalIdentifierException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

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

    @GetMapping("/folders/{oid}")
    public Folder retrieveFolder(@PathVariable Long oid) {
        Folder folder = repository.findById(oid)
                .orElseThrow(() -> new IllegalIdentifierException("oid " + oid + " does not exits!"));
        return folder;
    }

    @PostMapping("/folders")
    public ResponseEntity<Folder> createFolder(@RequestBody Folder folder) {
        repository.save(folder);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{oid}")
                .buildAndExpand(folder.getOid())
                .toUri(); // this will return the request entity with get uri.
        return ResponseEntity.created(location).build();
    }

    @PutMapping("/folders/{oid}")
    private ResponseEntity<Folder> updateFolder(@RequestBody Folder folder) {
        repository.save(folder);
        return ResponseEntity.accepted().build();
    }

    @DeleteMapping("/folders/{oid}")
    public ResponseEntity<Folder> deleteFolder(@PathVariable Long oid) {
        repository.deleteById(oid);
        return ResponseEntity.noContent().build();
    }
    
}

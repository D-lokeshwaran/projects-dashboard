package com.rest.api.myprojects_dashboard.project;

import com.rest.api.myprojects_dashboard.folder.Folder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {
}

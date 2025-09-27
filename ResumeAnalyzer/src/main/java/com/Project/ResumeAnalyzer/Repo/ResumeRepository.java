package com.Project.ResumeAnalyzer.Repo;

import com.Project.ResumeAnalyzer.Model.ResumeEntity;
import jakarta.validation.constraints.Email;
import org.springframework.data.jpa.repository.JpaRepository;
public interface ResumeRepository extends JpaRepository<ResumeEntity,Integer>{

     ResumeEntity findByEmail(@Email String email);
}

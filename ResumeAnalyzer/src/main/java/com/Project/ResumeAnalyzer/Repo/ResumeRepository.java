package com.Project.ResumeAnalyzer.Repo;

import com.Project.ResumeAnalyzer.Model.ResumeEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ResumeRepository extends MongoRepository<ResumeEntity, String> {

    Optional<ResumeEntity> findByEmail(String email);
}
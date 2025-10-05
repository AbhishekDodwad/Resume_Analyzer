package com.Project.ResumeAnalyzer.Service;

import com.Project.ResumeAnalyzer.Model.ResumeEntity;
import com.Project.ResumeAnalyzer.Repo.ResumeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RegisterService {

    @Autowired
    private ResumeRepository repo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public String register(ResumeEntity resumeEntity) {
        // Check if user already exists
        Optional<ResumeEntity> existingUser = repo.findByEmail(resumeEntity.getEmail());

        if (existingUser.isPresent()) {
            return "User with this email already exists";
        }

        // Hash the password before saving
        resumeEntity.setPassword(passwordEncoder.encode(resumeEntity.getPassword()));

        // Save to MongoDB
        repo.save(resumeEntity);

        return "User registered successfully";
    }
}
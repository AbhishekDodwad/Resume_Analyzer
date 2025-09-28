package com.Project.ResumeAnalyzer.Service;

import com.Project.ResumeAnalyzer.Model.ResumeEntity;
import com.Project.ResumeAnalyzer.Repo.ResumeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class RegisterService {
    @Autowired
private ResumeRepository repo;
    @Autowired
    private PasswordEncoder passwordEncoder;
    public void register(ResumeEntity resumeEntity) {
//       if(repo.findByEmail(resumeEntity.getEmail()) == null ){
//             repo.save(resumeEntity);
//       }
        resumeEntity.setPassword(passwordEncoder.encode(resumeEntity.getPassword()));
         repo.save(resumeEntity);

    }
}

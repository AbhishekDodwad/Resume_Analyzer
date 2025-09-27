package com.Project.ResumeAnalyzer.Service;

import com.Project.ResumeAnalyzer.Model.ResumeEntity;
import com.Project.ResumeAnalyzer.Repo.ResumeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegisterService {
    @Autowired
private ResumeRepository repo;
    public void register(ResumeEntity resumeEntity) {
       if(repo.findByEmail(resumeEntity.getEmail()) == null){
             repo.save(resumeEntity);
       }
    }
}

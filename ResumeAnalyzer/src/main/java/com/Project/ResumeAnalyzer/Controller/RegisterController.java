package com.Project.ResumeAnalyzer.Controller;

import com.Project.ResumeAnalyzer.Model.ResumeEntity;
import com.Project.ResumeAnalyzer.Service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class RegisterController {
    @Autowired
    RegisterService registerService;
     @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody ResumeEntity resumeEntity){

        try{
             registerService.register(resumeEntity);
             return ResponseEntity.ok("User Registered Successfully");
        }
        catch (Exception e){
            return ResponseEntity.badRequest().body("Registeration Failed"+e.getMessage());
        }
    }
}

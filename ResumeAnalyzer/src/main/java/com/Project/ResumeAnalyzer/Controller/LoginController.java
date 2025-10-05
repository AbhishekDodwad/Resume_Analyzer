package com.Project.ResumeAnalyzer.Controller;

import com.Project.ResumeAnalyzer.DTO.LoginDTO;
import com.Project.ResumeAnalyzer.DTO.LoginResponseDTO;
import com.Project.ResumeAnalyzer.Service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/auth")
public class LoginController {
    @Autowired
    LoginService loginService;
       @PostMapping("/login")
        public ResponseEntity<?> login(@RequestBody LoginDTO loginDTO){
           System.out.println(loginDTO.getEmail()+" "+loginDTO.getPassword());
            try{
                LoginResponseDTO response = loginService.login(loginDTO);
                return ResponseEntity.ok(response);
            }catch(Exception e){
               return  ResponseEntity.badRequest().body("The given email id or password is not registered or Doesn't match");
            }


}

}

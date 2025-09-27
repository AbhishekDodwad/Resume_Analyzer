//package com.Project.ResumeAnalyzer.Controller;
//
//import com.Project.ResumeAnalyzer.DTO.LoginDTO;
//import com.Project.ResumeAnalyzer.DTO.LoginResponseDTO;
//import com.Project.ResumeAnalyzer.Service.LoginService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//import static org.bouncycastle.oer.its.etsi102941.AuthorizationValidationResponseCode.ok;
//
//
//@RestController
//        public class LoginController {
//    @Autowired
//    LoginService loginService;
//        public ResponseEntity<?> login(@RequestBody LoginDTO loginDTO){
//            LoginResponseDTO response = loginService.login(loginDTO);
//       return ResponseEntity.ok(response)
//
//}
//
//}

package com.Project.ResumeAnalyzer.Service;

import com.Project.ResumeAnalyzer.Config.JwtUtil;
import com.Project.ResumeAnalyzer.DTO.LoginDTO;
import com.Project.ResumeAnalyzer.DTO.LoginResponseDTO;
import com.Project.ResumeAnalyzer.Model.ResumeEntity;
import com.Project.ResumeAnalyzer.Repo.ResumeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoginService {

    @Autowired
    private ResumeRepository repo;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public LoginResponseDTO login(LoginDTO loginDTO) {
        Optional<ResumeEntity> userOpt = repo.findByEmail(loginDTO.getEmail());

        if (userOpt.isEmpty()) {
            return new LoginResponseDTO(null, "User not found", loginDTO.getEmail());
        }

        ResumeEntity user = userOpt.get();

        System.out.println("Raw: " + loginDTO.getPassword());
        System.out.println("Hash: " + user.getPassword());
        System.out.println("Matches? " + passwordEncoder.matches(loginDTO.getPassword(), user.getPassword()));


        if (!passwordEncoder.matches(loginDTO.getPassword(), user.getPassword())) {
            return new LoginResponseDTO(null, "Invalid Credentials", loginDTO.getEmail());
        }

        String token = jwtUtil.generateToken(user.getEmail());
        return new LoginResponseDTO(token, "Login Successful", loginDTO.getEmail());
    }
}
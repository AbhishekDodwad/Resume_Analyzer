package com.Project.ResumeAnalyzer.Service;

import com.Project.ResumeAnalyzer.Config.JwtUtil;
//import com.Project.ResumeAnalyzer.Config.PasswordConfig;
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
    ResumeRepository repo;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public LoginResponseDTO login(LoginDTO loginDTO) {
        Optional<ResumeEntity> userOtp = Optional.ofNullable(repo.findByEmail(loginDTO.getEmail()));

        if (userOtp.isEmpty()) {
            return new LoginResponseDTO(null, "User not found", loginDTO.getEmail());
        }

        ResumeEntity user = userOtp.get();

        if (!passwordEncoder.matches(loginDTO.getPassword(), user.getPassword())) {
            return new LoginResponseDTO(null, "Invalid Credentials", loginDTO.getEmail());
        }

        String token = jwtUtil.generateToken(user.getEmail());
        return new LoginResponseDTO(token, "login Successful", loginDTO.getEmail());
    }
}
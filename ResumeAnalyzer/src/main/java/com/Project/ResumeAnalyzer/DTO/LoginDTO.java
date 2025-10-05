package com.Project.ResumeAnalyzer.DTO;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class LoginDTO {

    @NotEmpty(message = "The user should not be empty")
    @Email
    private String email;

    @NotEmpty(message = "The password should not be empty")
    private String password;
}
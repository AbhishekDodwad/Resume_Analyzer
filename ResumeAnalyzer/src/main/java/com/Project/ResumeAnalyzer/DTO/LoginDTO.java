package com.Project.ResumeAnalyzer.DTO;


import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
public class LoginDTO {

@NotEmpty(message = "The user should not be empty")
@jakarta.validation.constraints.Email
private String email;

@NotEmpty(message = "The password should not be empty")
private String password;
@NotEmpty
private String userName;

}

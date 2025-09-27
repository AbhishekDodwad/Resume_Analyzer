package com.Project.ResumeAnalyzer.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LoginResponseDTO {
   private String token;
   private String message;
   private String email;
}

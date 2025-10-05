package com.Project.ResumeAnalyzer.Model;

import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "resumeentity")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResumeEntity {

    @Id
    private String id;

    @Field("userName")
    private String userName;

    @Email
    @Field("email")
    @Indexed(unique = true)
    private String email;

    @Field("password_hashed")
    private String password;
}
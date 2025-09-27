package com.Project.ResumeAnalyzer.Model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResumeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id",nullable = false)
    private int id;
    @Column(name="userName",nullable = false)
    private String userName;
    @Email
    @Column(name="Email",nullable = false)
    private String email;
    @Column(name = "password_hashed",nullable = false)
    private String password;


}

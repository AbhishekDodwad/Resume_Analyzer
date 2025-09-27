package com.Project.ResumeAnalyzer.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.google.genai.Client;
@Configuration

public class Config {
    public Client geminiClient(){
      return  new Client();
    }
}

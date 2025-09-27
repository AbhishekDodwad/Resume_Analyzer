package com.Project.ResumeAnalyzer.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AnalysisResult {
    private int atsScore;
    private List<String> matchedSkills;
    private List<String> missingSkills;
    private List<String> improvements;
}

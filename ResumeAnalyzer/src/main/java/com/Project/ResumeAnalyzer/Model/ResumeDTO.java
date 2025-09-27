package com.Project.ResumeAnalyzer.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor

public class ResumeDTO {
private Long id;
private String fileName;
private String uploadDate;
//Note : this will only display first 200 chars(change it afterwords)
private String textPreview;

}

package com.Project.ResumeAnalyzer.Controller;



//import Service.ResumeDBService;

import com.Project.ResumeAnalyzer.Model.AnalysisResult;
import com.Project.ResumeAnalyzer.Service.FileParserService;
import com.Project.ResumeAnalyzer.Service.GeminiService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.security.Principal;
@RestController
@RequestMapping("/api")
@AllArgsConstructor
public class ResumeController {

    private  FileParserService fileParserService;
    //private final ResumeDBService resumeDBService;
    private  GeminiService geminiService;

    @PostMapping("/analyze")
    public AnalysisResult analysisResult(
            @RequestParam(value= "resume",required = true)MultipartFile resumeFile,
            @RequestParam(value = "jdFile", required = false) MultipartFile jdFile,
            @RequestParam(value = "jdText",required = false) String jdText,
            Principal principal
            )throws Exception{
        String jobDescription;
        String resumeText = fileParserService.extractText((resumeFile));

          if(jdFile!=null && !jdFile.isEmpty()){
               jobDescription = fileParserService.extractText(jdFile);
          } else if (jdText!=null && !jdText.isBlank()) {
               jobDescription = jdText;
          }else{
              throw new IllegalArgumentException("Either jd file or jd Text must be provided");
          }

        System.out.println("Resume Text:"+resumeText);
        System.out.println("Jd text:"+jdText);


        //  resumeDBService.saveResume(principal.getName(),resumeFile,jdText,resumeText);

        //call genmini for ats
       return geminiService.compareResumeWithJD(resumeText, jobDescription);

    }
}

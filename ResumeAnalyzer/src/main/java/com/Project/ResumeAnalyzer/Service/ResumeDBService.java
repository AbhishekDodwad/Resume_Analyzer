//package Service;
//
//import Model.ResumeEntity;
//import Repo.ResumeRepository;
//import lombok.RequiredArgsConstructor;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.web.multipart.MultipartFile;
//
//import java.time.LocalDate;
//
//@Service
//@RequiredArgsConstructor
//public class ResumeDBService {
//    @Autowired
//    private final ResumeRepository resumeRepository;
//    public void saveResume(String name, MultipartFile resumeFile, String jdText,String resumeText) {
//        ResumeEntity entity = new ResumeEntity();
//        entity.setFileName(resumeFile.getOriginalFilename());
//        entity.setResumeText(resumeText);
//        entity.setUploadDate(LocalDate.now().toString());
//        entity.setUserId();
//
//    }
//}

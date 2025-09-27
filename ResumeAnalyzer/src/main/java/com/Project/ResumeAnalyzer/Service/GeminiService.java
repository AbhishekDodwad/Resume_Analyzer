package com.Project.ResumeAnalyzer.Service;

import com.Project.ResumeAnalyzer.Model.AnalysisResult;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import okhttp3.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;


@Service
@RequiredArgsConstructor
public class GeminiService {

    @Value("${gemini.api.key}")
    private String geminiApiKey;

//    private static final String GEMINI_URL =
//            "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash-latest:generateContent";
private static final String GEMINI_URL =
        "https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent";





    public AnalysisResult compareResumeWithJD(String resumeText, String jdText) throws Exception {

        OkHttpClient client = new OkHttpClient.Builder()
                .connectTimeout(60, java.util.concurrent.TimeUnit.SECONDS)   // connection timeout
                .writeTimeout(60, java.util.concurrent.TimeUnit.SECONDS)     // request body write timeout
                .readTimeout(120, java.util.concurrent.TimeUnit.SECONDS)     // response read timeout
                .build();



        String prompt = """
                Compare the following resume with the job description.
                Return a STRICT JSON object with keys:
                - atsScore (integer 0-100)
                - matchedSkills (array of strings)
                - missingSkills (array of strings)
                - improvements (array of strings)

                Do not add any explanation outside JSON.

                Resume:
                %s

                Job Description:
                %s
                """.formatted(resumeText, jdText);


        ObjectMapper mapper = new ObjectMapper();
        String requestBody = mapper.writeValueAsString(Map.of(
                "contents", List.of(
                        Map.of("parts", List.of(Map.of("text", prompt)))
                )
        ));

        Request request = new Request.Builder()
                .url(GEMINI_URL + "?key=" + geminiApiKey)
                .post(RequestBody.create(requestBody, MediaType.parse("application/json")))
                .build();

        try (Response response = client.newCall(request).execute()) {
            if (!response.isSuccessful()) {
                throw new RuntimeException("Gemini API error: " + response);
            }

            String responseString = response.body().string();
            System.out.println("gemini Response: " + responseString);

            JsonNode root = mapper.readTree(responseString);


            if (!root.has("candidates") || root.path("candidates").isEmpty()) {
                throw new RuntimeException("No candidates returned from Gemini");
            }

            String aiText = root.path("candidates").get(0)
                    .path("content").path("parts").get(0).path("text").asText();

            String cleanJson = aiText
                    .replaceAll("```json", "")
                    .replaceAll("```", "")
                    .trim();

            System.out.println("Cleaned AI JSON: " + cleanJson);


            return mapper.readValue(cleanJson, AnalysisResult.class);
        }
    }
}


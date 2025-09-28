# 📑 Resume Analyzer  

🚀 An AI-powered Resume Analyzer that compares resumes with job descriptions and provides an **ATS Score**, **Matched Skills**, **Missing Skills**, and **Improvement Suggestions**.  

![Java](https://img.shields.io/badge/Backend-Java%20SpringBoot-blue)
![React](https://img.shields.io/badge/Frontend-React%20JS-61DAFB)
![Google Gemini](https://img.shields.io/badge/AI-Gemini%20API-ff9800)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📌 Table of Contents
- [📖 About the Project](#-about-the-project)  
- [🛠️ Tech Stack](#️-tech-stack)  
- [⚙️ Features](#️-features)  
- [🏗️ Architecture](#-architecture)  
- [📂 Project Structure](#-project-structure)  
- [⚡ Setup Instructions](#-setup-instructions)  
- [📊 Example Output](#-example-output)  
- [💡 Future Enhancements](#-future-enhancements)  
- [📝 License](#-license)  

---

## 📖 About the Project
The **Resume Analyzer** helps job seekers **optimize their resumes** for Applicant Tracking Systems (ATS).  

When a user uploads their **resume** and **job description (JD)**:  
1. The backend extracts and sends both texts to an **AI model (Google Gemini / ML model)**.  
2. The AI evaluates how well the resume matches the JD.  
3. It returns structured **JSON data** containing:
   - ✅ Matched Skills  
   - ⚠️ Missing Skills  
   - 📊 ATS Score (0–100)  
   - 💡 Suggestions to improve  

This way, candidates can **improve their resumes before applying**.

---

## 🛠️ Tech Stack

### Backend
- **Spring Boot** (REST API)  
- **OkHttp** (API requests to Gemini)  
- **Jackson** (JSON parsing)  
- **Lombok** (reduce boilerplate code)  

### Frontend
- **React (Vite)**  
- **Axios** (API calls)  
- **Bootstrap / Tailwind CSS**  

### AI Layer
- **Gemini 2.5 Flash API** (default)  
- Optionally → **Custom Python ML Model** with **Flask/FastAPI**  

---

## ⚙️ Features
✔️ Upload **Resume** (PDF/DOCX)  
✔️ Upload **Job Description** (Text/File)  
✔️ AI-powered **ATS Score**  
✔️ Shows **Matched & Missing Skills**  
✔️ Gives **Improvement Suggestions**  
✔️ Supports **CORS** for frontend-backend communication  

---

## 🏗️ Architecture
```text
User (React Frontend)
        ⬇️ Resume + JD
Spring Boot Backend (REST API)
        ⬇️ Sends to AI
Gemini API (AI Model)
        ⬇️ JSON Response
Backend (Spring Boot)
        ⬇️
Frontend (React) → Displays ATS Score, Skills, Suggestions


📂 Project Structure
ResumeAnalyzer/
│── backend/ (Spring Boot)
│   ├── Controller/
│   ├── Service/
│   ├── Model/
│   └── Config/
│
│── frontend/ (React + Vite)
│   ├── src/
│   │   ├── components/
│   │   └── App.jsx
│
│── README.md

⚡ Setup Instructions
🔹 Backend (Spring Boot)
cd backend
mvn clean install
mvn spring-boot:run

🔹 Frontend (React + Vite)
cd frontend
npm install
npm run dev

📊 Example Output
{
  "atsScore": 78,
  "matchedSkills": ["Java", "Spring Boot", "REST APIs"],
  "missingSkills": ["AWS", "Docker"],
  "improvements": [
    "Add AWS experience",
    "Include DevOps tools like Docker/Kubernetes"
  ]
}

💡 Future Enhancements

🤖 Replace Gemini API with a custom ML model (Python + Scikit-learn / Transformers)

📈 Add visual analytics (graphs & charts) for ATS score

🌍 Deploy to AWS / GCP / Azure

📂 Support for bulk resume analysis (HR recruiters)

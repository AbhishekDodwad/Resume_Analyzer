# 📄 Resume Analyzer

A full-stack application for analyzing and managing resumes using AI-powered insights. Built with Spring Boot, MongoDB, and integrated with Google Gemini AI.

check your ats score here : https://resume-analyzer-jade-zeta.vercel.app/

## 🚀 Features

- 🔐 **User Authentication** - JWT-based secure login and registration
- 📝 **Resume Upload & Analysis** - Upload resumes and get AI-powered insights
- 🤖 **AI Integration** - Google Gemini API for intelligent resume analysis
- 💾 **Cloud Database** - MongoDB Atlas for scalable data storage
- 🔒 **Security** - BCrypt password hashing and Spring Security
- 🐳 **Containerized** - Docker support for easy deployment

## 🛠️ Tech Stack

### Backend
- **Framework:** Spring Boot 3.5.5
- **Language:** Java 21
- **Database:** MongoDB Atlas
- **Security:** Spring Security + JWT
- **AI/ML:** Google Gemini API
- **Build Tool:** Maven

### Dependencies
- Spring Boot Starter Web
- Spring Boot Starter Data MongoDB
- Spring Security
- JWT (io.jsonwebtoken)
- Apache Tika (Document processing)
- Lombok
- Validation API

## 📋 Prerequisites

- Java 21 or higher
- Maven 3.9+
- MongoDB Atlas account
- Docker (optional, for containerized deployment)
- Google Gemini API key

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/resume-analyzer.git
cd resume-analyzer
```

### 2️⃣ Configure Environment Variables

Create `application.properties` in `src/main/resources/`:

```properties
server.port=8081

# MongoDB Atlas Connection
spring.data.mongodb.uri=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/resumeanalyzer?retryWrites=true&w=majority

# JWT Configuration
jwt.secret=your_jwt_secret_key_here
jwt.expiration=360000

# Google Gemini API
gemini.api.key=your_gemini_api_key_here

# CORS Configuration (Optional)
frontend.url=http://localhost:5173
```

### 3️⃣ Install Dependencies

```bash
mvn clean install
```

### 4️⃣ Run the Application

```bash
mvn spring-boot:run
```

The application will start on `http://localhost:8081`

## 🐳 Docker Deployment

### Build Docker Image

```bash
docker build -t resume-analyzer:latest .
```

### Run with Docker Compose

```bash
docker-compose up -d
```

### Services Available

- **Application:** http://localhost:8081
- **MongoDB:** localhost:27017
- **Mongo Express:** http://localhost:8082 (admin/admin123)

## 📡 API Endpoints

### Authentication

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "userName": "John Doe",
  "email": "john@example.com",
  "password": "SecurePass123"
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "SecurePass123"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "message": "Login Successful",
  "email": "john@example.com"
}
```

### Health Check
```http
GET /api/health
```

## 🗄️ Database Schema

### ResumeEntity Collection

```javascript
{
  "_id": "ObjectId",
  "userName": "String",
  "email": "String (unique, indexed)",
  "password_hashed": "String (BCrypt)",
  "_class": "com.Project.ResumeAnalyzer.Model.ResumeEntity"
}
```

## 🔧 Configuration

### Environment Variables for Production

| Variable | Description | Example |
|----------|-------------|---------|
| `SPRING_DATA_MONGODB_URI` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/db` |
| `JWT_SECRET` | Secret key for JWT tokens | `your_secret_key` |
| `JWT_EXPIRATION` | Token expiration time (ms) | `360000` |
| `GEMINI_API_KEY` | Google Gemini API key | `AIzaSy...` |
| `FRONTEND_URL` | Frontend URL for CORS | `https://your-frontend.com` |

## 🚀 Deployment

### Deploy to Render

1. **Connect GitHub Repository** to Render
2. **Set Environment Variables** in Render Dashboard
3. **Configure Build Settings:**
   - Build Command: `mvn clean install`
   - Start Command: `java -jar target/*.jar`

### MongoDB Atlas Setup

1. Create a cluster on MongoDB Atlas
2. Create database user with read/write permissions
3. Whitelist IP addresses (0.0.0.0/0 for all IPs)
4. Get connection string and add to environment variables

## 🧪 Testing

### Using cURL

**Register:**
```bash
curl -X POST http://localhost:8081/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "userName": "Test User",
    "email": "test@example.com",
    "password": "Test@123"
  }'
```

**Login:**
```bash
curl -X POST http://localhost:8081/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "Test@123"
  }'
```

### Using Postman

Import the API endpoints and test with the provided examples.

## 📁 Project Structure

```
resume-analyzer/
├── src/
│   ├── main/
│   │   ├── java/com/Project/ResumeAnalyzer/
│   │   │   ├── Config/           # JWT & Security configs
│   │   │   ├── Controller/       # REST endpoints
│   │   │   ├── DTO/              # Data Transfer Objects
│   │   │   ├── Model/            # MongoDB entities
│   │   │   ├── Repo/             # MongoDB repositories
│   │   │   ├── Service/          # Business logic
│   │   │   └── ResumeAnalyzerApplication.java
│   │   └── resources/
│   │       └── application.properties
│   └── test/
├── Dockerfile
├── docker-compose.yml
├── pom.xml
└── README.md
```

## 🔒 Security Features

- ✅ **Password Hashing** - BCrypt with salt rounds
- ✅ **JWT Authentication** - Stateless token-based auth
- ✅ **Spring Security** - Endpoint protection
- ✅ **Input Validation** - Jakarta Validation
- ✅ **CORS Configuration** - Controlled cross-origin access
- ✅ **MongoDB Security** - Atlas network access control

## 🐛 Troubleshooting

### MongoDB Connection Issues

**Problem:** `MongoSocketWriteException: SSLException`

**Solution:**
1. Check MongoDB Atlas network access (whitelist 0.0.0.0/0)
2. Verify connection string uses `mongodb+srv://`
3. Ensure database user has proper permissions

### JWT Token Issues

**Problem:** Token validation fails

**Solution:**
1. Verify `JWT_SECRET` matches between environments
2. Check token expiration time
3. Ensure proper token format in Authorization header

### Docker Build Fails

**Problem:** Out of memory during build

**Solution:**
```bash
docker build --memory=4g -t resume-analyzer:latest .
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Abhishek Dodwad**
- GitHub: https://github.com/AbhishekDodwad/Resume_Analyzer
- Email: abhishek@gmail.com

## 🙏 Acknowledgments

- Spring Boot Team
- MongoDB Atlas
- Google Gemini AI
- Apache Tika

## 📞 Support

For support, email abhishek@gmail.com or open an issue in the GitHub repository.

---

⭐ **Star this repo if you find it helpful!** ⭐

Made with ❤️ using Spring Boot and MongoDB

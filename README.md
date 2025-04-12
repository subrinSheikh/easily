
# **Job Portal System - ExpressJS MVC Architecture**

## **Project Overview**
This project is a Job Portal System built with **ExpressJS** using the **MVC (Model-View-Controller)** architecture to manage recruiters, job seekers, and job postings. The application allows job seekers to apply for jobs, view job details, and manage applications. Recruiters can create, update, delete, and view job postings, as well as view applicants and their resumes. The application also includes a user authentication system, session management, email notifications, and file upload handling for resumes.
Explanation Link [https://drive.google.com/file/d/1zaZaKCbgpOhR3nFyczXTTLsX9qLckuaq/view?usp=sharing]

The primary goal of this system is to simplify the job application process by providing a centralized platform where both recruiters and job seekers can efficiently interact. It is built with scalability and maintainability in mind by using **ES6 Modules**, **Express sessions**, and **EJS** for templating.

## **Key Features & Technologies**
- **MVC Architecture**: Separates data handling, interface rendering, and routing control.
- **EJS Templating**: Dynamic HTML generation with **EJS** for server-side templating.
- **ES6 Modules**: Modularized code using **ES6** import/export syntax for better maintainability.
- **Express Sessions**: Manages user sessions and tracks the last visit with cookies.
- **Job Seekers**:
  - View all jobs and job details.
  - Apply to jobs by submitting their personal details and resume.
- **Recruiters**:
  - Create, update, delete, and view job postings.
  - View applicants for job postings.
  - Download applicants’ resumes.
- **Authentication**:
  - **Login/Registration** system for recruiters using JWT (JSON Web Tokens).
  - Middleware for tracking user authentication.
- **File Uploads**: Upload and store resumes on the server using **Multer** middleware.
- **Email Notifications**: Confirmation email sent to applicants upon successful application.

## **Setup Instructions**
### **Prerequisites**
- Ensure you have **Node.js** and **npm** installed on your system.
- Install **MongoDB** (for production) or use a local database (for development).
- Make sure to have a working email provider (e.g., Gmail) for sending confirmation emails.

### **1. Clone the Repository**
Clone the repository to your local machine:
```bash
git clone https://github.com/yourusername/job-portal.git
cd job-portal
```

### **2. Install Dependencies**
Install all required dependencies:
```bash
npm install
```



### **4. Run the Application**
Start the server with:
```bash
node index.js
```

Your demo link will be available at [https://drive.google.com/file/d/1zaZaKCbgpOhR3nFyczXTTLsX9qLckuaq/view?usp=sharing]

### **5. Database Setup**
Ensure that your MongoDB instance is running and that the `job-portal` database is created automatically during the application setup.


## **File Uploads**
Uploaded resumes are stored in the `public/resumes` directory. Ensure this directory is created and has the appropriate write permissions for file uploads.


```

## **Folder Structure**
```
/job-portal
|-- /controllers          # Contains route handlers for job seekers and recruiters
|-- /models               # Contains database models (Job, User, etc.)
|-- /routes               # Contains route definitions
|-- /views                # EJS templates for rendering HTML
|-- /public               # Static assets (images, uploaded resumes, etc.)
|-- /middleware           # Custom middleware (authentication, file uploads)
|-- /config               # Configuration files (e.g., database, email)
|-- app.js                # Express app setup and middleware
|-- .env                  # Environment variables (database, email, session secret)
|-- package.json          # Project dependencies and scripts
|-- README.md             # Project documentation
```

## **Usage**
1. **Recruiters** can register, log in, and manage job postings. They can view applicants and download resumes.
2. **Job Seekers** can browse available jobs, view details, and apply by submitting their personal information and resumes.

## **Security**
- Passwords are hashed and stored securely using **bcrypt**.
- JWT is used for authentication and authorization of recruiters.
- Session management to ensure user login states are maintained.

## **Roadmap**
- Integrate additional features like job search filters, job recommendations, and application status tracking.
- Enhance the UI using modern frontend frameworks (e.g., React or Vue).
- Implement more advanced email templates for notifications.

## **Contributors**
- **Your Name**: Project lead and developer.

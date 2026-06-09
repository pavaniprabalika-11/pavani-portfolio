export const portfolio = {
  name: "Pavani Prabalika Mandla",

  title: [
    "AI & Machine Learning Engineer",
    "Computer Vision Developer",
    "Full Stack Developer",
    "Data Analytics Enthusiast",
  ],

  education: [
    {
      degree: "B.Tech Computer Science and Engineering",
      institute: "NBKR Institute of Science and Technology",
      year: "2022 - 2026",
      score: "CGPA: 7.86",
    },
    {
      degree: "Intermediate (MPC)",
      institute: "Narayana Junior College",
      year: "2020 - 2022",
      score: "90.3%",
    },
    {
      degree: "SSC",
      institute: "Sri Geethanjali EM High School",
      year: "2019 - 2020",
      score: "GPA: 9.67",
    },
  ],
  projects: [
  {
    title: "AI Powered Fraud Management System",

    description:
      "End-to-end Aadhaar Verification System using YOLOv8, OCR, Fraud Detection and Analytics Dashboard.",

    explanation: `
This project is an AI-powered Aadhaar document verification system designed to detect fraudulent identity documents automatically.

How it works:
1. The user uploads an Aadhaar card image.
2. YOLOv8 detects and crops the Aadhaar card.
3. A fraud classification model identifies whether the card is Real or Fake.
4. EasyOCR extracts important details such as Aadhaar Number and Name.
5. Verification logs are stored and displayed through an analytics dashboard.

Technologies Used:
• YOLOv8
• EasyOCR
• OpenCV
• Python
• Streamlit

Key Features:
• Real-Time Aadhaar Verification
• Fraud Detection using Deep Learning
• OCR-based Data Extraction
• Bulk Verification Mode
• Analytics Dashboard
• Verification History and CSV Export

Impact:
This system reduces manual verification effort and helps organizations identify fraudulent identity documents efficiently.
`,

    tech: ["YOLOv8", "EasyOCR", "OpenCV", "Streamlit"],
  },

  {
    title: "Diabetic Retinopathy Detection",

    description:
      "Deep Learning based retinal disease detection system using medical image analysis.",

    explanation: `
Diabetic Retinopathy Detection is a Computer Vision and Deep Learning project developed to assist in early detection of retinal diseases.

How it works:
1. Retinal fundus images are uploaded.
2. Images are preprocessed and enhanced.
3. A Deep Learning model analyzes disease patterns.
4. The model predicts whether signs of diabetic retinopathy are present.

Technologies Used:
• Python
• Deep Learning
• Computer Vision
• Image Processing

Key Features:
• Automated Disease Screening
• Medical Image Classification
• Early Disease Detection Support
• Improved Diagnostic Assistance

Impact:
This project demonstrates how Artificial Intelligence can assist healthcare professionals by providing faster and more accurate disease screening.
`,

    tech: ["Python", "Deep Learning", "Computer Vision"],
  },

  {
    title: "Team Task Manager",

    description:
      "Full Stack Team Management platform with JWT Authentication, MongoDB and Task Tracking.",

    explanation: `
Team Task Manager is a Full Stack Web Application developed to help teams manage projects and tasks efficiently.

How it works:
1. Users create accounts and log in securely.
2. Admins create projects and assign tasks.
3. Team members update task status.
4. Progress is tracked through dashboards.

Technologies Used:
• Flask
• MongoDB
• JavaScript
• JWT Authentication
• HTML & CSS

Key Features:
• User Authentication
• Role-Based Access Control
• Project Management
• Task Assignment
• Task Status Tracking
• Secure JWT Authentication

Impact:
This system improves collaboration, task tracking and productivity within teams.
`,

    tech: ["Flask", "MongoDB", "JavaScript"],
  },

  {
    title: "Student Performance Analytics",

    description:
      "Student performance analysis using Python, Pandas and Power BI dashboards.",

    explanation: `
Student Performance Analytics is a Data Analytics project developed to analyze student academic performance and attendance patterns.

How it works:
1. Student marks and attendance data are collected.
2. Pandas processes and cleans the dataset.
3. Analysis identifies top and weak performers.
4. Power BI dashboards visualize trends and insights.

Technologies Used:
• Python
• Pandas
• Matplotlib
• Power BI

Key Features:
• Average Marks Calculation
• Attendance Analysis
• Top Performer Identification
• Weak Performer Detection
• Interactive Dashboards

Impact:
This project helps educational institutions understand student performance trends and make data-driven decisions.
`,

    tech: ["Python", "Power BI", "Pandas"],
  },
],
    technologies: {
  Python: `
Python is a versatile programming language widely used in AI, Machine Learning, Data Analytics and Web Development.

Pavani uses Python extensively across Computer Vision, OCR, Deep Learning and Data Analytics projects.
`,

  Pandas: `
Pandas is a powerful Python library for data manipulation and analysis.

Features:
• Data Cleaning
• Data Transformation
• CSV & Excel Processing
• Statistical Analysis

Used in:
• Student Performance Analytics
`,

  PowerBI: `
Power BI is Microsoft's Business Intelligence platform.

Features:
• Interactive Dashboards
• Data Visualization
• Business Analytics

Used in:
• Student Performance Analytics
`,

  YOLOv8: `
YOLOv8 (You Only Look Once Version 8) is a state-of-the-art object detection model.

Features:
• Real-Time Detection
• High Accuracy
• Fast Inference

Used in:
• AI Powered Fraud Management System
• Aadhaar Detection Pipeline
`,

  EasyOCR: `
EasyOCR is an OCR library used to extract text from images.

Features:
• Text Recognition
• Multilingual Support
• Image-to-Text Conversion

Used in:
• Aadhaar Verification System
`,

  OpenCV: `
OpenCV is a Computer Vision library used for image and video processing.

Features:
• Image Manipulation
• Object Detection
• Computer Vision Workflows

Used in:
• Aadhaar Fraud Detection
• Diabetic Retinopathy Detection
`,

  Streamlit: `
Streamlit is a Python framework used to build interactive AI and Data Science applications quickly.

Used in:
• Aadhaar Fraud Management System Dashboard
`,

  Flask: `
Flask is a lightweight Python web framework.

Features:
• REST APIs
• Authentication
• Backend Development

Used in:
• Team Task Manager
`,

  MongoDB: `
MongoDB is a NoSQL database.

Features:
• Flexible Schema
• JSON Documents
• Scalability

Used in:
• Team Task Manager
`,

  JavaScript: `
JavaScript powers interactive web applications.

Features:
• Dynamic UI
• Client-side Logic
• Full Stack Development

Used in:
• Team Task Manager
• Portfolio Development
`,

  TypeScript: `
TypeScript is a strongly typed superset of JavaScript.

Features:
• Type Safety
• Better Maintainability
• Improved Developer Experience

Used in:
• Next.js Portfolio
`,

  NextJS: `
Next.js is a React framework used to build fast and SEO-friendly web applications.

Features:
• Server Side Rendering
• App Router
• Optimized Performance

Used in:
• Pavani's Cinematic Portfolio
`,

  TailwindCSS: `
Tailwind CSS is a utility-first CSS framework.

Features:
• Rapid UI Development
• Responsive Design
• Modern Styling

Used in:
• Pavani's Portfolio UI
`,

  MachineLearning: `
Machine Learning enables systems to learn patterns from data and make predictions automatically.

Used in:
• Fraud Detection
• Medical Image Analysis
• Analytics Projects
`,

  DeepLearning: `
Deep Learning is a subset of Machine Learning based on neural networks.

Used in:
• Diabetic Retinopathy Detection
• Fraud Classification Models
`,

  ComputerVision: `
Computer Vision enables computers to understand and analyze images.

Used in:
• Aadhaar Fraud Detection
• OCR Systems
• Medical Imaging Projects
`,
},
 certifications: [
  {
    name: "Google AI Essentials",
    explanation: `
This certification provided a strong foundation in Generative AI.

Topics Learned:
• Prompt Engineering
• Responsible AI
• AI Productivity Tools
• Practical AI Applications

Impact:
Helped Pavani understand how AI can be integrated into real-world solutions and workflows.
`,
  },

  {
    name: "Data Analytics Job Simulation - Deloitte",
    explanation: `
A practical job simulation focused on Data Analytics.

Topics Learned:
• Data Cleaning
• Data Visualization
• Business Insights
• Analytical Thinking

Impact:
Improved data-driven decision making and reporting skills.
`,
  },

  {
    name: "Artificial Intelligence Fundamentals - IBM",
    explanation: `
An introductory AI certification covering core concepts.

Topics Learned:
• Machine Learning Basics
• Neural Networks
• AI Applications
• Data Science Concepts

Impact:
Built the foundation for later Computer Vision and Deep Learning projects.
`,
  },

  {
    name: "AI Intern - Infosys Springboard",
    explanation: `
Completed AI internship through Infosys Springboard.

Focus Areas:
• Artificial Intelligence
• Machine Learning
• Problem Solving
• Industry Exposure

Impact:
Provided practical exposure to AI technologies and workflows.
`,
  },

  {
    name: "Python Full Stack Intern - Think Champ Pvt Ltd",
    explanation: `
Worked as a Python Full Stack Intern.

Technologies:
• Python
• Flask
• Frontend Development
• Database Integration

Impact:
Strengthened full-stack development and backend engineering skills.
`,
  },
],
    experience: [
  {
    company: "Infosys Springboard",
    role: "AI Intern",

    explanation: `
Completed Artificial Intelligence Internship through Infosys Springboard.

Responsibilities:
• Learning AI Fundamentals
• Machine Learning Concepts
• Problem Solving
• Industry-Oriented Projects

Skills Gained:
• Artificial Intelligence
• Machine Learning
• Data Processing
• Analytical Thinking

Impact:
This internship strengthened my understanding of AI concepts and practical implementations.
`,
  },

  {
    company: "Think Champ Pvt Ltd",
    role: "Python Full Stack Intern",

    explanation: `
Worked as a Python Full Stack Intern.

Responsibilities:
• Backend Development
• Frontend Development
• Database Integration
• API Development

Technologies:
• Python
• Flask
• HTML
• CSS
• JavaScript

Impact:
Improved my Full Stack Development skills and strengthened my understanding of web applications.
`,
  },
],

  links: {
    github: "https://github.com/pavaniprabalika-11",
    linkedin:
      "https://www.linkedin.com/in/pavani-prabalika-mandla-017b4426b/",
  },
};
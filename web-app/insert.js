const mysql = require('mysql2');
const fs = require('fs');
const caCertPath = './certificate/ca.pem';

var connection = mysql.createConnection({
    uri: 'mysql://avnadmin:AVNS_6CQ18w94WuIiuBOrEpT@mysql-3aaf5adc-test-vszd.c.aivencloud.com:27804/defaultdb?ssl-mode=REQUIRED',
    host: 'mysql-3aaf5adc-test-vszd.c.aivencloud.com',
    port: 27804,
    database: 'defaultdb',
    user: 'avnadmin',
    password: 'AVNS_6CQ18w94WuIiuBOrEpT',
    ssl: {
        rejectUnauthorized: true,
        ca: caCertPath ? fs.readFileSync(caCertPath) : undefined
    }
});

connection.connect(function (error) {
    if (error) {
        console.error('Error connecting to the database:', error.stack);
        return;
    }
    console.log('MySQL Database is connected successfully');

    // Keywords to insert
    const keywords = [
        "Algorithm", "Data Structure", "Variable", "Loop", "Conditionals (if-else)",
        "Recursion", "Object-Oriented Programming (OOP)", "Functional Programming",
        "Inheritance", "Polymorphism", "Encapsulation", "Abstraction", "Memory Management",
        "Garbage Collection", "Concurrency", "Multithreading", "Asynchronous Programming",
        "Data Types", "Pointers", "Lambda Functions", "HTML", "CSS", "JavaScript", "AJAX",
        "GraphQL", "JSON", "DOM Manipulation", "Responsive Design", "Bootstrap",
        "Frontend Frameworks (React, Angular, Vue)", "Backend Frameworks (Django, Flask, Express)",
        "Full-Stack Development", "WebSockets", "Cookies & Sessions", "Authentication & Authorization",
        "Cross-Origin Resource Sharing (CORS)", "Single Page Application (SPA)",
        "Progressive Web Apps (PWA)", "Version Control (Git)", "Software Development Life Cycle (SDLC)",
        "Agile", "Scrum", "Kanban", "DevOps", "Continuous Integration/Continuous Deployment (CI/CD)",
        "Test-Driven Development (TDD)", "Behavior-Driven Development (BDD)", "Unit Testing",
        "Integration Testing", "System Testing", "Regression Testing", "Load Testing", "Code Review",
        "Refactoring", "Technical Debt", "Microservices", "Monolith", "Containerization (Docker)",
        "Kubernetes", "SQL", "NoSQL", "Relational Database Management System (RDBMS)", "Transactions",
        "Normalization", "Denormalization", "Indexes", "Query Optimization", "ACID Properties",
        "CAP Theorem", "Big Data", "Data Warehousing", "ETL (Extract, Transform, Load)",
        "Data Lakes", "Data Mining", "SQL Injection", "Database Sharding", "Replication",
        "Backup & Restore", "Database Security", "Operating System (OS)", "Kernel",
        "Process Management", "Threading", "Virtual Memory", "File Systems",
        "Networking Protocols (TCP/IP, HTTP, FTP)", "DNS (Domain Name System)", "IP Addressing",
        "Subnetting", "Load Balancing", "Firewall", "Proxy Servers", "VPN (Virtual Private Network)",
        "SSH (Secure Shell)", "Docker Networking", "Cloud Computing (AWS, Azure, GCP)",
        "Virtualization", "Microservices Networking", "Network Security", "Encryption", "Hashing",
        "Public Key Infrastructure (PKI)", "SSL/TLS", "OAuth", "OpenID", "JWT (JSON Web Token)",
        "XSS (Cross-Site Scripting)", "CSRF (Cross-Site Request Forgery)", "Security Auditing",
        "Penetration Testing", "Security Best Practices", "Firewall", "Anti-virus/Anti-malware",
        "Zero Trust Architecture", "End-to-End Encryption", "SOC (Security Operations Center)",
        "IAM (Identity and Access Management)", "Data Privacy Regulations (GDPR, CCPA)", "Git", "GitHub",
        "GitLab", "Jenkins", "Docker", "Kubernetes", "Terraform", "Ansible", "JIRA", "Confluence",
        "Postman", "Swagger", "Webpack", "Babel", "npm/yarn", "Python", "Java", "C#",
        "Artificial Intelligence (AI)", "Deep Learning", "Blockchain", "Quantum Computing",
        "Augmented Reality (AR)", "Virtual Reality (VR)", "5G", "Internet of Things (IoT)",
        "Edge Computing", "Serverless Computing", "AI Ethics", "Natural Language Processing (NLP)",
        "Computer Vision", "Autonomous Systems", "Cyber-Physical Systems", "Smart Contracts",
        "Digital Twins", "Distributed Ledger Technology (DLT)", "Biometrics", "SDKs",
        "CLI (Command-Line Interface)", "IDE (Integrated Development Environment)",
        "Code Editors (VSCode, Sublime Text)", "Regular Expressions", "Build Tools (Maven, Gradle)",
        "Package Managers", "Code Linting", "Code Formatting", "Documentation", "Debugging",
        "Profiling", "Performance Optimization", "Logging", "Monitoring", "Error Handling",
        "Exceptions", "Event-Driven Architecture", "State Management", "DRY (Don't Repeat Yourself)",
        "KISS (Keep It Simple, Stupid)", "YAGNI (You Aren't Gonna Need It)", "SOLID Principles",
        "Design Patterns", "Clean Code", "Code Refactoring", "Scalability", "Maintainability",
        "Reusability", "Separation of Concerns", "Modularity", "Dependency Injection",
        "Versioning", "Backward Compatibility", "Forward Compatibility", "Technical Documentation",
        "Coding Standards", "Peer Reviews", "Continuous Learning"
    ];

    // Insert each keyword into the table if it doesn't already exist
    keywords.forEach((keyword) => {
        const checkQuery = `SELECT COUNT(*) AS count FROM Keywords WHERE keyword = ?`;
        connection.query(checkQuery, [keyword], function (err, results) {
            if (err) {
                console.error('Error checking keyword:', err);
                return;
            }

            if (results[0].count === 0) {
                const insertQuery = `INSERT INTO Keywords (keyword) VALUES (?)`;
                connection.query(insertQuery, [keyword], function (err, results) {
                    if (err) {
                        console.error('Error inserting keyword:', err);
                    } else {
                        console.log(`Keyword "${keyword}" inserted successfully.`);
                    }
                });
            } else {
                console.log(`Keyword "${keyword}" already exists in the table.`);
            }
        });
    });

    // Close the connection after a short delay to ensure all queries are processed
    setTimeout(() => {
        connection.end();
        console.log('Connection closed.');
    }, 5000);
});
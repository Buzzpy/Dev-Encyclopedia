const keys = [
    {
        "key": "machineLearning",
        "title": "Machine Learning",
        "description": "AI exists thanks to this"
    },
    {
        "key": "codeSmell",
        "title": "Code Smell",
        "description": "Indicators that code might need improvement."
    },
    {
        "key": "serverlessComputing",
        "title": "Serverless Computing",
        "description": "Cloud computing without managing servers."
    },
    {
        "key": "webFlow",
        "title": "Web Flow",
        "description": "The sequence of user steps on a website."
    },
    {
        "key": "webHooks",
        "title": "Web Hooks",
        "description": "Automated messages between apps."
    },
    {
        "key": "llms",
        "title": "LLMs",
        "description": "AI systems for understanding and generating text."
    },
    {
        "key": "openSource",
        "title": "Open Source",
        "description": "Software with publicly accessible source code."
    },
    {
        "key": "webScraping",
        "title": "Web Scraping",
        "description": "Automatically collecting data from websites."
    },
    {
        "key": "frontEnd",
        "title": "Front End",
        "description": "The visual and interactive parts of a website."
    },
    {
        "key": "fullStack",
        "title": "Full Stack",
        "description": "Development of both front end and back end."
    },
    {
        "key": "functions",
        "title": "Functions",
        "description": "Reusable blocks of code performing specific tasks."
    },
    {
        "key": "arguments",
        "title": "Arguments",
        "description": "Values passed to functions to influence their behavior."
    },
    {
        "key": "dictionary",
        "title": "Dictionary",
        "description": "A collection of key-value pairs in programming."
    },
    {
        "key": "tuple",
        "title": "Tuple",
        "description": "An ordered, unchangeable collection of items."
    },
    {
        "key": "list",
        "title": "List",
        "description": "An ordered, changeable collection of items."
    },
    {
        "key": "boolean",
        "title": "Boolean",
        "description": "A data type with true or false values."
    },
    {
        "key": "string",
        "title": "String",
        "description": "A sequence of characters representing text."
    },
    {
        "key": "floats",
        "title": "Floats",
        "description": "Numbers with decimal points for precision."
    },
    {
        "key": "double",
        "title": "Double",
        "description": "More precise and larger decimal numbers."
    },
    {
        "key": "dataTypes",
        "title": "Data Types",
        "description": "Categories defining the kind of data variables can hold."
    },
    {
        "key": "threads",
        "title": "Threads",
        "description": "Mini-programs running concurrently within a larger program."
    },
    {
        "key": "classes",
        "title": "Classes",
        "description": "Blueprints for creating objects with defined properties and behaviors."
    },
    {
        "key": "objects",
        "title": "Objects",
        "description": "Instances of classes with specific attributes and methods."
    },
    {
        "key": "inheritance",
        "title": "Inheritance",
        "description": "Creating new classes from existing ones, inheriting their properties and behaviors."
    },
    {
        "key": "syntax",
        "title": "Syntax",
        "description": "Rules defining the structure and format of code."
    },
    {
        "key": "ide",
        "title": "IDE",
        "description": "Integrated Development Environment for coding and debugging."
    },
    {
        "key": "debugger",
        "title": "Debugger",
        "description": "Tool for finding and fixing code errors"
    },
    {
        "key": "deployment",
        "title": "Deployment",
        "description": "Making applications available for use"
    },
    {
        "key": "continuousDeployment",
        "title": "Continuous Deployment",
        "description": "Automatic deployment of code changes"
    },
    {
        "key": "deploymentPipeline",
        "title": "Deployment Pipeline",
        "description": "Automated process for software changes"
    },
    {
        "key": "dataValidation",
        "title": "Data Validation",
        "description": "Ensuring data accuracy and completeness"
    },
    {
        "key": "dataSerialization",
        "title": "Data Serialization",
        "description": "Converting data for storage or transmission"
    },
    {
        "key": "mocking",
        "title": "Mocking",
        "description": "Creating fake objects for testing"
    },
    {
        "key": "authentication",
        "title": "Authentication",
        "description": "Verifying user identity"
    },
    {
        "key": "authorization",
        "title": "Authorization",
        "description": "Determining user permissions"
    },
    {
        "key": "prototypes",
        "title": "Prototypes (Software Development)",
        "description": "Early models of software for testing"
    },
    {
        "key": "monolithicArchitecture",
        "title": "Monolithic Architecture",
        "description": "Integrated large system design"
    },
    {
        "key": "github",
        "title": "GitHub",
        "description": "Platform for code hosting and collaboration"
    },
    {
        "key": "orm",
        "title": "ORM (Object-Relational Mapping)",
        "description": "Mapping database tables to objects"
    },
    {
        "key": "caching",
        "title": "Caching",
        "description": "Storing data for quick access"
    },
    {
        "key": "deepLearning",
        "title": "Deep Learning",
        "description": "A subset of machine learning"
    },
    {
        "key": "artificialIntelligence",
        "title": "Artificial Intelligence",
        "description": "A frenemy"
    },
    {
        "key": "cybersecurity",
        "title": "Cybersecurity",
        "description": "Staying secured in a a world of hackers"
    },
    {
        "key": "epochs",
        "title": "Epochs",
        "description": "Training rounds in Machine Learning"
    },
    {
        "key": "apis",
        "title": "APIs",
        "description": "Application Programming Interfaces"
    },
    {
        "key": "cloudComputing",
        "title": "Cloud Computing",
        "description": "It's always fun on the clouds, until it starts \"leaking\""
    },
    {
        "key": "dataScience",
        "title": "Data Science",
        "description": "Science of converting information to Data"
    },
    {
        "key": "quantumComputing",
        "title": "Quantum Computing",
        "description": "Sheldon Cooper's gonna love this"
    },
    {
        "key": "internetOfThings",
        "title": "Internet of Things",
        "description": "A Network of things"
    },
    {
        "key": "blockchain",
        "title": "Blockchain",
        "description": "A chain of transactions"
    },
    {
        "key": "reactJS",
        "title": "ReactJS",
        "description": "A popular JS library for building user-interfaces"
    },
    {
        "key": "docker",
        "title": "Docker",
        "description": "The most popular Container tool"
    },
    {
        "key": "initFunction",
        "title": "The __init__ Function",
        "description": "A special method in Python Programming Language"
    },
    {
        "key": "threeSigmaRule",
        "title": "Three-Sigma Rule",
        "description": "A rule of thumb in data science"
    },
    {
        "key": "recursion",
        "title": "Recursion",
        "description": "A programming technique"
    },
    {
        "key": "iteration",
        "title": "Iteration",
        "description": "A programming technique"
    },
    {
        "key": "versionControl",
        "title": "Version Control",
        "description": "Recording every change"
    },
    {
        "key": "git",
        "title": "Git",
        "description": "The most popular version control system"
    },
    {
        "key": "microservices",
        "title": "Microservices",
        "description": "Independent services working together"
    },
    {
        "key": "restfulAPI",
        "title": "RESTful API",
        "description": "API using standard HTTP methods"
    },
    {
        "key": "graphql",
        "title": "GraphQL",
        "description": "Query language for APIs"
    },
    {
        "key": "containerization",
        "title": "Containerization",
        "description": "Packaging applications for consistent deployment"
    },
    {
        "key": "kubernetes",
        "title": "Kubernetes",
        "description": "Platform for automating container management"
    },
    {
        "key": "branching",
        "title": "Branching",
        "description": "Creating separate code versions"
    },
    {
        "key": "merging",
        "title": "Merging",
        "description": "Combining changes from branches"
    },
    {
        "key": "pullRequests",
        "title": "Pull Requests (PR)",
        "description": "Proposing and reviewing code changes"
    },
    {
        "key": "codeReview",
        "title": "Code Review",
        "description": "Checking code for quality and improvement"
    },
    {
        "key": "refactoring",
        "title": "Refactoring",
        "description": "Improving code structure without changing behavior"
    },
    {
        "key": "technicalDebt",
        "title": "Technical Debt",
        "description": "Extra work due to past shortcuts"
    },
    {
        "key": "designPatterns",
        "title": "Design Patterns",
        "description": "Standard solutions to common design problems"
    },
    {
        "key": "solidPrinciples",
        "title": "SOLID Principles",
        "description": "Guidelines for better software design"
    },
    {
        "key": "kissPrinciple",
        "title": "KISS Principle",
        "description": "Keep it simple to avoid complexity"
    },
    {
        "key": "dryPrinciple",
        "title": "DRY Principle",
        "description": "Avoid code repetition"
    },
    {
        "key": "agile",
        "title": "Agile",
        "description": "A methology in Software Development"
    },
    {
        "key": "scrum",
        "title": "Scrum",
        "description": "A framework within the Agile methodology"
    },
    {
        "key": "kanban",
        "title": "Kanban",
        "description": "A visual workflow management method"
    },
    {
        "key": "html",
        "title": "HTML",
        "description": "HyperText Markup Language"
    },
    {
        "key": "css",
        "title": "CSS",
        "description": "Cascading Style Sheets"
    },
    {
        "key": "java",
        "title": "Java",
        "description": "A high-level programming-language"
    },
    {
        "key": "cSharp",
        "title": "C#",
        "description": "A modern, OOP language from Microsoft"
    },
    {
        "key": "ruby",
        "title": "Ruby",
        "description": "Another simple, OOP language"
    },
    {
        "key": "swift",
        "title": "Swift",
        "description": "A programming language from Apple"
    },
    {
        "key": "typescript",
        "title": "Typescript",
        "description": "A superset of JavaScript"
    },
    {
        "key": "kotlin",
        "title": "Kotlin",
        "description": "A statically-typed programming language by JetBrains"
    },
    {
        "key": "bash",
        "title": "Bash",
        "description": "A unix shell and command language"
    },
    {
        "key": "rubyOnRails",
        "title": "Ruby on Rails",
        "description": "A web application framework written in Ruby"
    },
    {
        "key": "angular",
        "title": "Angular",
        "description": "A TypeScript-based web application framework"
    },
    {
        "key": "vueJS",
        "title": "VueJS",
        "description": "A aggressive progressive JavaScript framework"
    },
    {
        "key": "flutter",
        "title": "Flutter",
        "description": "An UI toolkit from Google"
    },
    {
        "key": "swiftUI",
        "title": "SwiftUI",
        "description": "Another framework from Apple"
    },
    {
        "key": "dataStructure",
        "title": "Data Structure",
        "description": "A way of oragnzing and storing data"
    },
    {
        "key": "bigO",
        "title": "Big O Notation",
        "description": "A term used to explain... algorithms?"
    },
    {
        "key": "recursionDepth",
        "title": "Recursion Depth",
        "description": "Used to elaborate on recusrion method"
    },
    {
        "key": "debugging",
        "title": "Debugging",
        "description": "An interesting process that makes programmers yell \"Just Why!?\""
    },
    {
        "key": "testing",
        "title": "Testing",
        "description": "The ultimate fear of developers"
    },
    {
        "key": "unitTest",
        "title": "Unit test",
        "description": "A type of testing"
    },
    {
        "key": "integrationTest",
        "title": "Integration Test",
        "description": "Another type of testing"
    },
    {
        "key": "endToEndTest",
        "title": "End-to-End Test",
        "description": "Another type of testing"
    },
    {
        "key": "performanceTest",
        "title": "Performence Test",
        "description": "A type of testing focusing on applcation performence"
    },
    {
        "key": "loadTest",
        "title": "Load Test",
        "description": "A type of performance testing"
    },
    {
        "key": "stressTest",
        "title": "Stress Test",
        "description": "A type of performance testing under pressure"
    },
    {
        "key": "securityTest",
        "title": "Security Test",
        "description": "A test against hacking and whatnot"
    },
    {
        "key": "usabilityTest",
        "title": "Usability Test",
        "description": "A test that ensures that application is user-friendly"
    },
    {
        "key": "uat",
        "title": "User-Acceptance Test (UAT)",
        "description": "Final user testing phase"
    },
    {
        "key": "testDrivenDevelopment",
        "title": "Test-Driven Development",
        "description": "Or TDD, a software development approach"
    },
    {
        "key": "continuousIntegration",
        "title": "Continuous Integration (CI)",
        "description": "A software development practice"
    },
    {
        "key": "continuousDelivery",
        "title": "Continuous Delivery (CD)",
        "description": "A software development practice often implemented with CI"
    },
    {
        "key": "devOps",
        "title": "DevOps",
        "description": "A set of practices that combine Dev and Ops"
    },
    {
        "key": "sql",
        "title": "SQL",
        "description": "A relational database management system"
    },
    {
        "key": "nosql",
        "title": "NoSQL",
        "description": "A non-relational database management system"
    },
    {
        "key": "logisticRegression",
        "title": "Logistic Regression",
        "description": "Predicts probabilities for binary outcomes."
    },
    {
        "key": "kMeansClustering",
        "title": "K-Means Clustering",
        "description": "Groups data into clusters based on similarity."
    },
    {
        "key": "decisionTrees",
        "title": "Decision Trees",
        "description": "Uses a tree-like model of decisions and their possible consequences."
    },
    {
        "key": "randomForest",
        "title": "Random Forest",
        "description": "Combines multiple decision trees to improve accuracy."
    },
    {
        "key": "supportVectorMachines",
        "title": "Support Vector Machines",
        "description": "Finds the best boundary between classes in data."
    },
    {
        "key": "gradientDescent",
        "title": "Gradient Descent",
        "description": "Optimizes model parameters by minimizing errors."
    },
    {
        "key": "neuralNetworks",
        "title": "Neural Networks",
        "description": "Mimics the human brain to recognize patterns and make predictions."
    },
    {
        "key": "gRPC",
        "title": "gRPC",
        "description": "A high-performance framework for service communication"
    },
    {
        "key": "dependencyGraph",
        "title": "Dependency Graph",
        "description": "Visualize dependencies in systems or projects"
    },
    {
        "key": "clusterComputing",
        "title": "Cluster Computing",
        "description": "Connecting multiple computers to work as a single system"
    },
    {
        "key": "messageQueues",
        "title": "Message Queues",
        "description": "Manage asynchronous communication between processes"
    },
    {
        "key": "rateLimiting",
        "title": "Rate Limiting",
        "description": "Control the frequency of resource access to prevent overuse"
    },
    {
        "key": "concurrency",
        "title": "Concurrency",
        "description": "Run multiple processes simultaneously for efficiency"
    },
    {
        "key": "verticalScaling",
        "title": "Vertical Scaling",
        "description": "Increase the capacity of a single server"
    },
    {
        "key": "horizontalScaling",
        "title": "Horizontal Scaling",
        "description": "Add more machines to handle increased load"
    },
    {
        "key": "databaseIndexing",
        "title": "Database Indexing",
        "description": "Improve data retrieval speed in databases"
    },
    {
        "key": "dataReplication",
        "title": "Data Replication",
        "description": "Copy data to ensure consistency and accessibility"
    },
    {
        "key": "acidTransactions",
        "title": "ACID Transactions",
        "description": "Ensure reliability in database operations"
    },
    {
        "key": "eventuallyConsistentSystems",
        "title": "Eventually Consistent Systems",
        "description": "Systems that eventually reach consistency over time"
    },
    {
        "key": "memoryLeaks",
        "title": "Memory Leaks",
        "description": "Issues in memory management that can cause system crashes"
    },
    {
        "key": "namespace",
        "title": "Namespace",
        "description": "Organize code to avoid naming conflicts"
    },
    {
        "key": "serviceDiscovery",
        "title": "Service Discovery",
        "description": "Dynamic directory for services to find each other"
    },
    {
        "key": "throttling",
        "title": "Throttling",
        "description": "Control network traffic to prevent overloading"
    },
    {
        "key": "functionAsAService",
        "title": "Function as a Service (FaaS)",
        "description": "Execute code without managing infrastructure"
    },
    {
        "key": "dataLakehouse",
        "title": "Data Lakehouse",
        "description": "Combine data lakes and warehouses for comprehensive storage"
    },
    {
        "key": "eventLoop",
        "title": "Event Loop",
        "description": "Programming construct that waits for and dispatches events"
    },
    {
        "key": "tokenization",
        "title": "Tokenization",
        "description": "Convert sensitive data into non-sensitive tokens"
    },
    {
        "key": "serverSentEvents",
        "title": "Server Sent Events (SSE)",
        "description": "Automatically update web pages with server data"
    },
    {
        "key": "messageBrokers",
        "title": "Message Brokers",
        "description": "Intermediaries that manage communication between apps"
    },
    {
        "key": "cacheInvalidation",
        "title": "Cache Invalidation",
        "description": "Remove outdated data to make room for fresh information"
    },
    {
        "key": "immutableDataStructures",
        "title": "Immutable Data Structures",
        "description": "Data structures that cannot be modified after creation"
    },
    {
        "key": "dataDeduplication",
        "title": "Data Deduplication",
        "description": "Eliminate redundant data to increase storage efficiency"
    },
    {
        "key": "statefulVsStatelessSystems",
        "title": "Stateful vs Stateless Systems",
        "description": "Compare systems that maintain state with those that don't"
    },
    {
        "key": "zeroDowntimeDeployment",
        "title": "Zero Downtime Deployment",
        "description": "Update software without causing service disruption"
    },
    {
        "key": "dataPartitioning",
        "title": "Data Partitioning",
        "description": "Divide a database into distinct, independent parts"
    },
    {
        "key": "featureBranching",
        "title": "Feature Branching",
        "description": "Isolate development in branches for easier integration"
    },
    {
        "key": "deadlock",
        "title": "Deadlock",
        "description": "A stand-off where processes block each other's progress"
    },
    {
        "key": "microBatching",
        "title": "Micro-batching",
        "description": "Process small groups of data in short intervals"
    },
    {
        "key": "domainDrivenDesign",
        "title": "Domain-Driven Design",
        "description": "Software development approach focused on core business concepts"
    },
    {
        "key": "apiVersioning",
        "title": "API Versioning",
        "description": "Manage API changes by assigning version numbers"
    },
    {
        "key": "distributedFileSystem",
        "title": "Distributed File System (DFS)",
        "description": "A network file system that spans multiple servers"
    },
    {
        "key": "statefulWidget",
        "title": "Stateful Widget",
        "description": "UI component that maintains state across sessions"
    },
    {
        "key": "serverlessFunctions",
        "title": "Serverless Functions",
        "description": "Execute code without the need to manage servers"
    },
    {
        "key": "edgeServices",
        "title": "Edge Services",
        "description": "Technologies providing services closer to the user"
    },
    {
        "key": "darkLaunch",
        "title": "Dark Launch",
        "description": "Release features to a subset of users without their knowledge"
    },
    {
        "key": "cloudSecurity",
        "title": "Cloud Security",
        "description": "Procedures and technology to secure cloud environments"
    },
    {
        "key": "scalability",
        "title": "Scalability",
        "description": "Capability of a system to handle growth"
    },
    {
        "key": "eventStreamProcessing",
        "title": "Event Stream Processing",
        "description": "Analyze and process continuous streams of events"
    },
    {
        "key": "multiTenancy",
        "title": "Multi-Tenancy",
        "description": "Single instance of software serves multiple customers"
    },
    {
        "key": "softwareContainers",
        "title": "Software Containers",
        "description": "Package an application and its dependencies into a unit"
    },
    {
        "key": "cloudOrchestration",
        "title": "Cloud Orchestration",
        "description": "Automated arrangement and coordination of cloud services"
    },
    {
        "key": "networkSlicing",
        "title": "Network Slicing",
        "description": "Create multiple virtual networks on shared infrastructure"
    },
    {
        "key": "IoTEdgeComputing",
        "title": "IoT Edge Computing",
        "description": "Process data near its source in IoT devices"
    },
    {
        "key": "dataLakesAndWarehousesIntegration",
        "title": "Data Lakes and Warehouses Integration",
        "description": "Combine raw and structured data storage for better management"
    },
    {
        "key": "machineLearningOperations",
        "title": "Machine Learning Operations (MLOps)",
        "description": "Streamline machine learning processes using DevOps principles"
    },
    {
        "key": "naturalLanguageProcessing",
        "title": "Natural Language Processing",
        "description": "Enables computers to understand and process human language."
    },
    {
        "key": "recurrentNeuralNetworks",
        "title": "Recurrent Neural Networks",
        "description": "Processes sequences of data, maintaining context over time."
    },
    {
        "key": "convolutionalNeuralNetworks",
        "title": "Convolutional Neural Networks",
        "description": "Analyzes grid-like data, such as images, using filters."
    },
    {
        "key": "autoencoders",
        "title": "Autoencoders",
        "description": "Learns efficient data representations through compression and reconstruction."
    },
    {
        "key": "reinforcementLearning",
        "title": "Reinforcement Learning",
        "description": "Trains agents to make decisions by rewarding or punishing actions."
    },
    {
        "key": "transferLearning",
        "title": "Transfer Learning",
        "description": "Adapts pre-trained models for new but related tasks."
    },
    {
        "key": "hyperparameterTuning",
        "title": "Hyperparameter Tuning",
        "description": "Optimizes model settings to improve performance."
    },
    {
        "key": "crossValidation",
        "title": "Cross-Validation",
        "description": "Evaluates model performance on multiple data splits."
    },
    {
        "key": "featureEngineering",
        "title": "Feature Engineering",
        "description": "Creates or modifies features to enhance model performance."
    },
    {
        "key": "featureScaling",
        "title": "Feature Scaling",
        "description": "Normalizes feature ranges for better model performance."
    },
    {
        "key": "overfitting",
        "title": "Overfitting",
        "description": "When a model learns too much from training data, harming new data performance."
    },
    {
        "key": "underfitting",
        "title": "Underfitting",
        "description": "When a model is too simple to capture the underlying data patterns."
    },
    {
        "key": "regularization",
        "title": "Regularization",
        "description": "Prevents overfitting by adding penalties to model complexity."
    },
    {
        "key": "bagging",
        "title": "Bagging",
        "description": "Combines predictions from multiple models for improved accuracy."
    },
    {
        "key": "boosting",
        "title": "Boosting",
        "description": "Builds models sequentially, with each correcting errors of the previous one."
    },
    {
        "key": "ensembleMethods",
        "title": "Ensemble Methods",
        "description": "Combines multiple models to improve overall performance."
    },
    {
        "key": "rocCurve",
        "title": "ROC Curve",
        "description": "Graphical representation of a classifier's performance."
    },
    {
        "key": "aucCurve",
        "title": "AUC Curve",
        "description": "i.e. Area Under the Curve"
    },
    {
        "key": "precisionRecall",
        "title": "Precision and Recall",
        "description": "Metrics for evaluating classification model accuracy and completeness."
    },
    {
        "key": "f1Score",
        "title": "F1 Score",
        "description": "Harmonic mean of Precision and Recall for balanced evaluation."
    },
    {
        "key": "confusionMatrix",
        "title": "Confusion Matrix",
        "description": "A table to evaluate classification model performance."
    },
    {
        "key": "crossEntropy",
        "title": "Cross-Entropy",
        "description": "Loss function measuring the difference between predicted and actual class labels."
    },
    {
        "key": "noSQLDatabases",
        "title": "NoSQL Databases",
        "description": "Flexible, scalable data storage solutions"
    },
    {
        "key": "microservicesArchitecture",
        "title": "Microservices Architecture",
        "description": "Independent, small service modules in software"
    },
    {
        "key": "serverlessArchitecture",
        "title": "Serverless Architecture",
        "description": "Cloud management of server operations"
    },
    {
        "key": "webAssembly",
        "title": "WebAssembly (Wasm)",
        "description": "High-performance web applications"
    },
    {
        "key": "edgeComputing",
        "title": "Edge Computing",
        "description": "Data processing closer to data sources"
    },
    {
        "key": "zeroTrustSecurityModel",
        "title": "Zero Trust Security Model",
        "description": "Security that trusts no one by default"
    },
    {
        "key": "dockerSwarm",
        "title": "Docker Swarm",
        "description": "Management of Docker container clusters"
    },
    {
        "key": "oAuth2_0",
        "title": "OAuth 2.0",
        "description": "Authorization framework for resource access"
    },
    {
        "key": "jwt",
        "title": "JWT (JSON Web Tokens)",
        "description": "Securely transmit information as JSON"
    },
    {
        "key": "eventDrivenArchitecture",
        "title": "Event-Driven Architecture",
        "description": "Building software with actions triggering responses"
    },
    {
        "key": "cqrs",
        "title": "CQRS (Command Query Responsibility Segregation)",
        "description": "Separating read and write operations for efficiency"
    },
    {
        "key": "devSecOps",
        "title": "DevSecOps",
        "description": "Integrating security into the DevOps process"
    },
    {
        "key": "dataLake",
        "title": "Data Lake",
        "description": "Vast storage for raw data in its native format"
    },
    {
        "key": "etl",
        "title": "ETL (Extract, Transform, Load)",
        "description": "Process to collect, change, and store data"
    },
    {
        "key": "monolith",
        "title": "Monolith",
        "description": "A single, large application handling multiple tasks"
    },
    {
        "key": "dataWarehouse",
        "title": "Data Warehouse",
        "description": "System for storing and managing large data for analysis"
    },
    {
        "key": "graphDatabases",
        "title": "Graph Databases",
        "description": "Databases storing data in nodes and edges to show relationships"
    },
    {
        "key": "apm",
        "title": "APM (Application Performance Management)",
        "description": "Monitors and manages software application performance"
    },
    {
        "key": "infrastructureAsCode",
        "title": "Infrastructure as Code (IaC)",
        "description": "Managing infrastructure through machine-readable scripts"
    },
    {
        "key": "immutableInfrastructure",
        "title": "Immutable Infrastructure",
        "description": "Infrastructure that is never modified after deployment"
    },
    {
        "key": "distributedLedgerTechnology",
        "title": "Distributed Ledger Technology",
        "description": "Digital system recording transactions in multiple places simultaneously"
    },
    {
        "key": "chaosEngineering",
        "title": "Chaos Engineering",
        "description": "Practice of testing systems to withstand turbulent conditions"
    },
    {
        "key": "reactiveProgramming",
        "title": "Reactive Programming",
        "description": "Handling data streams and changes in real time"
    },
    {
        "key": "dataSharding",
        "title": "Data Sharding",
        "description": "Splitting a database into smaller, faster parts"
    },
    {
        "key": "apiGateway",
        "title": "API Gateway",
        "description": "Manages requests and directs them to the correct services"
    },
    {
        "key": "webRTC",
        "title": "WebRTC (Web Real-Time Communication)",
        "description": "Enabling real-time communication directly in web browsers"
    },
    {
        "key": "dataGovernance",
        "title": "Data Governance",
        "description": "Management of data's availability, usability, integrity, and security"
    },
    {
        "key": "dataAnonymization",
        "title": "Data Anonymization",
        "description": "Removing personal identifiers from data to protect privacy"
    },
    {
        "key": "federatedLearning",
        "title": "Federated Learning",
        "description": "Training AI models across multiple devices without sharing data"
    },
    {
        "key": "explainableAI",
        "title": "Explainable AI (XAI)",
        "description": "Making AI decisions understandable to humans"
    },
    {
        "key": "syntheticData",
        "title": "Synthetic Data",
        "description": "Artificially generated data that mimics real data"
    },
    {
        "key": "quantumCryptography",
        "title": "Quantum Cryptography",
        "description": "Using principles of quantum mechanics for secure communication"
    },
    {
        "key": "digitalTwins",
        "title": "Digital Twins",
        "description": "Virtual replicas of physical objects or systems"
    },
    {
        "key": "edgeAI",
        "title": "Edge AI",
        "description": "Bringing artificial intelligence to edge devices to process data locally"
    },
    {
        "key": "homomorphicEncryption",
        "title": "Homomorphic Encryption",
        "description": "Performing computations on encrypted data without decryption"
    },
    {
        "key": "fogComputing",
        "title": "Fog Computing",
        "description": "Extending cloud computing to the edge of an enterprise's network"
    },
    {
        "key": "virtualPrivateCloud",
        "title": "Virtual Private Cloud (VPC)",
        "description": "Isolated cloud resources for enhanced security within a public cloud"
    },
    {
        "key": "hybridCloud",
        "title": "Hybrid Cloud",
        "description": "Combining public and private cloud environments for flexibility"
    },
    {
        "key": "multiCloudStrategy",
        "title": "Multi-Cloud Strategy",
        "description": "Using multiple cloud computing services to mitigate single-provider risks"
    },
    {
        "key": "dataOps",
        "title": "DataOps",
        "description": "An agile methodology for developing and maintaining data analytics"
    },
    {
        "key": "bioinformatics",
        "title": "Bioinformatics",
        "description": "Using technology to understand biological data"
    },
    {
        "key": "symmetricCryptography",
        "title": "Symmetric Cryptography",
        "description": "Algorithms for cryptography that use the same cryptographic keys for both the encryption of plaintext."
    },
    {
        "key": "AsymmetricCryptography",
        "title": "Asymmetric Cryptography",
        "description": "Cryptographic scheme requiring two different keys, one for encryption and the other for decryption."
    },
    {
        "key": "GDPR",
        "title": "GDPR",
        "description": "General Data Protection Regulation"
    },
    {
        "key": "optimisticLocking",
        "title": "Optimistic Locking",
        "description": "Concurrency control method strategy."
    }
]
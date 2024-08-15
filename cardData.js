import { MODAL_CONTENT_TYPES } from "./constants.js"

const readMoreText = "⌁—— Read more about it ——⌁"

const cards = [
  {
    slug: "codeSmell",
    title: "Code Smell",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "A code smell is a sign in the code that something might be wrong. It doesn't mean the code is broken, but it suggests that it might be improved or fixed."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of it like noticing a weird smell in your house. It doesn't mean there's definitely a fire, but it's worth checking out."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://miro.medium.com/v2/resize:fit:1400/1*ufqp4eDLabgkKTxqi168yA.png",
        alt: "Code Smell image"
      }
    ],
    readMoreLink: {
      ref: "https://www.sonarsource.com/learn/code-smells/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Indicators that code might need improvement."
  },
  {
    slug: "serverlessComputing",
    title: "Serverless Computing",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Serverless computing is a cloud computing model where the cloud provider runs the server, and dynamically manages the allocation of machine resources. You don't have to worry about managing servers; you just focus on your code."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "It's like renting a car instead of owning one. You get to use it when you need it without worrying about maintenance."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://www.fortinet.com/content/dam/fortinet/images/cyberglossary/serverless-computing.png",
        alt: "Serverless Computing image"
      }
    ],
    readMoreLink: {
      ref: "https://cloud.google.com/discover/what-is-serverless-computing",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Cloud computing without managing servers."
  },
  {
    slug: "optimisticLocking",
    title: "Optimistic Locking",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Optimistic locking is a strategy where you read a record and there is some versioning in it (can be timestamp, version number, etc), and then when you attempt to update the record, the versioning is checked. The update is only committed when the record version remains the same. If the record version has changed, then the update attempt is aborted. This is particularly useful to increase throughput, and prevent conflicts when multiple users attempt to update a single record."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "It's like in an art class where everyone is coloring a big picture together, and each have their own copy to color. You start coloring your tree green, and your friend might color their tree as blue. When you finish, you check in the big picture if anyone has colored the tree. If no one has, you can add your green tree. But if someone has colored the tree, you can't just color over it. You have to decide together what color the tree should be."
      }
    ],
    readMoreLink: {
      ref: "https://stackoverflow.com/questions/129329/optimistic-vs-pessimistic-locking",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Concurrency control method strategy."
  },
  {
    slug: "webFlow",
    title: "Web Flow",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Web flow refers to the sequence of steps or pages a user goes through on a website to complete a task. It's like a map that shows how users navigate your site."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of it like the steps you take when you follow a recipe to bake a cake."
      }
    ],
    keywords: [],
    shortDesc: "The sequence of user steps on a website."
  },
  {
    slug: "webHooks",
    title: "Web Hooks",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Web hooks are automated messages sent from one app to another when something happens. They let different applications communicate in real time."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "It's like getting a text alert when your favorite show is on TV."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://miro.medium.com/v2/resize:fit:1200/1*D0JykQxrL0IpYCZ6LH0CiA.png",
        alt: "Web Hooks image"
      }
    ],
    readMoreLink: {
      ref: "https://zapier.com/blog/what-are-webhooks/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Automated messages between apps."
  },
  {
    slug: "llms",
    title: "LLMs",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "LLMs (Large Language Models) are advanced AI systems that can understand, generate, and interact with human language. They are trained on vast amounts of text data to perform a variety of language-related tasks."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine a robot that has read all the books in the library and can talk about any topic."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://f5b623aa.rocketcdn.me/wp-content/uploads/2023/06/page-4.jpg",
        alt: "LLMs image"
      }
    ],
    readMoreLink: {
      ref: "https://aws.amazon.com/what-is/large-language-model/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "AI systems for understanding and generating text."
  },
  {
    slug: "openSource",
    title: "Open Source",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Open source software is software with source code that anyone can inspect, modify, and enhance. It promotes collaboration and sharing among developers."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of it like a recipe that everyone can see, change, and improve."
      }
    ],
    readMoreLink: {
      ref: "https://opensource.com/resources/what-open-source",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Software with publicly accessible source code."
  },
  {
    slug: "webScraping",
    title: "Web Scraping",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Web scraping is the process of using software to automatically collect data from websites. It helps gather large amounts of information quickly."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "It's like using a vacuum to clean up a room instead of picking up every piece of dust by hand."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://d1pnnwteuly8z3.cloudfront.net/images/4d5bf260-c3d0-4f21-b718-8ede8d4ca716/febf9de6-8a5a-4055-b274-e685485496f5.jpeg",
        alt: "Web Scraping image"
      }
    ],
    readMoreLink: {
      ref: "https://www.geeksforgeeks.org/what-is-web-scraping-and-how-to-use-it/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Automatically collecting data from websites."
  },
  {
    slug: "frontEnd",
    title: "Front End",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Front end development involves creating the parts of a website that users interact with. This includes everything you see and click on a website."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of it like decorating a cake. It's all about making it look good and making sure it’s easy to enjoy."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://www.extwebtech.com/wp-content/uploads/2023/03/frontend-vs-bancend.webp",
        alt: "Front End image"
      }
    ],
    readMoreLink: {
      ref: "https://flatironschool.com/blog/front-end-vs-back-end-development/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "The visual and interactive parts of a website."
  },
  {
    slug: "fullStack",
    title: "Full Stack",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Full stack development means working on both the front end (what users see) and the back end (the server and database) of a website or application. Full stack developers can build entire applications from start to finish."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "It's like being able to bake a cake and decorate it too!"
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://miro.medium.com/v2/resize:fit:1400/0*cl7fc6pt1MHjIF4K.png",
        alt: "Full Stack image"
      }
    ],
    readMoreLink: {
      ref: "https://aws.amazon.com/what-is/full-stack-development/#:~:text=Full%20stack%20development%20is%20the,user%20interactions%20with%20the%20application.",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Development of both front end and back end."
  },
  {
    slug: "functions",
    title: "Functions",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Functions are blocks of code that perform specific tasks. You can call a function whenever you need to perform that task, which helps keep your code organized and reusable."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "It's like having a set of instructions for making a sandwich. Anytime you want a sandwich, you just follow the steps."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://res.cloudinary.com/practicaldev/image/fetch/s--iCkOfD0L--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/1024/1%2A709ugF12LLkYxvb839YNlg.png",
        alt: "Functions image"
      }
    ],
    readMoreLink: {
      ref: "https://www.w3schools.com/js/js_functions.asp",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Reusable blocks of code performing specific tasks."
  },
  {
    slug: "arguments",
    title: "Arguments",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Arguments are the values you pass to a function so it can perform its task. They are like the ingredients you give to a recipe."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of it like telling a function to make a sandwich and giving it bread, peanut butter, and jelly."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://i.sstatic.net/9lg1H.png",
        alt: "Arguments image"
      }
    ],
    readMoreLink: {
      ref: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#parameters",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Values passed to functions to influence their behavior."
  },
  {
    slug: "dictionary",
    title: "Dictionary",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "A dictionary in programming is a collection of key-value pairs. It's like a real dictionary where you look up a word (key) to find its definition (value)."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine having a box with labels (keys) and items (values) inside. You can quickly find what you need by looking at the labels."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://cdn-wordpress-info.futurelearn.com/info/wp-content/uploads/FL-Prog103-2.3-Dictionary-768x317.png",
        alt: "Dictionary image"
      }
    ],
    readMoreLink: {
      ref: "https://www.w3schools.com/python/python_dictionaries.asp",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A collection of key-value pairs in programming."
  },
  {
    slug: "tuple",
    title: "Tuple",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "A tuple is a collection of items that are ordered and unchangeable. It's like a list, but once you create it, you can't change it."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of it like a grocery list written in pen. You can't erase or change the items once they're written down."
      }
    ],
    readMoreLink: {
      ref: "https://www.w3schools.com/python/python_tuples.asp",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "An ordered, unchangeable collection of items."
  },
  {
    slug: "list",
    title: "List",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "A list is a collection of items that are ordered and changeable. You can add, remove, or change items in a list."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine a grocery list written in pencil. You can add new items, erase old ones, or change them as you need."
      }
    ],
    readMoreLink: {
      ref: "https://www.w3schools.com/python/python_lists.asp",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "An ordered, changeable collection of items."
  },
  {
    slug: "boolean",
    title: "Boolean",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "A boolean is a data type with two possible values: true or false. It's like a light switch that can only be on or off."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of it like asking a yes or no question. The answer can only be yes (true) or no (false)."
      }
    ],
    readMoreLink: {
      ref: "https://www.w3schools.com/js/js_booleans.asp",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A data type with true or false values."
  },
  {
    slug: "string",
    title: "String",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "A string is a sequence of characters, like letters, numbers, and symbols, used to represent text in programming."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine a string as a necklace made of different beads. Each bead is a character in the string."
      }
    ],
    readMoreLink: {
      ref: "https://www.w3schools.com/python/python_strings.asp",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A sequence of characters representing text."
  },
  {
    slug: "floats",
    title: "Floats",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Floats are numbers that have a decimal point. They can represent fractions and very precise values."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of a float as the way you write money, like $3.50 or $7.99."
      }
    ],
    readMoreLink: {
      ref: "https://www.w3schools.com/python/python_datatypes.asp",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Numbers with decimal points for precision."
  },
  {
    slug: "double",
    title: "Double",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "A double is similar to a float, but it can store much larger and more precise decimal numbers."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine a double as a super accurate float, used when you need extra precision, like in scientific calculations."
      }
    ],
    readMoreLink: {
      ref: "https://www.w3schools.com/java/java_data_types.asp",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "More precise and larger decimal numbers."
  },
  {
    slug: "dataTypes",
    title: "Data Types",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Data types define the kind of data a variable can hold. Common data types include integers (whole numbers), floats (decimal numbers), strings (text), and booleans (true or false)."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of data types like different kinds of containers: a jar for jam, a box for toys, or a bottle for water."
      }
    ],
    readMoreLink: {
      ref: "https://www.w3schools.com/python/python_datatypes.asp",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Categories defining the kind of data variables can hold."
  },
  {
    slug: "threads",
    title: "Threads",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Threads are like mini-programs running inside a larger program. They allow different parts of the program to run simultaneously."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine a restaurant kitchen where multiple chefs (threads) are preparing different dishes at the same time."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://cdn.ttgtmedia.com/rms/onlineimages/how_threads_make_process-f_mobile.png",
        alt: "Threads image"
      }
    ],
    readMoreLink: {
      ref: "https://www.techtarget.com/whatis/definition/thread/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Mini-programs running concurrently within a larger program."
  },
  {
    slug: "classes",
    title: "Classes",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Classes are blueprints for creating objects in programming. They define the properties and behaviors that the objects created from the class will have."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of a class as a cookie cutter and the objects as the cookies made from it."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://nonlineardata.com/wp-content/uploads/2020/11/Car_Class.png",
        alt: "Classes image"
      }
    ],
    readMoreLink: {
      ref: "https://brilliant.org/wiki/classes-oop/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Blueprints for creating objects with defined properties and behaviors."
  },
  {
    slug: "objects",
    title: "Objects",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Objects are instances of classes. They have the properties and behaviors defined by their class."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine an object as a specific cookie made from a cookie cutter. It has the same shape but can be decorated differently."
      }
    ],
    readMoreLink: {
      ref: "https://www.geeksforgeeks.org/what-are-objects-in-programming/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Instances of classes with specific attributes and methods."
  },
  {
    slug: "inheritance",
    title: "Inheritance",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Inheritance is a way to create a new class using details from an existing class. The new class inherits the properties and behaviors of the existing class."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of inheritance like getting traits from your parents, like eye color or hair color."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://cdn-images-1.medium.com/v2/resize:fit:1080/1*gvHEf4lT2m_dHyH6c0UC1Q.png",
        alt: "Inheritance image"
      }
    ],
    readMoreLink: {
      ref: "https://www.enjoyalgorithms.com/blog/inheritance-in-java",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Creating new classes from existing ones, inheriting their properties and behaviors."
  },
  {
    slug: "syntax",
    title: "Syntax",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Syntax in programming refers to the rules that define the structure of a program. It’s like grammar in a language, ensuring that code is written correctly so the computer can understand it."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine syntax as the rules of writing sentences in English, like using proper punctuation and word order."
      }
    ],
    readMoreLink: {
      ref: "https://woz-u.com/blog/what-is-syntax-in-computer-programming/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Rules defining the structure and format of code."
  },
  {
    slug: "ide",
    title: "IDE (Integrated Development Environment)",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "An IDE is a software application that provides tools to help programmers write, test, and debug their code. It’s like a supercharged text editor with features like syntax highlighting, code completion, and debugging."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of an IDE as a toolkit for coding, with everything you need in one place."
      }
    ],
    readMoreLink: {
      ref: "https://aws.amazon.com/what-is/ide/#:~:text=An%20integrated%20development%20environment%20(IDE,easy%2Dto%2Duse%20application.",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Integrated Development Environment for coding and debugging."
  },
  {
    slug: "debugger",
    title: "Debugger",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "A debugger is a tool that helps programmers find and fix bugs (errors) in their code. It allows you to run your code step-by-step to see what’s happening at each stage."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine a debugger like a magnifying glass that helps you see exactly where things go wrong in a program."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*554AE0054vtiRNfcqlOXLw.png",
        alt: "Debugger image"
      }
    ],
    readMoreLink: {
      ref: "https://medium.com/@dwivedi.ankit21/the-debugger-a-behind-the-scenes-look-at-how-it-works-983a65883e97",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Tool for finding and fixing code errors"
  },
  {
    slug: "deployment",
    title: "Deployment",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Deployment is the process of making an application available for use. This involves moving the code from development to a live environment where users can access it."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of deployment like launching a new video game, making it available for everyone to play."
      }
    ],
    readMoreLink: {
      ref: "https://www.ibm.com/docs/en/zos/2.4.0?topic=task-deploying-software",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Making applications available for use"
  },
  {
    slug: "continuousDeployment",
    title: "Continuous Deployment",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Continuous Deployment is a software release process that automatically deploys every code change that passes automated tests to production. It ensures that the software is always up-to-date and can be quickly updated."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine Continuous Deployment as a bakery where fresh bread is baked and put on shelves as soon as it's ready, ensuring customers always get the freshest products."
      }
    ],
    readMoreLink: {
      ref: "https://www.atlassian.com/continuous-delivery/software-testing/continuous-deployment",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Automatic deployment of code changes"
  },
  {
    slug: "deploymentPipeline",
    title: "Deployment Pipeline",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "A deployment pipeline is a set of automated processes that ensure software changes go through various stages like building, testing, and deployment. It helps deliver high-quality software quickly and consistently."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of a deployment pipeline like an assembly line in a factory, where each step ensures the product is perfect before it reaches the customer."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://example.com/deployment-pipeline-image.png",
        alt: "Deployment Pipeline image"
      }
    ],
    readMoreLink: {
      ref: "https://www.pagerduty.com/resources/learn/what-is-a-deployment-pipeline/#:~:text=In%20software%20development%2C%20a%20deployment,%2C%20building%2C%20and%20deploying%20code.",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Automated process for software changes"
  },
  {
    slug: "dataValidation",
    title: "Data Validation",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Data validation is the process of checking data for accuracy and completeness before using it. This ensures that the data is correct and reliable."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine data validation like checking your homework for mistakes before submitting it to your teacher."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://media.geeksforgeeks.org/wp-content/uploads/20240709183957/Verification-vs-validation.png",
        alt: "Data Validation image"
      }
    ],
    readMoreLink: {
      ref: "https://www.tibco.com/glossary/what-is-data-validation#:~:text=Data%20validation%20is%20the%20process,validation%20to%20ensure%20accurate%20results.",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Ensuring data accuracy and completeness"
  },
  {
    slug: "dataSerialization",
    title: "Data Serialization",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Data serialization is the process of converting data into a format that can be easily stored or transmitted and then reconstructed later. Common formats include JSON and XML."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of data serialization like packing a suitcase for a trip, making it easy to carry and unpack later."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://miro.medium.com/v2/resize:fit:1018/1*QaauFe77Rsk7YeULrhUtxw.gif",
        alt: "Data Serialization image"
      }
    ],
    readMoreLink: {
      ref: "https://medium.com/@jdelamettrie/data-serialization-631a0325c38a",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Converting data for storage or transmission"
  },
  {
    slug: "mocking",
    title: "Mocking",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Mocking is a technique in software testing where you create fake versions of objects or functions to test parts of your code without relying on the real ones."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine mocking like practicing a play with stand-ins before the actual actors come in."
      }
    ],
    readMoreLink: {
      ref: "https://www.geeksforgeeks.org/software-testing-mock-testing/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Creating fake objects for testing"
  },
  {
    slug: "authentication",
    title: "Authentication",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Authentication is the process of verifying who someone is. It’s like showing your ID to prove your identity."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of authentication as logging into your email account using your username and password to prove it’s really you."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://miro.medium.com/v2/resize:fit:960/1*FhdNVsZV5cPvrBKsE0OVvw.png",
        alt: "Authentication image"
      }
    ],
    readMoreLink: {
      ref: "https://medium.com/geekculture/authentication-and-authorization-a5a2eafdde16",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Verifying user identity"
  },
  {
    slug: "authorization",
    title: "Authorization",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Authorization is the process of determining what someone is allowed to do. It happens after authentication."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of authorization like a security guard checking if you have access to a VIP area after you’ve shown your ID."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://miro.medium.com/v2/resize:fit:960/1*FhdNVsZV5cPvrBKsE0OVvw.png",
        alt: "Authorization image"
      }
    ],
    readMoreLink: {
      ref: "https://medium.com/geekculture/authentication-and-authorization-a5a2eafdde16",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Determining user permissions"
  },
  {
    slug: "prototypes",
    title: "Prototypes (Software Development)",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "In software development, a prototype is an early sample or model of the software being developed. It helps developers understand how the final product will look and function."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of a prototype like a rough draft of an essay. It’s not the final version but gives a good idea of what the end result will be."
      }
    ],
    readMoreLink: {
      ref: "https://www.techtarget.com/searcherp/definition/prototype#:~:text=Prototype%2Dbased%20programming%20generates%20an,code%20and%20how%20it%20executes.",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Early models of software for testing"
  },
  {
    slug: "monolithicArchitecture",
    title: "Monolithic Architecture",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Monolithic architecture is a software design where all the components of the application are integrated into a single, large system."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine monolithic architecture like a giant block of Legos all stuck together, where changing one part affects the entire structure."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://miro.medium.com/v2/resize:fit:755/1*Tiizur0VlvZlJSIgADsp4w.png",
        alt: "Monolithic Architecture image"
      }
    ],
    readMoreLink: {
      ref: "https://tech.tamara.co/monolith-architecture-5f00270f384e",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Integrated large system design"
  },
  {
    slug: "github",
    title: "GitHub",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "GitHub is a platform that allows developers to host, review, and manage their code. It’s a place where you can collaborate with others on software projects."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of GitHub like a social network for programmers where they share and improve each other’s code."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://miro.medium.com/v2/resize:fit:1400/1*irvoqLol7t-EPNzZN6CSnA.png",
        alt: "GitHub image"
      }
    ],
    readMoreLink: {
      ref: "https://medium.com/swlh/an-introduction-to-git-and-github-22ecb4cb1256",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Platform for code hosting and collaboration"
  },
  {
    slug: "orm",
    title: "ORM (Object-Relational Mapping)",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "ORM is a technique that allows you to interact with your database using objects in your code. It makes database operations more intuitive by representing data as objects rather than tables."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of ORM like a translator that helps your code speak the language of the database."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://media.licdn.com/dms/image/D5612AQGZjJpjEP1iEA/article-cover_image-shrink_720_1280/0/1686716645931?e=2147483647&v=beta&t=tAiEVMUjaDyUeHbCWsWd6jQb5u1DZyWomJgqow1HzWM",
        alt: "ORM image"
      }
    ],
    readMoreLink: {
      ref: "https://medium.com/@grover.vinayak0611/what-is-orm-why-to-use-it-and-brief-introduction-of-orm-frameworks-b61b16d02a3c",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Mapping database tables to objects"
  },
  {
    slug: "caching",
    title: "Caching",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Caching is a technique used to store copies of frequently accessed data in a temporary storage area, or cache, so that it can be accessed more quickly."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of caching like keeping your favorite snacks in a drawer so you don’t have to go to the kitchen every time you’re hungry."
      }
    ],
    readMoreLink: {
      ref: "https://hazelcast.com/glossary/caching/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Storing data for quick access"
  },
  {
    slug: "machineLearning",
    title: "Machine Learning",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Machine learning is a type of artificial intelligence that allows software applications to become more accurate at predicting outcomes without being explicitly programmed to do so. Machine learning algorithms use historical data as input to predict new output values."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "It's used in many areas such as email filtering, network security, and computer vision."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ilep9ckl66ho6mp5v6ht.png",
        alt: "Machine Learning image"
      }
    ],
    readMoreLink: {
      ref: "https://mitsloan.mit.edu/ideas-made-to-matter/machine-learning-explained",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "AI exists thanks to this"
  },
  {
    slug: "deepLearning",
    title: "Deep Learning",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Deep learning is a subset of machine learning where artificial neural networks, algorithms inspired by the human brain, learn from large amounts of data. It's a key technology behind driverless cars, enabling them to recognize a stop sign, or to distinguish a pedestrian from a lamppost."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Deep learning is used in many applications such as voice assistants, translation services, and image recognition."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2l6t6kevnd062opmw6ab.png",
        alt: "Deep Learning image"
      }
    ],
    readMoreLink: {
      ref: "https://www.ibm.com/topics/deep-learning",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A subset of machine learning"
  },
  {
    slug: "artificialIntelligence",
    title: "Artificial Intelligence",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Artificial intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. The term may also be applied to any machine that exhibits traits associated with a human mind such as learning and problem-solving."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "AI is used in many areas such as robotics, autonomous vehicles, and natural language processing."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/iii01cstbhic3xzt9ceu.png",
        alt: "Artificial Intelligence image"
      }
    ],
    readMoreLink: {
      ref: "https://www.ibm.com/topics/artificial-intelligence",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A frenemy"
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Cybersecurity involves protecting computer systems and networks from digital attacks, theft, and damage. It includes various practices and technologies to safeguard data and maintain privacy."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Cybersecurity is crucial for protecting sensitive information and ensuring the safe operation of systems in both personal and professional environments."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://reciprocity.com/wp-content/uploads/2022/10/resources_top-cybersecurity-threats_730x425.jpg",
        alt: "Cybersecurity image"
      }
    ],
    readMoreLink: {
      ref: "https://www.ibm.com/topics/cybersecurity",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Staying secured in a a world of hackers"
  },
  {
    slug: "epochs",
    title: "Epochs",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "In machine learning, an epoch is one complete pass through the entire training dataset. During each epoch, the model's parameters are updated to improve accuracy."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Multiple epochs are often needed for a model to learn effectively and reach high performance on the task it is trained for. However, its' crucial to determine the number of epochs carefully, as explaned in the image below."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://miro.medium.com/v2/resize:fit:860/1*GXftMdKjyaLYuAIn-nB4zA.png",
        alt: "Epochs image"
      }
    ],
    readMoreLink: {
      ref: "https://www.simplilearn.com/tutorials/machine-learning-tutorial/what-is-epoch-in-machine-learning",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Training rounds in Machine Learning"
  },
  {
    slug: "apis",
    title: "APIs",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "An API (Application Programming Interface) is a set of rules that allows different software programs to communicate with each other. It defines how requests and responses should be formatted so that different systems can interact seamlessly."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "APIs are used to integrate different services, enabling developers to build applications that interact with other software or services."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "For example, An API is like a messenger between apps and services. Imagine you are using a weather app. The app uses an API to ask a weather service for today’s weather. The weather service sends the info back through the API, and you see the weather on your app. So, an API helps different software talk to each other and share information."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://www.openlegacy.com/hs-fs/hubfs/Picture1-2.webp?width=969&height=509&name=Picture1-2.webp",
        alt: "APIs image"
      }
    ],
    readMoreLink: {
      ref: "https://www.postman.com/what-is-an-api/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Application Programming Interfaces"
  },
  {
    slug: "cloudComputing",
    title: "Cloud Computing",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Cloud computing is the delivery of computing services—such as servers, storage, databases, and software—over the internet (the cloud). It allows users to access and use these services without having to manage physical servers or infrastructure."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Cloud computing provides flexibility, scalability, and cost-efficiency for businesses and individuals. Following image shows types of cloud computing"
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://images.spiceworks.com/wp-content/uploads/2021/07/02105247/Cloud-Computing.png",
        alt: "Cloud Computing image"
      }
    ],
    readMoreLink: {
      ref: "https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-cloud-computing",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "It's always fun on the clouds, until it starts \"leaking\""
  },
  {
    slug: "dataScience",
    title: "Data Science",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Data science involves using scientific methods, processes, and systems to extract insights and knowledge from data. It combines various fields such as statistics, data analysis, and machine learning to understand and interpret complex data."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Data science helps in making informed decisions and predictions based on data analysis."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://editor.analyticsvidhya.com/uploads/73194new%202.png",
        alt: "Data Science image from DataScientist.com"
      }
    ],
    readMoreLink: {
      ref: "https://www.ibm.com/topics/data-science",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Science of converting information to Data"
  },
  {
    slug: "quantumComputing",
    title: "Quantum Computing",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Quantum computing is an area of computing that uses principles of quantum mechanics to perform calculations. It leverages quantum bits (qubits) to process information in ways that classical computers cannot."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Quantum computing has the potential to solve complex problems more efficiently than traditional computers."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/auzqrr27ccgv9ylkloed.png",
        alt: "Quantum Computing image"
      }
    ],
    readMoreLink: {
      ref: "https://www.explainthatstuff.com/quantum-computing.html",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Sheldon Cooper's gonna love this"
  },
  {
    slug: "internetOfThings",
    title: "Internet of Things",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "The Internet of Things (IoT) refers to the network of physical objects embedded with sensors and software that can connect and exchange data with other devices over the internet."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "IoT enables smarter interactions between devices and can be used in various applications like smart homes, health monitoring, and industrial automation."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://www.i-scoop.eu/wp-content/uploads/2016/10/The-Internet-of-Things-from-connecting-devices-to-creating-value-large.jpg",
        alt: "Internet of Things image"
      }
    ],
    readMoreLink: {
      ref: "https://www.oracle.com/internet-of-things/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A Network of things"
  },
  {
    slug: "blockchain",
    title: "Blockchain",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Blockchain is a digital ledger technology that records transactions across many computers in a way that ensures the security and transparency of the data."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Each transaction is recorded in a 'block,' and blocks are linked together in a 'chain.' Blockchain is used in cryptocurrencies and other applications requiring secure data storage."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://www.investopedia.com/thmb/XrimO6cL95A3j-ts3PknnOXn8EI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/dotdash_Final_Blockchain_Sep_2020-01-60f31a638c4944abbcfde92e1a408a30.jpg",
        alt: "Blockchain image"
      }
    ],
    readMoreLink: {
      ref: "https://builtin.com/blockchain",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A chain of transactions"
  },
  {
    slug: "reactJS",
    title: "ReactJS",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "ReactJS is a JavaScript library used for building user interfaces. It allows developers to create reusable UI components and manage the state of their applications efficiently."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "ReactJS is often used for developing single-page applications (SPAs) and can be integrated with other libraries or frameworks."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://miro.medium.com/v2/resize:fit:1400/1*6l9rCElYlP9EoG0A-iXULg.png",
        alt: "ReactJS image"
      }
    ],
    readMoreLink: {
      ref: "https://www.freecodecamp.org/news/react-for-beginners-handbook/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A popular JS library for building user-interfaces"
  },
  {
    slug: "docker",
    title: "Docker",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Docker is a platform that allows developers to package applications and their dependencies into containers. Containers are lightweight, portable, and can run on any system with Docker installed."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Docker simplifies deployment and scaling of applications, ensuring consistency across different environments."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://accesto.com/blog/static/d97eced7f59a885b5ba877366cf21909/3c492/docker-explained-1.png",
        alt: "Docker image"
      }
    ],
    readMoreLink: {
      ref: "https://docker-curriculum.com/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "The most popular Container tool"
  },
  {
    slug: "initFunction",
    title: "__init__ Function",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "The __init__ function is a special method in Python that is called when an object is instantiated. It initializes the object's attributes and sets up the initial state of the object."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "It is commonly used to set default values for object properties or to perform setup tasks when creating new instances of a class."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://www.boardinfinity.com/blog/content/images/2023/05/init-in-python.png",
        alt: "__init__ Function image"
      }
    ],
    readMoreLink: {
      ref: "https://docker-curriculum.com/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A special method in Python Programming Language"
  },
  {
    slug: "python",
    title: "Python",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Python is a high-level programming language known for its readability and simplicity. It is widely used in web development, data science, automation, and more."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Python's syntax is designed to be easy to understand and write, making it a popular choice for beginners and experienced programmers alike."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9fx9gi335wgl2pdt6sjj.png",
        alt: "Python image"
      }
    ],
    readMoreLink: {
      ref: "https://example.com",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A programming language known for readability and simplicity"
  },
  {
    slug: "threeSigmaRule",
    title: "Three-Sigma Rule",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "The Three-Sigma Rule, also known as <strong> the 68-95-99.7 rule and  </strong>  <strong>Empirical Rule </strong>, states that for a normal distribution, nearly all data points will fall within three standard deviations of the mean."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "This rule helps to understand data variability and is used in various fields, including quality control and statistics."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://decodingdatascience.com/wp-content/uploads/2023/05/Screenshot-2023-05-05-101857.jpg",
        alt: "Three-Sigma Rule image"
      }
    ],
    readMoreLink: {
      ref: "https://www.investopedia.com/terms/t/three-sigma-limits.asp",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A rule of thumb in data science"
  },
  {
    slug: "recursion",
    title: "Recursion",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Recursion is a programming technique where a function calls itself in order to solve a problem. It is often used to break down complex problems into simpler sub-problems."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Recursion is useful in tasks such as tree traversal, sorting algorithms, and solving mathematical problems."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://miro.medium.com/v2/resize:fit:2000/1*QrQ5uFKIhK3jQSFYeRBIRg.png",
        alt: "Recursion image"
      }
    ],
    readMoreLink: {
      ref: "https://2533.medium.com/recursion-explained-with-pictures-72578d28058a",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A programming technique"
  },
  {
    slug: "git",
    title: "Git",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Git is a version control system that tracks changes to files and allows multiple people to collaborate on a project. It helps manage code changes, track history, and resolve conflicts."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Git is widely used in software development to maintain code integrity and support collaborative work."
      }
    ],
    readMoreLink: {
      ref: "https://dev.to/milu_franz/git-explained-the-basics-igc",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "The most popular version control system"
  },
  {
    slug: "versionControl",
    title: "Version Control",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Version control is a system that records changes to files over time so that you can recall specific versions later. It is essential for managing software development and tracking changes to code."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Version control helps coordinate work among multiple developers and track the history of changes. Mainly, there are two types of version control systems as 'Centralized' and 'Distributed' Version Control Systems, as explained in the image below."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://www.thatcompany.com/wp-content/uploads/2020/03/art3.jpg",
        alt: "Version Control image"
      }
    ],
    readMoreLink: {
      ref: "https://about.gitlab.com/topics/version-control/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Recording every change"
  },
  {
    slug: "microservices",
    title: "Microservices",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Microservices is a way of designing software systems where the application is divided into small, independent services that work together. Each service performs a specific function and can be developed, deployed, and scaled independently."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of microservices like a team of specialists. Each specialist is very good at one thing. They work independently, but they all come together to complete a big project."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://d1.awsstatic.com/Developer%20Marketing/containers/monolith_1-monolith-microservices.70b547e30e30b013051d58a93a6e35e77408a2a8.png",
        alt: "Microservices image"
      }
    ],
    readMoreLink: {
      ref: "https://aws.amazon.com/microservices/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Independent services working together"
  },
  {
    slug: "restfulAPI",
    title: "RESTful API",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "A RESTful API (Representational State Transfer API) is a type of API that follows a set of rules for how to create, read, update, and delete data. It uses standard HTTP methods like GET, POST, PUT, and DELETE."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of it as a way for different programs to talk to each other over the internet, using common language and protocols."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://www.altexsoft.com/media/2021/03/rest_api_works.png",
        alt: "GraphQL image"
      }
    ],
    readMoreLink: {
      ref: "https://aws.amazon.com/what-is/restful-api/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "API using standard HTTP methods"
  },
  {
    slug: "graphql",
    title: "GraphQL",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "GraphQL is a query language for APIs that allows clients to request exactly the data they need. It provides a more efficient and flexible alternative to RESTful APIs."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine being able to ask for specific ingredients in a recipe, rather than getting the entire cookbook."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://cdn.prod.website-files.com/5ff66329429d880392f6cba2/614841249e5f844b0c7550d1_REST%20vs%20GraphQL.png",
        alt: "GraphQL image"
      }
    ],
    readMoreLink: {
      ref: "https://www.solo.io/topics/graphql/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Query language for APIs"
  },
  {
    slug: "containerization",
    title: "Containerization",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Containerization is a technology that packages an application and its dependencies into a 'container' that can run anywhere. Containers make it easy to deploy and manage applications consistently across different environments."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of it like packing everything you need for a trip into a single, portable box."
      }
    ],
    readMoreLink: {
      ref: "https://aws.amazon.com/what-is/containerization/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Packaging applications for consistent deployment"
  },
  {
    slug: "kubernetes",
    title: "Kubernetes",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Kubernetes is an open-source platform designed to automate the deployment, scaling, and operation of containerized applications. It helps manage clusters of containers."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of it as the conductor of an orchestra, ensuring all the musicians (containers) play in harmony."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://example.com/kubernetes-image.png",
        alt: "Kubernetes image"
      }
    ],
    readMoreLink: {
      ref: "https://kubernetes.io/docs/concepts/overview/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Platform for automating container management"
  },
  {
    slug: "branching",
    title: "Branching",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Branching is a feature of version control systems like Git that allows developers to create separate copies of the codebase to work on different tasks without affecting the main project."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "It's like having different drafts of an essay where you can make changes without messing up the original."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://res.cloudinary.com/snyk/image/upload/v1615821731/wordpress-sync/image1-11.png",
        alt: "Branching image"
      }
    ],
    readMoreLink: {
      ref: "https://medium.com/@jacoblogan98/understanding-git-branching-5d01f3dda541",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Creating separate code versions"
  },
  {
    slug: "merging",
    title: "Merging",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Merging is the process of combining changes from different branches into a single branch in version control systems. It helps integrate features and fixes back into the main codebase."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "It's like combining different drafts of an essay into one final version."
      }
    ],
    readMoreLink: {
      ref: "https://atlassian.com/git/tutorials/using-branches/git-merge",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Combining changes from branches"
  },
  {
    slug: "pullRequests",
    title: "Pull Requests (PR)",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "A pull request is a way to propose changes to a codebase. It allows developers to review and discuss the changes before integrating them into the main branch."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "It's like asking your teacher to review and approve your essay before adding it to the class's shared document."
      }
    ],
    readMoreLink: {
      ref: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Proposing and reviewing code changes"
  },
  {
    slug: "agile",
    title: "Agile",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Agile is a methodology for software development that emphasizes flexibility, collaboration, and customer feedback. It focuses on delivering small, incremental improvements to a project."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Agile methodologies include frameworks such as Scrum and Kanban, which help teams adapt to changes and continuously improve their processes."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://miro.medium.com/v2/resize:fit:718/0*7te6LdDJm2DqZIHB.png",
        alt: "Agile image"
      }
    ],
    readMoreLink: {
      ref: "https://www.spiceworks.com/tech/devops/articles/what-is-agile-software-development/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A methology in Software Development"
  },
  {
    slug: "scrum",
    title: "Scrum",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Scrum is a framework within the Agile methodology used for managing and completing complex projects. It involves iterative development and regular feedback from stakeholders."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Scrum emphasizes teamwork, accountability, and continuous improvement through practices such as sprints, daily stand-ups, and retrospectives."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://scrumorg-website-prod.s3.amazonaws.com/drupal/inline-images/2023-09/scrum-framework-9.29.23.png",
        alt: "Scrum image"
      }
    ],
    readMoreLink: {
      ref: "https://www.scrum.org/resources/what-scrum-module",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A framework within the Agile methodology"
  },
  {
    slug: "kanban",
    title: "Kanban",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Kanban is a visual workflow management method that helps teams visualize and manage work. It uses a board with columns to represent different stages of the work process."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Kanban helps teams improve efficiency by limiting work in progress and optimizing the flow of tasks through the workflow."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://media.geeksforgeeks.org/wp-content/uploads/20231107173425/Kanban-board-2.png",
        alt: "Kanban image"
      }
    ],
    readMoreLink: {
      ref: "https://www.atlassian.com/agile/kanban",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A visual workflow management method"
  },
  {
    slug: "sql",
    title: "SQL",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "SQL (Structured Query Language) is a language used for managing and querying relational databases. It allows users to perform operations such as retrieving, inserting, updating, and deleting data."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "SQL is essential for working with databases and is widely used in various applications to interact with data."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://www.spiceworks.com/wp-content/uploads/2022/06/How-Does-SQL-Work.png",
        alt: "SQL image"
      }
    ],
    readMoreLink: {
      ref: "https://aws.amazon.com/what-is/sql/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A relational database management system"
  },
  {
    slug: "nosql",
    title: "NoSQL",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "NoSQL is a type of database that provides a mechanism for data storage and retrieval that is different from traditional relational databases. It is designed to handle large volumes of unstructured or semi-structured data."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "NoSQL databases are often used for applications that require high scalability, performance, and flexibility in handling data."
      }
    ],
    readMoreLink: {
      ref: "https://radixweb.com/blog/introduction-to-continuous-deployment#Continuous",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A non-relational database management system"
  },
  {
    slug: "html",
    title: "HTML",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "HTML (HyperText Markup Language) is the standard language used to create and design web pages. It structures content on the web by using tags and elements to define headings, paragraphs, links, images, and other components."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "HTML forms the backbone of web content and is used in conjunction with CSS and JavaScript to build complete web pages."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "assets/images/html.jpg",
        alt: "HTML image"
      }
    ],
    readMoreLink: {
      ref: "https://www.hostinger.com/tutorials/what-is-html",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "HyperText Markup Language"
  },
  {
    slug: "css",
    title: "CSS",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML. It controls the layout, colors, fonts, and overall design of web pages."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "CSS allows for the separation of content and design, making web pages more flexible and easier to maintain."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "assets/images/css.jpg",
        alt: "CSS image"
      }
    ],
    readMoreLink: {
      ref: "https://www.hostinger.com/tutorials/what-is-css",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Cascading Style Sheets"
  },
  {
    slug: "java",
    title: "Java",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Java is a high-level programming language known for its portability, scalability, and performance. It is widely used for building enterprise-level applications, mobile apps, and web services."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Java's 'write once, run anywhere' philosophy makes it a popular choice for cross-platform development."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "assets/images/java.jpg",
        alt: "Java image"
      }
    ],
    readMoreLink: {
      ref: "https://www.simplilearn.com/tutorials/java-tutorial/what-is-java",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A high-level programming-language"
  },
  {
    slug: "cSharp",
    title: "C#",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "C# (C-Sharp) is a modern, object-oriented programming language developed by Microsoft. It is used primarily for developing applications on the .NET framework, including web, desktop, and mobile apps."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "C# is known for its simplicity, versatility, and strong integration with Microsoft technologies."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "assets/images/cSharp.jpg",
        alt: "C# image"
      }
    ],
    readMoreLink: {
      ref: "https://dotnet.microsoft.com/en-us/languages/csharp",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A modern, OOP language from Microsoft"
  },
  {
    slug: "php",
    title: "PHP",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "PHP (Hypertext Preprocessor) is a server-side scripting language designed for web development. It is commonly used to create dynamic web pages and interact with databases."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "PHP is widely supported and integrates well with HTML, making it a popular choice for web developers."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "assets/images/php.jpg",
        alt: "PHP image"
      }
    ],
    readMoreLink: {
      ref: "https://www.freecodecamp.org/news/what-is-php-the-php-programming-language-meaning-explained/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Server-side scripting language designed for web development"
  },
  {
    slug: "ruby",
    title: "Ruby",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Ruby is an object-oriented programming language known for its simplicity and productivity. It is often used for web development, particularly with the Ruby on Rails framework."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Ruby's elegant syntax makes it easy to read and write, helping developers create robust applications quickly."
      }
    ],
    readMoreLink: {
      ref: "https://developer.oracle.com/learn/technical-articles/what-is-ruby",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Another simple, OOP language"
  },
  {
    slug: "swift",
    title: "Swift",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Swift is a programming language developed by Apple for iOS and macOS development. It is known for its speed, safety, and ease of use."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Swift allows developers to build high-performance applications with modern features and a clean syntax."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "assets/images/swift.jpg",
        alt: "Swift image"
      }
    ],
    readMoreLink: {
      ref: "https://developer.apple.com/swift/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A programming language from Apple"
  },
  {
    slug: "typescript",
    title: "TypeScript",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "TypeScript is a superset of JavaScript that adds static typing to the language. It helps developers catch errors early and improve code quality by providing type-checking and advanced features."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "TypeScript is compiled to JavaScript and is compatible with existing JavaScript code and libraries."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "assets/images/typescript.jpg",
        alt: "TypeScript image"
      }
    ],
    readMoreLink: {
      ref: "https://www.typescripttutorial.net/typescript-tutorial/what-is-typescript/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A superset of JavaScript"
  },
  {
    slug: "kotlin",
    title: "Kotlin",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Kotlin is a statically-typed programming language developed by JetBrains. It is used for Android development and is fully interoperable with Java."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Kotlin offers modern features, concise syntax, and improved safety compared to Java."
      }
    ],
    readMoreLink: {
      ref: "https://www.techtarget.com/whatis/definition/Kotlin",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A statically-typed programming language by JetBrains"
  },
  {
    slug: "bash",
    title: "Bash",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Bash is a Unix shell and command language used for writing shell scripts. It allows users to automate tasks, manage files, and interact with the operating system through commands."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Bash scripts are commonly used for system administration and software deployment tasks."
      }
    ],
    readMoreLink: {
      ref: "https://opensource.com/resources/what-bash",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A unix shell and command language"
  },
  {
    slug: "rubyOnRails",
    title: "Ruby on Rails",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Ruby on Rails is a web application framework written in Ruby. It follows the Model-View-Controller (MVC) architecture and emphasizes convention over configuration."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Rails helps developers build robust and scalable web applications quickly by providing built-in tools and best practices."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "assets/images/rubyOnRails.jpg",
        alt: "Ruby on Rails image"
      }
    ],
    readMoreLink: {
      ref: "https://www.codecademy.com/resources/blog/what-is-ruby-on-rails/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A web application framework written in Ruby"
  },
  {
    slug: "angular",
    title: "Angular",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Angular is a TypeScript-based open-source web application framework developed by Google. It provides a comprehensive solution for building dynamic and responsive web applications."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Angular includes features such as data binding, dependency injection, and modular development to streamline the development process."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://www.aalpha.net/wp-content/uploads/2019/07/angularjs-development-india.jpg",
        alt: "Angular image"
      }
    ],
    readMoreLink: {
      ref: "https://v17.angular.io/guide/what-is-angular",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A TypeScript-based web application framework"
  },
  {
    slug: "vueJS",
    title: "VueJS",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "VueJS is a progressive JavaScript framework used for building user interfaces. It is designed to be incrementally adoptable and can be integrated into existing projects."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "VueJS provides reactive data binding and component-based architecture, making it easy to build interactive and maintainable web applications."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://v1.vuejs.org/images/mvvm.png",
        alt: "VueJS image"
      }
    ],
    readMoreLink: {
      ref: "https://v1.vuejs.org/guide/overview.html",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A aggressive progressive JavaScript framework"
  },
  {
    slug: "flutter",
    title: "Flutter",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Flutter is an open-source UI toolkit developed by Google for building natively compiled applications for mobile, web, and desktop from a single codebase."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Flutter uses the Dart programming language and provides a rich set of pre-designed widgets and tools for creating beautiful and responsive user interfaces."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "assets/images/flutter.jpg",
        alt: "Flutter image"
      }
    ],
    readMoreLink: {
      ref: "https://techvify-software.com/wp-content/uploads/2023/07/how-flutter-works.jpg",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "An UI toolkit from Google"
  },
  {
    slug: "swiftUI",
    title: "SwiftUI",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "SwiftUI is a framework by Apple for building user interfaces across all Apple platforms using a declarative Swift syntax. It simplifies the process of creating complex UI elements and animations."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "SwiftUI integrates seamlessly with existing Swift code and provides a live preview of UI changes, enhancing the development workflow."
      }
    ],
    readMoreLink: {
      ref: "https://www.adjust.com/blog/get-started-with-swiftui/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Another framework from Apple"
  },
  {
    slug: "algorithm",
    title: "Algorithm",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "An algorithm is a step-by-step procedure or formula for solving a problem. It is a fundamental concept in computer science and programming used to perform tasks, calculations, and data processing."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Algorithms are the basis of programming and are used to design and optimize code for various applications."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://cdn.ttgtmedia.com/rms/onlineimages/types_of_algorithms-f_mobile.png",
        alt: "Algorithm image"
      }
    ],
    readMoreLink: {
      ref: "https://www.geeksforgeeks.org/introduction-to-algorithms/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A procedure or formula for solving a problem"
  },
  {
    slug: "dataStructure",
    title: "Data Structure",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "A data structure is a way of organizing and storing data so that it can be accessed and modified efficiently. Common data structures include arrays, linked lists, stacks, queues, and trees."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Choosing the right data structure is crucial for optimizing performance and managing data effectively in software applications."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://media.geeksforgeeks.org/wp-content/uploads/20220520182504/ClassificationofDataStructure-660x347.jpg",
        alt: "Data Structure image"
      }
    ],
    readMoreLink: {
      ref: "https://www.w3schools.com/dsa/dsa_intro.php",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A way of oragnzing and storing data"
  },
  {
    slug: "bigO",
    title: "Big O Notation",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Big O notation is used to describe the performance or complexity of an algorithm in terms of time and space. It provides an upper bound on the growth rate of an algorithm's running time or space usage."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "In simple words, Big O Notation helps us understand how the time to find something changes as the number of items increases. The lower the Big O value, the more efficient the process!"
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Big O notation also helps in <strong> analyzing and comparing the efficiency </strong> of different algorithms."
      }
    ],
    readMoreLink: {
      ref: "https://www.freecodecamp.org/news/big-o-notation-why-it-matters-and-why-it-doesnt-1674cfa8a23c/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A term used to explain... algorithms?"
  },
  {
    slug: "recursionDepth",
    title: "Recursion Depth",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Recursion depth refers to the number of times a recursive function calls itself before reaching the base case. It is important to manage recursion depth to avoid stack overflow errors and ensure efficient execution."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Understanding recursion depth helps in designing algorithms that use recursion effectively and safely."
      }
    ],
    keywords: [],
    shortDesc: "Used to elaborate on recusrion method"
  },
  {
    slug: "debugging",
    title: "Debugging",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Debugging is the process of identifying and fixing errors or bugs in software code. It involves testing, analyzing, and modifying code to ensure that it functions correctly."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Effective debugging is crucial for improving software quality and performance."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://www.edureka.co/blog/wp-content/uploads/2019/08/debuuging-steps-528x294.png",
        alt: "Debugging image"
      }
    ],
    readMoreLink: {
      ref: "https://www.ibm.com/topics/debugging",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "An interesting process that makes programmers yell \"Just Why!?\""
  },
  {
    slug: "testing",
    title: "Testing",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Testing is the process of evaluating software to ensure it behaves as expected. It involves executing code with various inputs to verify correctness, performance, and reliability."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Testing can be performed manually or through automated test scripts and is essential for delivering high-quality software."
      }
    ],
    readMoreLink: {
      ref: "https://www.ibm.com/topics/software-testing",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "The ultimate fear of developers"
  },
  {
    slug: "unitTest",
    title: "Unit Test",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "A unit test is a type of testing that focuses on verifying individual components or functions of a software application. It ensures that each unit of code performs as intended."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Unit tests are typically automated and help identify bugs early in the development process."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://codenboxautomationlab.com/wp-content/uploads/2022/06/unit-testing-life-cycle-pic.png",
        alt: "Unit Test image"
      }
    ],
    readMoreLink: {
      ref: "https://aws.amazon.com/what-is/unit-testing/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A type of testing"
  },
  {
    slug: "integrationTest",
    title: "Integration Test",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Integration testing focuses on verifying the interactions between different components or systems to ensure they work together as expected."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Integration tests help ensure that different parts of a software application integrate smoothly and function correctly as a whole."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://www.simform.com/wp-content/uploads/2022/01/Integration-testing-types.png",
        alt: "Integration Test image"
      }
    ],
    readMoreLink: {
      ref: "https://katalon.com/resources-center/blog/integration-testing",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Another type of testing"
  },
  {
    slug: "endToEndTest",
    title: "End-to-End Test",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "End-to-end testing evaluates the entire software application from start to finish to ensure that it works as intended in a real-world scenario."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "It verifies that all components of the application interact correctly and that the system as a whole meets the desired requirements."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://cdn.prod.website-files.com/610bb663a35dd3364ddbf08c/62b594796e28e910d6624e03_end-to-end-testing-metrics.png",
        alt: "End-to-End Test image"
      }
    ],
    readMoreLink: {
      ref: "https://smartbear.com/learn/automated-testing/what-is-end-to-end-testing/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Another type of testing"
  },
  {
    slug: "performanceTest",
    title: "Performance Test",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Performance testing evaluates how well a software application performs under various conditions, including load, stress, and scalability."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "It helps identify bottlenecks and ensure that the application meets performance criteria and handles user demands effectively."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://www.a1qa.com/wp-content/uploads/2019/06/performance-testing.jpg",
        alt: "Performance Test image"
      }
    ],
    readMoreLink: {
      ref: "https://en.wikipedia.org/wiki/Software_performance_testing",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A type of testing focusing on applcation performence"
  },
  {
    slug: "loadTest",
    title: "Load Test",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Load testing is a type of performance testing that evaluates how a software application handles a specific volume of users or transactions."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "It helps determine if the application can handle expected load conditions without degrading performance."
      }
    ],
    readMoreLink: {
      ref: "https://en.wikipedia.org/wiki/Software_load_testing#:~:text=Load%20testing%20generally%20refers%20to,model%2C%20such%20as%20web%20servers.",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A type of performance testing"
  },
  {
    slug: "stressTest",
    title: "Stress Test",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Stress testing assesses how a software application performs under extreme conditions, such as a sudden spike in user activity or data volume."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "It helps identify the application's breaking point and ensure it can recover gracefully from high-stress situations."
      }
    ],
    readMoreLink: {
      ref: "https://www.geeksforgeeks.org/stress-testing-software-testing/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A type of performance testing under pressure"
  },
  {
    slug: "securityTest",
    title: "Security Test",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Security testing identifies vulnerabilities and weaknesses in a software application to ensure it is protected against potential threats and attacks."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "It involves checking for issues such as unauthorized access, data breaches, and compliance with security standards."
      }
    ],
    readMoreLink: {
      ref: "https://www.hackerone.com/knowledge-center/what-security-testing",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A test against hacking and whatnot"
  },
  {
    slug: "usabilityTest",
    title: "Usability Test",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Usability testing evaluates how easy and intuitive a software application is for users. It focuses on user experience, including ease of navigation, accessibility, and overall satisfaction."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Usability tests help ensure that the application is user-friendly and meets the needs of its target audience."
      }
    ],
    readMoreLink: {
      ref: "https://www.geeksforgeeks.org/usability-testing/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A test that ensures that application is user-friendly"
  },
  {
    slug: "codeReview",
    title: "Code Review",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Code review is the process where developers check each other's code for mistakes, improvements, and learning opportunities. It ensures code quality and helps share knowledge within the team."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of it as having a friend read your essay to catch any errors and suggest better ways to write it."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://browserstack.wpenginepowered.com/wp-content/uploads/2023/09/Code-Review-Process-700x380.png",
        alt: "Code Review image"
      }
    ],
    readMoreLink: {
      ref: "https://about.gitlab.com/topics/version-control/what-is-code-review/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Checking code for quality and improvement"
  },
  {
    slug: "refactoring",
    title: "Refactoring",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Refactoring is the process of improving the structure and readability of code without changing its behavior. It's like cleaning and organizing your room to make it more efficient and pleasant to use."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine rewriting a messy essay to make it clearer and easier to understand."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://lvivity.com/wp-content/uploads/2020/09/refactoring-process.png",
        alt: "Refactoring image"
      }
    ],
    readMoreLink: {
      ref: "https://refactoring.guru/refactoring/what-is-refactoring",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Improving code structure without changing behavior"
  },
  {
    slug: "technicalDebt",
    title: "Technical Debt",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Technical debt refers to the extra work required in the future because of shortcuts or suboptimal solutions made in the past. It's like doing your homework quickly and poorly, knowing you'll have to redo it later."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of it as borrowing time now but paying back with interest later."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2vdqiy2rlvcg00nw230f.png",
        alt: "Technical Debt image"
      }
    ],
    readMoreLink: {
      ref: "https://asana.com/resources/technical-debt",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Extra work due to past shortcuts"
  },
  {
    slug: "designPatterns",
    title: "Design Patterns",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Design patterns are standard solutions to common problems in software design. They provide a reusable template for solving recurring issues in coding."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "It's like having a recipe for your favorite dish that you can use over and over again."
      }
    ],
    readMoreLink: {
      ref: "https://refactoring.guru/design-patterns/what-is-pattern",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Standard solutions to common design problems"
  },
  {
    slug: "solidPrinciples",
    title: "SOLID Principles",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "SOLID principles are a set of guidelines to make software design more understandable, flexible, and maintainable. They stand for Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of them as rules for writing good, clean, and efficient code."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://miro.medium.com/v2/resize:fit:751/1*GoLwqfeB624NB5g7JPVyBA.png",
        alt: "SOLID Principles image"
      }
    ],
    readMoreLink: {
      ref: "https://en.wikipedia.org/wiki/SOLID",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Guidelines for better software design"
  },
  {
    slug: "kissPrinciple",
    title: "KISS Principle",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "The KISS principle stands for 'Keep It Simple, Stupid.' It means that systems should be as simple as possible to avoid unnecessary complexity."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of it like writing an essay in clear, straightforward language so everyone can understand it easily."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://miro.medium.com/v2/resize:fit:1400/1*yN1zFlkN7bKVo1lld0Vm1A.png",
        alt: "KISS Principle image"
      }
    ],
    readMoreLink: {
      ref: "https://en.wikipedia.org/wiki/KISS_principle",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Keep it simple to avoid complexity"
  },
  {
    slug: "dryPrinciple",
    title: "DRY Principle",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "The DRY principle stands for 'Don't Repeat Yourself.' It means that every piece of knowledge or logic should be written once and reused throughout the code."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of it like using the same recipe card for your favorite dish instead of writing a new one each time."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://miro.medium.com/v2/resize:fit:1400/1*lQlLv4AJZysvATx1AEIpUQ.png",
        alt: "DRY Principle image"
      }
    ],
    readMoreLink: {
      ref: "https://thevaluable.dev/dry-principle-cost-benefit-example/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Avoid code repetition"
  },
  {
    slug: "uat",
    title: "UAT",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "UAT (User Acceptance Testing) is the final phase of software testing where actual users test the software to ensure it meets their needs and requirements."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "It's like asking a friend to try out a game you made to make sure it's fun and works well before sharing it with everyone."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://images.spiceworks.com/wp-content/uploads/2022/10/14110825/UAT-Testing-Process.png",
        alt: "UAT image"
      }
    ],
    readMoreLink: {
      ref: "https://www.guru99.com/user-acceptance-testing.html",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Final user testing phase"
  },
  {
    slug: "testDrivenDevelopment",
    title: "Test-Driven Development",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Test-Driven Development (TDD) is a software development approach where tests are written before the actual code. It involves creating tests to define desired functionality and then writing code to pass those tests."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "TDD helps ensure code quality and functionality by promoting continuous testing and iterative development."
      }
    ],
    readMoreLink: {
      ref: "https://testdriven.io/test-driven-development/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Or TDD, a software development approach"
  },
  {
    slug: "continuousIntegration",
    title: "Continuous Integration",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Continuous Integration (CI) is a practice where code changes are automatically tested and integrated into a shared repository multiple times a day. It aims to detect and fix errors early in the development process."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "CI helps improve software quality and reduce integration issues by ensuring that code changes are tested and validated frequently."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://www.pagerduty.com/wp-content/uploads/2020/01/continuous-integration-2.png",
        alt: "Continuous Integration image"
      }
    ],
    readMoreLink: {
      ref: "https://aws.amazon.com/devops/continuous-integration/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A software development practice"
  },
  {
    slug: "continuousDelivery",
    title: "Continuous Delivery",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Continuous Delivery (CD) is a practice where code changes are automatically built, tested, and prepared for release to production. It ensures that software can be deployed at any time with minimal manual intervention."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "CD promotes faster delivery of new features and bug fixes by streamlining the release process and ensuring that software is always in a deployable state."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://infraascode.com.br/images/ci_cd-CD.png",
        alt: "Continuous Delivery image"
      }
    ],
    readMoreLink: {
      ref: "https://aws.amazon.com/devops/continuous-delivery/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A software development practice often implemented with CI"
  },
  {
    slug: "devOps",
    title: "DevOps",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to improve collaboration, automation, and efficiency throughout the software development lifecycle."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "DevOps aims to enhance the speed, quality, and reliability of software delivery by fostering a culture of continuous improvement and shared responsibility."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://d1.awsstatic.com/product-marketing/DevOps/DevOps_feedback-diagram.ff668bfc299abada00b2dcbdc9ce2389bd3dce3f.png",
        alt: "DevOps image"
      }
    ],
    readMoreLink: {
      ref: "https://aws.amazon.com/devops/what-is-devops/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A set of practices that combine Dev and Ops"
  },
  {
    slug: "logisticRegression",
    title: "Logistic Regression",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Logistic regression is a statistical method used for binary classification. It helps predict the probability of an outcome that can be one of two possible categories. For example, it might predict whether an email is spam or not spam based on its content."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "It works by fitting a logistic curve to the data and using this curve to make predictions."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://miro.medium.com/v2/resize:fit:1400/1*dm6ZaX5fuSmuVvM4Ds-vcg.jpeg",
        alt: "Logistic Regression image"
      }
    ],
    readMoreLink: {
      ref: "https://towardsdatascience.com/introduction-to-logistic-regression-66248243c148",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Predicts probabilities for binary outcomes."
  },
  {
    slug: "kMeansClustering",
    title: "K-Means Clustering",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "K-Means Clustering is an unsupervised learning algorithm used to divide data into groups (clusters) where each data point belongs to the cluster with the nearest mean. It's useful for discovering patterns in data."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "For example, it can group customers into segments based on their purchasing behavior."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://editor.analyticsvidhya.com/uploads/56854k%20means%20clustering.png",
        alt: "K-Means Clustering image"
      }
    ],
    readMoreLink: {
      ref: "https://www.analyticsvidhya.com/blog/2020/10/a-simple-explanation-of-k-means-clustering/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Groups data into clusters based on similarity."
  },
  {
    slug: "decisionTrees",
    title: "Decision Trees",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Decision Trees are a type of algorithm used for classification and regression tasks. They split data into branches to make decisions based on various features, much like a flowchart."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "For instance, they can help determine whether a loan should be approved based on applicant details."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://miro.medium.com/v2/resize:fit:820/1*JAEY3KP7TU2Q6HN6LasMrw.png",
        alt: "Decision Trees image"
      }
    ],
    readMoreLink: {
      ref: "https://chirag-sehra.medium.com/decision-trees-explained-easily-28f23241248",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Uses a tree-like model of decisions and their possible consequences."
  },
  {
    slug: "randomForest",
    title: "Random Forest",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Random Forest is an ensemble learning technique that combines multiple decision trees to improve prediction accuracy. Each tree makes a decision, and the majority vote determines the final outcome."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "It's like having a group of experts where the decision is based on the consensus of all experts."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://miro.medium.com/v2/resize:fit:1010/1*R3oJiyaQwyLUyLZL-scDpw.png",
        alt: "Random Forest image"
      }
    ],
    readMoreLink: {
      ref: "https://medium.com/@denizgunay/random-forest-af5bde5d7e1e",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Combines multiple decision trees to improve accuracy."
  },
  {
    slug: "supportVectorMachines",
    title: "Support Vector Machines",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Support Vector Machines (SVM) are a type of supervised learning algorithm used for classification and regression. They work by finding the best boundary that separates different classes of data points."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine drawing a line that best divides two groups of points on a graph. SVM finds this optimal line."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/l4xu4d635cva6izqylzl.png",
        alt: "Support Vector Machines image"
      }
    ],
    readMoreLink: {
      ref: "https://www.kdnuggets.com/2016/07/support-vector-machines-simple-explanation.html",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Finds the best boundary between classes in data."
  },
  {
    slug: "gradientDescent",
    title: "Gradient Descent",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Gradient Descent is an optimization algorithm used to minimize the error of a model. It works by iteratively adjusting the model's parameters to find the lowest error value."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of it as climbing down a hill to reach the lowest point, which represents the smallest error."
      }
    ],
    readMoreLink: {
      ref: "https://towardsdatascience.com/gradient-descent-explained-9b953fc0d2c",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Optimizes model parameters by minimizing errors."
  },
  {
    slug: "neuralNetworks",
    title: "Neural Networks",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Neural Networks are a set of algorithms modeled after the human brain. They consist of interconnected nodes (neurons) that work together to solve complex problems, like image recognition."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "They can learn from data and make predictions, just like how our brains learn from experience."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://miro.medium.com/v2/resize:fit:667/1*SqsP6IcQoCLy9eMU8te3Vw.png",
        alt: "Neural Networks image"
      }
    ],
    readMoreLink: {
      ref: "https://www.freecodecamp.org/news/deep-learning-neural-networks-explained-in-plain-english/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Mimics the human brain to recognize patterns and make predictions."
  },
  {
    slug: "naturalLanguageProcessing",
    title: "Natural Language Processing",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Natural Language Processing (NLP) is a field of artificial intelligence that helps computers understand and interact with human language. It's used in applications like chatbots and translation services."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "NLP enables computers to understand, interpret, and generate human language."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://media.geeksforgeeks.org/wp-content/uploads/20240524132821/nlp-working.webp",
        alt: "Natural Language Processing image"
      }
    ],
    readMoreLink: {
      ref: "https://www.freecodecamp.org/news/deep-learning-neural-networks-explained-in-plain-english/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Enables computers to understand and process human language."
  },
  {
    slug: "recurrentNeuralNetworks",
    title: "Recurrent Neural Networks",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Recurrent Neural Networks (RNNs) are a type of neural network designed for processing sequences of data, like time series or sentences. They have loops that allow information to persist across time steps."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "RNNs are great for tasks where context from previous inputs is important."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://media.geeksforgeeks.org/wp-content/uploads/20231204125839/What-is-Recurrent-Neural-Network-660.webp",
        alt: "Recurrent Neural Networks image"
      }
    ],
    readMoreLink: {
      ref: "https://media.geeksforgeeks.org/wp-content/uploads/20240524132821/nlp-working.webp",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Processes sequences of data, maintaining context over time."
  },
  {
    slug: "convolutionalNeuralNetworks",
    title: "Convolutional Neural Networks",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Convolutional Neural Networks (CNNs) are designed to process grid-like data, such as images. They use filters to detect patterns in different parts of an image, which helps in tasks like image classification."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "CNNs are used for recognizing objects in photos or videos."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://miro.medium.com/v2/resize:fit:1400/1*7_BCJFzekmPXmJQVRdDgwg.png",
        alt: "Convolutional Neural Networks image"
      }
    ],
    readMoreLink: {
      ref: "https://nafizshahriar.medium.com/what-is-convolutional-neural-network-cnn-deep-learning-b3921bdd82d5",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Analyzes grid-like data, such as images, using filters."
  },
  {
    slug: "autoencoders",
    title: "Autoencoders",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Autoencoders are a type of neural network used for learning efficient representations of data. They work by compressing the input into a smaller representation and then reconstructing it to match the original input."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "They are useful for tasks like noise reduction and dimensionality reduction."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://miro.medium.com/v2/resize:fit:600/1*nqzWupxC60iAH2dYrFT78Q.png",
        alt: "Autoencoders image"
      }
    ],
    readMoreLink: {
      ref: "https://medium.com/@birla.deepak26/autoencoders-76bb49ae6a8f",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Learns efficient data representations through compression and reconstruction."
  },
  {
    slug: "reinforcementLearning",
    title: "Reinforcement Learning",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Reinforcement Learning is a type of machine learning where an agent learns to make decisions by receiving rewards or penalties. The goal is to maximize the total reward over time."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "It's like training a robot to play a game by giving it points for making good moves and penalties for bad moves."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://images.spiceworks.com/wp-content/uploads/2022/09/29100907/Reinforcement-Learning-Model.png",
        alt: "Reinforcement Learning image"
      }
    ],
    readMoreLink: {
      ref: "https://www.spiceworks.com/tech/artificial-intelligence/articles/what-is-reinforcement-learning/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Trains agents to make decisions by rewarding or punishing actions."
  },
  {
    slug: "transferLearning",
    title: "Transfer Learning",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Transfer Learning is a technique where a pre-trained model is adapted to perform a different but related task. This approach helps save time and computational resources."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "For example, a model trained to recognize cats and dogs can be adapted to identify different breeds of dogs."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://cdn.prod.website-files.com/5d7b77b063a9066d83e1209c/627d125248f5fa07e1faf0c6_61f54fb4bbd0e14dfe068c8f_transfer-learned-knowledge.png",
        alt: "Transfer Learning image"
      }
    ],
    readMoreLink: {
      ref: "https://www.v7labs.com/blog/transfer-learning-guide",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Adapts pre-trained models for new but related tasks."
  },
  {
    slug: "hyperparameterTuning",
    title: "Hyperparameter Tuning",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Hyperparameter Tuning is the process of optimizing the settings of a machine learning model to improve its performance. These settings, called hyperparameters, control the learning process and the structure of the model."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "It's like adjusting the knobs on a radio to get the best sound quality."
      }
    ],
    readMoreLink: {
      ref: "https://www.analyticsvidhya.com/blog/2022/02/a-comprehensive-guide-on-hyperparameter-tuning-and-its-techniques/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Optimizes model settings to improve performance."
  },
  {
    slug: "crossValidation",
    title: "Cross-Validation",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Cross-Validation is a technique used to assess how well a machine learning model performs on unseen data. It involves splitting the data into multiple subsets, training the model on some subsets, and testing it on the remaining ones."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "It's like taking a practice test to see how well you'll do on the real exam."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://www.sharpsightlabs.com/wp-content/uploads/2024/02/cross-validation-explained_FEATURED-IMAGE.png",
        alt: "Cross-Validation image"
      }
    ],
    readMoreLink: {
      ref: "https://www.geeksforgeeks.org/cross-validation-machine-learning/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Evaluates model performance on multiple data splits."
  },
  {
    slug: "featureEngineering",
    title: "Feature Engineering",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Feature Engineering involves creating new features or modifying existing ones to improve the performance of a machine learning model. It's like adding more details to a drawing to make it clearer."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Effective feature engineering can make a significant difference in how well a model performs."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://blog.minitab.com/hubfs/FeatureEngineering-blog-img1-hubspot.jpg",
        alt: "Feature Engineering image"
      }
    ],
    readMoreLink: {
      ref: "https://builtin.com/articles/feature-engineering",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Creates or modifies features to enhance model performance."
  },
  {
    slug: "featureScaling",
    title: "Feature Scaling",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Feature Scaling is the process of normalizing the range of features in your data. This helps improve the performance and convergence speed of machine learning algorithms."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "It's like making sure all the pieces of a puzzle fit together properly."
      }
    ],
    keywords: [],
    shortDesc: "Normalizes feature ranges for better model performance."
  },
  {
    slug: "overfitting",
    title: "Overfitting",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Overfitting occurs when a machine learning model learns the details and noise in the training data to the extent that it negatively impacts its performance on new data."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "It's like memorizing answers to a practice test without understanding the material, leading to poor performance on the actual exam."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://www.mathworks.com/discovery/overfitting/_jcr_content/mainParsys/image.adapt.full.medium.svg/1718273106637.svg",
        alt: "Overfitting image"
      }
    ],
    readMoreLink: {
      ref: "https://www.geeksforgeeks.org/underfitting-and-overfitting-in-machine-learning/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "When a model learns too much from training data, harming new data performance."
  },
  {
    slug: "underfitting",
    title: "Underfitting",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Underfitting happens when a machine learning model is too simple to capture the underlying pattern in the data. It performs poorly on both training and new data."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "It's like using a very basic formula to solve a complex problem, resulting in inaccurate answers."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://www.mathworks.com/discovery/overfitting/_jcr_content/mainParsys/image.adapt.full.medium.svg/1718273106637.svg",
        alt: "Underfitting image"
      }
    ],
    readMoreLink: {
      ref: "https://www.geeksforgeeks.org/underfitting-and-overfitting-in-machine-learning/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "When a model is too simple to capture the underlying data patterns."
  },
  {
    slug: "regularization",
    title: "Regularization",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Regularization is a technique used to prevent overfitting by adding a penalty to the complexity of the model. It helps in keeping the model simpler and more generalizable."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "It's like adding rules to limit how much a model can change to avoid fitting too closely to the training data."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://editor.analyticsvidhya.com/uploads/71199regularization.jpg",
        alt: "Regularization image"
      }
    ],
    readMoreLink: {
      ref: "",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Prevents overfitting by adding penalties to model complexity."
  },
  {
    slug: "bagging",
    title: "Bagging",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Bagging, or Bootstrap Aggregating, is an ensemble technique that improves model performance by training multiple models on different subsets of the data and combining their predictions."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "It's like asking several people for their opinions and then averaging them to make a decision."
      }
    ],
    readMoreLink: {
      ref: "https://www.ibm.com/topics/bagging",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Combines predictions from multiple models for improved accuracy."
  },
  {
    slug: "boosting",
    title: "Boosting",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Boosting is an ensemble technique that builds multiple models sequentially, where each model tries to correct the errors of the previous one. The final prediction is a weighted sum of the predictions from all models."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "It's like learning from mistakes and improving with each step."
      }
    ],
    readMoreLink: {
      ref: "https://aws.amazon.com/what-is/boosting/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Builds models sequentially, with each correcting errors of the previous one."
  },
  {
    slug: "ensembleMethods",
    title: "Ensemble Methods",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Ensemble Methods combine the predictions from multiple models to improve overall performance. Techniques like bagging, boosting, and stacking are common ensemble methods."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "It's like using the wisdom of a group to make a better decision."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://cdn.corporatefinanceinstitute.com/assets/ensemble-methods.png",
        alt: "Ensemble Methods image"
      }
    ],
    readMoreLink: {
      ref: "https://corporatefinanceinstitute.com/resources/data-science/ensemble-methods/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Combines multiple models to improve overall performance."
  },
  {
    slug: "rocCurve",
    title: "ROC Curve",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "The ROC Curve (Receiver Operating Characteristic Curve) is a graphical representation of a classifier's performance. It plots the true positive rate against the false positive rate at various thresholds."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "It helps in assessing how well a model can distinguish between classes."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://media.geeksforgeeks.org/wp-content/uploads/20230410164437/AUC-ROC-Curve.webp",
        alt: "ROC Curve image"
      }
    ],
    readMoreLink: {
      ref: "https://medium.com/@shaileydash/understanding-the-roc-and-auc-intuitively-31ca96445c02",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Graphical representation of a classifier's performance."
  },
  {
    slug: "aucCurve",
    title: "AUC Curve",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "AUC (Area Under the Curve) is a performance measurement for classification problems at various threshold settings. The AUC represents the degree or measure of separability. It tells how much the model is capable of distinguishing between classes."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "It's like checking how well a doctor can distinguish between patients with and without a disease based on a diagnostic test."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://media.geeksforgeeks.org/wp-content/uploads/20230410164437/AUC-ROC-Curve.webp",
        alt: "AUC Curve image"
      }
    ],
    readMoreLink: {
      ref: "https://medium.com/@shaileydash/understanding-the-roc-and-auc-intuitively-31ca96445c025",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "i.e. Area Under the Curve"
  },
  {
    slug: "precisionRecall",
    title: "Precision and Recall",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Precision and Recall are metrics used to evaluate the performance of classification models. Precision measures the accuracy of positive predictions, while Recall measures how well the model identifies all positive instances."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "They are especially useful when dealing with imbalanced datasets."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://miro.medium.com/v2/resize:fit:824/1*xMl_wkMt42Hy8i84zs2WGg.png",
        alt: "Precision and Recall image"
      }
    ],
    readMoreLink: {
      ref: "https://www.analyticsvidhya.com/blog/2020/09/precision-recall-machine-learning/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Metrics for evaluating classification model accuracy and completeness."
  },
  {
    slug: "f1Score",
    title: "F1 Score",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "The F1 Score is a metric that combines Precision and Recall into a single number. It is the harmonic mean of Precision and Recall, providing a balanced measure of a model's accuracy."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "It's useful when you need a single metric to assess the performance of a model."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://miro.medium.com/v2/resize:fit:898/1*7tC4-fUHtcffvXGcGTJJtg.png",
        alt: "F1 Score image"
      }
    ],
    readMoreLink: {
      ref: "https://www.v7labs.com/blog/f1-score-guide",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Harmonic mean of Precision and Recall for balanced evaluation."
  },
  {
    slug: "confusionMatrix",
    title: "Confusion Matrix",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "A Confusion Matrix is a table used to evaluate the performance of a classification model. It shows the counts of true positive, false positive, true negative, and false negative predictions."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "It helps in understanding the types of errors a model makes."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://cdn.prod.website-files.com/5d7b77b063a9066d83e1209c/63b413d2cdc133446aa23fc5_636b9182cfaef2115e028921_HERO_1_Confusion.png",
        alt: "Confusion Matrix image"
      }
    ],
    readMoreLink: {
      ref: "https://www.analyticsvidhya.com/blog/2020/04/confusion-matrix-machine-learning/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A table to evaluate classification model performance."
  },
  {
    slug: "crossEntropy",
    title: "Cross-Entropy",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Cross-Entropy is a loss function used to measure the performance of a classification model. It quantifies the difference between the predicted probabilities and the actual class labels."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Lower cross-entropy indicates better model performance."
      }
    ],
    readMoreLink: {
      ref: "https://towardsdatascience.com/what-is-cross-entropy-3bdb04c13616",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Loss function measuring the difference between predicted and actual class labels."
  },
  {
    slug: "noSQLDatabases",
    title: "NoSQL Databases",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "NoSQL databases store data in a flexible, scalable way, unlike traditional SQL databases. It's like having different types of storage boxes that can expand as you add more stuff."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine NoSQL as a big collection of adjustable shelves that fit all kinds of items, not just books."
      }
    ],
    readMoreLink: {
      ref: "https://www.mongodb.com/nosql-explained",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Flexible, scalable data storage solutions"
  },
  {
    slug: "microservicesArchitecture",
    title: "Microservices Architecture",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Microservices architecture is a way of building software where each part is a small, independent piece. It's like building a Lego structure with different blocks that can be replaced without breaking the whole thing."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of microservices as separate apps on your phone that work together to make everything run smoothly."
      }
    ],
    readMoreLink: {
      ref: "https://microservices.io/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Independent, small service modules in software"
  },
  {
    slug: "serverlessArchitecture",
    title: "Serverless Architecture",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Serverless architecture means you don't have to manage servers yourself. The cloud provider takes care of it for you. It's like having a magic kitchen that cooks your food without you needing to know how."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine serverless as a vending machine that automatically refills itself when something runs out."
      }
    ],
    readMoreLink: {
      ref: "https://serverless.com/learn/what-is-serverless/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Cloud management of server operations"
  },
  {
    slug: "webAssembly",
    title: "WebAssembly (Wasm)",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "WebAssembly is a new way to run code on the web, making it super fast. It's like turbocharging your web browser so it can do heavy tasks quickly."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of WebAssembly as a superhero suit that gives your web apps amazing speed and power."
      }
    ],
    readMoreLink: {
      ref: "https://webassembly.org/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "High-performance web applications"
  },
  {
    slug: "edgeComputing",
    title: "Edge Computing",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Edge computing brings data processing closer to where it's needed, reducing delays. It's like having a mini-computer in your smart devices to make things faster."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine edge computing as a brain in your devices that helps them think quicker without asking a faraway server."
      }
    ],
    readMoreLink: {
      ref: "https://www.ibm.com/cloud/what-is-edge-computing",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Data processing closer to data sources"
  },
  {
    slug: "zeroTrustSecurityModel",
    title: "Zero Trust Security Model",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Zero Trust is a security approach where no one inside or outside the network is trusted by default. It's like having multiple locks and security checks before letting someone in."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of Zero Trust as always double-checking and verifying everyone before allowing access to important stuff."
      }
    ],
    readMoreLink: {
      ref: "https://www.csoonline.com/article/3247848/what-is-zero-trust-a-model-for-more-effective-security.html",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Security that trusts no one by default"
  },
  {
    slug: "dockerSwarm",
    title: "Docker Swarm",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Docker Swarm helps manage a group of Docker containers, making it easy to deploy, manage, and scale them. It's like having a team of workers that coordinate tasks efficiently."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of Docker Swarm as the conductor of an orchestra, ensuring all musicians play in harmony."
      }
    ],
    readMoreLink: {
      ref: "https://docs.docker.com/engine/swarm/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Management of Docker container clusters"
  },
  {
    slug: "oAuth2_0",
    title: "OAuth 2.0",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "OAuth 2.0 is a way to let apps access your information without giving them your password. It's like giving a friend a key that only works for one room, not your whole house."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine OAuth 2.0 as a permission slip that allows access to specific parts of your data."
      }
    ],
    readMoreLink: {
      ref: "https://oauth.net/2/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Authorization framework for resource access"
  },
  {
    slug: "jwt",
    title: "JWT (JSON Web Tokens)",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "JWTs are a way to securely transmit information between parties as a JSON object. It's like a sealed envelope that can only be opened by the right person."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of JWT as a digital ID card that proves your identity and allows access to certain resources."
      }
    ],
    readMoreLink: {
      ref: "https://jwt.io/introduction/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Securely transmit information as JSON"
  },
  {
    slug: "eventDrivenArchitecture",
    title: "Event-Driven Architecture",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Event-Driven Architecture is a way of building software where actions (events) trigger responses. It's like ringing a doorbell and someone answers the door."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine it as a cause-and-effect system where specific events lead to certain actions."
      }
    ],
    readMoreLink: {
      ref: "https://aws.amazon.com/event-driven-architecture/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Building software with actions triggering responses"
  },
  {
    slug: "cqrs",
    title: "CQRS (Command Query Responsibility Segregation)",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "CQRS is a pattern that separates reading and writing operations into different models. It's like having separate lines at a counter: one for placing orders and one for picking them up."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of CQRS as organizing tasks to improve efficiency and clarity in your system."
      }
    ],
    readMoreLink: {
      ref: "https://martinfowler.com/bliki/CQRS.html",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Separating read and write operations for efficiency"
  },
  {
    slug: "devSecOps",
    title: "DevSecOps",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "DevSecOps integrates security practices into the DevOps process. It's like adding security checks at every step of building a Lego tower to make sure it doesn't fall."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine DevSecOps as building with Legos where every piece is checked for safety."
      }
    ],
    readMoreLink: {
      ref: "https://www.redhat.com/en/topics/devops/what-is-devsecops",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Integrating security into the DevOps process"
  },
  {
    slug: "dataLake",
    title: "Data Lake",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "A Data Lake is a storage system that holds vast amounts of raw data in its native format. It's like having a giant pool where you can store all kinds of water without sorting."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of a Data Lake as a big swimming pool where you can store different types of data."
      }
    ],
    readMoreLink: {
      ref: "https://aws.amazon.com/big-data/datalakes-and-analytics/what-is-a-data-lake/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Vast storage for raw data in its native format"
  },
  {
    slug: "etl",
    title: "ETL (Extract, Transform, Load)",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "ETL stands for Extract, Transform, Load. It's a process to collect data, change it to fit needs, and store it in a new place. It's like taking ingredients, cooking them, and serving the dish."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine ETL as making a recipe where you gather ingredients, prepare them, and then serve the meal."
      }
    ],
    readMoreLink: {
      ref: "https://www.talend.com/resources/what-is-etl/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Process to collect, change, and store data"
  },
  {
    slug: "monolith",
    title: "Monolith",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "A monolith is a large, single software application that handles multiple tasks. It's like having one big machine that does everything, from washing clothes to making coffee."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine a monolith as an all-in-one tool that can be harder to fix if something breaks."
      }
    ],
    readMoreLink: {
      ref: "https://en.wikipedia.org/wiki/Monolithic_application",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A single, large application handling multiple tasks"
  },
  {
    slug: "dataWarehouse",
    title: "Data Warehouse",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "A Data Warehouse is a system used to store and manage large amounts of data for analysis. It's like a giant library where all the books are organized for easy searching."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of a Data Warehouse as a super-organized bookshelf that makes finding information quick and easy."
      }
    ],
    readMoreLink: {
      ref: "https://www.oracle.com/data-warehouse/what-is-a-data-warehouse.html",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "System for storing and managing large data for analysis"
  },
  {
    slug: "graphDatabases",
    title: "Graph Databases (e.g., Neo4j)",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Graph Databases store data in nodes and edges, which show relationships. It's like a web of connections, like a social network map."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine a Graph Database as a map of your friendships, showing who knows who."
      }
    ],
    readMoreLink: {
      ref: "https://neo4j.com/what-is-a-graph-database/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Databases storing data in nodes and edges to show relationships"
  },
  {
    slug: "apm",
    title: "APM (Application Performance Management)",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "APM monitors and manages the performance and availability of software applications. It's like having a fitness tracker for your software, showing how healthy it is."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of APM as a doctor for your apps, keeping them in top shape."
      }
    ],
    readMoreLink: {
      ref: "https://www.dynatrace.com/news/blog/what-is-apm/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Monitors and manages software application performance"
  },
  {
    slug: "infrastructureAsCode",
    title: "Infrastructure as Code (IaC)",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "IaC is managing and provisioning computing infrastructure through machine-readable scripts. It's like using a recipe to automatically make a cake."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine IaC as writing instructions for a robot to set up your computer systems."
      }
    ],
    readMoreLink: {
      ref: "https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Managing infrastructure through machine-readable scripts"
  },
  {
    slug: "immutableInfrastructure",
    title: "Immutable Infrastructure",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Immutable Infrastructure means servers are never modified after deployment; they're replaced with new ones. It's like using a new sheet of paper for each new drawing."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine Immutable Infrastructure as using new Lego pieces each time you build something new."
      }
    ],
    readMoreLink: {
      ref: "https://www.redhat.com/en/topics/automation/what-is-immutable-infrastructure",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Infrastructure that is never modified after deployment"
  },
  {
    slug: "distributedLedgerTechnology",
    title: "Distributed Ledger Technology",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Distributed Ledger Technology (DLT) is a digital system for recording transactions where details are recorded in multiple places at the same time. It's like having multiple copies of a book to prevent losing any information."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of DLT as sharing your diary with friends to ensure everyone has the same stories."
      }
    ],
    readMoreLink: {
      ref: "https://www.ibm.com/blockchain/what-is-blockchain",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Digital system recording transactions in multiple places simultaneously"
  },
  {
    slug: "chaosEngineering",
    title: "Chaos Engineering",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Chaos Engineering is the practice of experimenting on a system to build confidence in its ability to withstand turbulent conditions. It's like testing a bridge by simulating strong winds."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine Chaos Engineering as stress-testing your structures to ensure they can handle unexpected events."
      }
    ],
    readMoreLink: {
      ref: "https://principlesofchaos.org/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Practice of testing systems to withstand turbulent conditions"
  },
  {
    slug: "reactiveProgramming",
    title: "Reactive Programming",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Reactive Programming is a way to handle data streams and changes in real time. It's like making sure your app can react instantly to user inputs, like a game that updates immediately when you press a button."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine Reactive Programming as being able to respond quickly to events, just like a reflex."
      }
    ],
    readMoreLink: {
      ref: "https://www.reactivemanifesto.org/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Handling data streams and changes in real time"
  },
  {
    slug: "dataSharding",
    title: "Data Sharding",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Data Sharding splits a large database into smaller, faster, more manageable parts. It's like cutting a big pizza into slices so everyone can have a piece."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine data sharding as dividing your work among friends to get it done faster."
      }
    ],
    readMoreLink: {
      ref: "https://www.mongodb.com/basics/sharding",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Splitting a database into smaller, faster parts"
  },
  {
    slug: "apiGateway",
    title: "API Gateway",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "An API Gateway is like a front door that handles all requests from clients, ensuring they get directed to the right services. It's like a receptionist who directs calls to the correct department."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine an API Gateway as a helpful guide that makes sure everyone gets to where they need to go."
      }
    ],
    readMoreLink: {
      ref: "https://aws.amazon.com/api-gateway/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Manages requests and directs them to the correct services"
  },
  {
    slug: "webRTC",
    title: "WebRTC (Web Real-Time Communication)",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "WebRTC allows real-time communication in web browsers without needing special plugins. It's like a video call that works instantly in your browser."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine WebRTC as a way to talk to your friends face-to-face through your browser, no extra apps needed."
      }
    ],
    readMoreLink: {
      ref: "https://webrtc.org/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Enabling real-time communication directly in web browsers"
  },
  {
    slug: "dataGovernance",
    title: "Data Governance",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Data Governance is the management of data's availability, usability, integrity, and security. It's like making sure your library's books are organized, accessible, and protected."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of Data Governance as setting rules and responsibilities for handling data properly."
      }
    ],
    readMoreLink: {
      ref: "https://www.dataversity.net/what-is-data-governance/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Management of data's availability, usability, integrity, and security"
  },
  {
    slug: "dataAnonymization",
    title: "Data Anonymization",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Data Anonymization removes personal information from data sets so that individuals can't be identified. It's like blurring faces in a photo to protect people's privacy."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine Data Anonymization as making sure no one can recognize the people in your photos."
      }
    ],
    readMoreLink: {
      ref: "https://en.wikipedia.org/wiki/Data_anonymization",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Removing personal identifiers from data to protect privacy"
  },
  {
    slug: "federatedLearning",
    title: "Federated Learning",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Federated Learning is a way to train AI models across multiple devices without sharing raw data. It's like learning from everyone's notebooks without taking them away."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine Federated Learning as combining knowledge from many sources while keeping the original notes private."
      }
    ],
    readMoreLink: {
      ref: "https://ai.googleblog.com/2017/04/federated-learning-collaborative.html",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Training AI models across multiple devices without sharing data"
  },
  {
    slug: "explainableAI",
    title: "Explainable AI (XAI)",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Explainable AI (XAI) is about making AI decisions understandable to humans. It's like having a teacher explain how they solved a math problem."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine XAI as getting a step-by-step explanation for how an AI reached its conclusion."
      }
    ],
    readMoreLink: {
      ref: "https://en.wikipedia.org/wiki/Explainable_artificial_intelligence",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Making AI decisions understandable to humans"
  },
  {
    slug: "syntheticData",
    title: "Synthetic Data",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Synthetic Data is artificially generated data that mimics real data. It's like creating a fake ID that looks real but isn't linked to a real person."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine Synthetic Data as a practice exam that helps you prepare for the real test without using real questions."
      }
    ],
    readMoreLink: {
      ref: "https://en.wikipedia.org/wiki/Synthetic_data",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Artificially generated data that mimics real data"
  },
  {
    slug: "quantumCryptography",
    title: "Quantum Cryptography",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Quantum Cryptography uses the principles of quantum mechanics to secure data. It's like using a secret code that only works with the laws of physics."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine Quantum Cryptography as an unbreakable lock that can only be opened with a special quantum key."
      }
    ],
    readMoreLink: {
      ref: "https://en.wikipedia.org/wiki/Quantum_cryptography",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Using principles of quantum mechanics for secure communication"
  },
  {
    slug: "digitalTwins",
    title: "Digital Twins",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Digital Twins are virtual replicas of physical objects or systems. It's like having a digital version of yourself that can try things out before you do."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine Digital Twins as having a virtual clone to test new ideas without any risk."
      }
    ],
    readMoreLink: {
      ref: "https://en.wikipedia.org/wiki/Digital_twin",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Virtual replicas of physical objects or systems"
  },
  {
    slug: "edgeAI",
    title: "Edge AI",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Edge AI brings artificial intelligence to devices at the edge of the network, closer to where data is collected. It's like having a smart assistant right where you need it."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine Edge AI as having a mini-brain in your device that makes decisions without waiting for instructions from a central server."
      }
    ],
    readMoreLink: {
      ref: "https://en.wikipedia.org/wiki/Edge_AI",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Bringing artificial intelligence to edge devices to process data locally"
  },
  {
    slug: "homomorphicEncryption",
    title: "Homomorphic Encryption",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Homomorphic Encryption allows computations on encrypted data without decrypting it. It's like solving a puzzle without seeing the pieces."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine Homomorphic Encryption as doing math with secret numbers that only make sense when you finish the calculation."
      }
    ],
    readMoreLink: {
      ref: "https://en.wikipedia.org/wiki/Homomorphic_encryption",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Performing computations on encrypted data without decryption"
  },
  {
    slug: "fogComputing",
    title: "Fog Computing",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Fog Computing extends cloud computing to the edge of the network, processing data closer to where it's generated. It's like having mini-clouds that work together with the big cloud."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine Fog Computing as a network of small clouds that help process information locally."
      }
    ],
    readMoreLink: {
      ref: "https://en.wikipedia.org/wiki/Fog_computing",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Extending cloud computing to the edge of an enterprise's network"
  },
  {
    slug: "virtualPrivateCloud",
    title: "Virtual Private Cloud (VPC)",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "A Virtual Private Cloud (VPC) is a private cloud space within a public cloud environment. It's like having your own private room in a large hotel."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine a VPC as a secure area in a public place where only you can go."
      }
    ],
    readMoreLink: {
      ref: "https://en.wikipedia.org/wiki/Virtual_private_cloud",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Isolated cloud resources for enhanced security within a public cloud"
  },
  {
    slug: "hybridCloud",
    title: "Hybrid Cloud",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Hybrid Cloud combines private and public clouds to provide greater flexibility. It's like having both a private garden and access to a public park."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine Hybrid Cloud as using both your own secure space and a shared area for different needs."
      }
    ],
    readMoreLink: {
      ref: "https://en.wikipedia.org/wiki/Hybrid_cloud",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Combining public and private cloud environments for flexibility"
  },
  {
    slug: "multiCloudStrategy",
    title: "Multi-Cloud Strategy",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "A Multi-Cloud Strategy uses multiple cloud services to avoid reliance on a single provider. It's like shopping at different stores to get the best deals."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine Multi-Cloud as using various suppliers to get the best products for your needs."
      }
    ],
    readMoreLink: {
      ref: "https://en.wikipedia.org/wiki/Multicloud",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Using multiple cloud computing services to mitigate single-provider risks"
  },
  {
    slug: "dataOps",
    title: "DataOps",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "DataOps is an automated, process-oriented methodology to improve the quality and reduce the cycle time of data analytics. It's like a production line for data."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine DataOps as a factory that processes data quickly and efficiently to produce valuable insights."
      }
    ],
    readMoreLink: {
      ref: "https://en.wikipedia.org/wiki/DataOps",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "An agile methodology for developing and maintaining data analytics"
  },
  {
    slug: "bioinformatics",
    title: "Bioinformatics",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Bioinformatics combines biology, computer science, and information technology to analyze biological data. It's like using computers to understand life better."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine Bioinformatics as a digital detective solving mysteries of living organisms."
      }
    ],
    readMoreLink: {
      ref: "https://en.wikipedia.org/wiki/Bioinformatics",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Using technology to understand biological data"
  },
  {
    slug: "gRPC",
    title: "gRPC",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "gRPC is a modern, high-performance framework that allows services to communicate with each other. Its primary usage is in connecting services in a microservices-style architecture."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of gRPC like a highly efficient postal service that ensures your messages are delivered quickly and correctly."
      }
    ],
    readMoreLink: {
      ref: "https://grpc.io/docs/what-is-grpc/introduction/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A high-performance framework for service communication"
  },
  {
    slug: "dependencyGraph",
    title: "Dependency Graph",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "A dependency graph is a tool that helps visualize dependencies in systems or projects, showing how different elements are interconnected."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine a dependency graph as a map that shows which city roads are connected to which, helping you plan your travel efficiently."
      }
    ],
    readMoreLink: {
      ref: "https://www.visual-paradigm.com/guide/software-development/what-is-dependency-graph/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Visualize dependencies in systems or projects"
  },
  {
    slug: "clusterComputing",
    title: "Cluster Computing",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Cluster computing involves connecting multiple computers to work as a single system, enhancing computing strength and reliability."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of cluster computing as a team of horses pulling a wagon, where the load is shared and the journey is faster."
      }
    ],
    readMoreLink: {
      ref: "https://www.techtarget.com/searchdatacenter/definition/cluster",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Connecting multiple computers to work as a single system"
  },
  {
    slug: "messageQueues",
    title: "Message Queues",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Message queues help applications communicate and process operations asynchronously, managing data exchange between different processes or services."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine a message queue as a series of post office boxes, where messages wait safely until their recipient is ready to process them."
      }
    ],
    readMoreLink: {
      ref: "https://www.ibm.com/cloud/learn/message-queues",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Manage asynchronous communication between processes"
  },
  {
    slug: "rateLimiting",
    title: "Rate Limiting",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Rate limiting controls how often a user or system can access a resource or perform an action, preventing overuse and ensuring fair usage."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of rate limiting as traffic lights on the internet, controlling the flow to prevent congestion."
      }
    ],
    readMoreLink: {
      ref: "https://www.cloudflare.com/learning/ddos/ddos-rate-limiting/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Control the frequency of resource access to prevent overuse"
  },
  {
    slug: "concurrency",
    title: "Concurrency",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Concurrency in computing allows multiple processes to run simultaneously within the same application, enhancing efficiency."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine concurrency as a kitchen where several chefs prepare different parts of a meal at the same time."
      }
    ],
    readMoreLink: {
      ref: "https://www.geeksforgeeks.org/concurrency-in-operating-system/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Run multiple processes simultaneously for efficiency"
  },
  {
    slug: "verticalScaling",
    title: "Vertical Scaling",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Vertical scaling, or scaling up, involves increasing the capacity of a single server or resource without adding more physical units."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of vertical scaling like upgrading a car's engine to increase speed and performance instead of adding more cars."
      }
    ],
    readMoreLink: {
      ref: "https://www.ibm.com/cloud/learn/scaling",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Increase the capacity of a single server"
  },
  {
    slug: "horizontalScaling",
    title: "Horizontal Scaling",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Horizontal scaling, or scaling out, involves adding more machines or resources to a pool to handle increased load."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine horizontal scaling as adding more lanes to a highway to accommodate more traffic."
      }
    ],
    readMoreLink: {
      ref: "https://www.datadoghq.com/blog/horizontal-scaling/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Add more machines to handle increased load"
  },
  {
    slug: "databaseIndexing",
    title: "Database Indexing",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Database indexing improves the speed of data retrieval operations by efficiently locating and accessing the data within a database."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of database indexing like an index in a book, helping you find information quickly without scanning every page."
      }
    ],
    readMoreLink: {
      ref: "https://www.techopedia.com/definition/2788/indexing-database",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Improve data retrieval speed in databases"
  },
  {
    slug: "dataReplication",
    title: "Data Replication",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Data replication involves copying data from one location to another to ensure consistency and support data recovery and accessibility."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of data replication like having multiple copies of a document in different locations, so if one is lost, others are still available."
      }
    ],
    readMoreLink: {
      ref: "https://www.techtarget.com/searchdatamanagement/definition/data-replication",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Copy data to ensure consistency and accessibility"
  },
  {
    slug: "acidTransactions",
    title: "ACID Transactions",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "ACID (Atomicity, Consistency, Isolation, Durability) transactions ensure that database operations are processed reliably."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of ACID transactions as a checklist that guarantees every financial transaction is processed completely and accurately."
      }
    ],
    readMoreLink: {
      ref: "https://www.ibm.com/cloud/learn/acid-properties",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Ensure reliability in database operations"
  },
  {
    slug: "eventuallyConsistentSystems",
    title: "Eventually Consistent Systems",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Eventually consistent systems are a model of consistency in distributed computing where the system eventually reaches consistency but does not guarantee immediate consistency."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of eventually consistent systems like updates to social media profiles that might not show up immediately for all users but will eventually."
      }
    ],
    readMoreLink: {
      ref: "https://www.allthingsdistributed.com/2008/12/eventually_consistent.html",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Systems that eventually reach consistency over time"
  },
  {
    slug: "memoryLeaks",
    title: "Memory Leaks",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Memory leaks occur when a computer program incorrectly manages memory allocations, resulting in reduced performance or system crashes."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of a memory leak as a bucket with a slow leak; over time, it drains without you noticing until it affects the bucket’s use."
      }
    ],
    readMoreLink: {
      ref: "https://www.pluralsight.com/blog/software-development/understanding-memory-leaks",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Issues in memory management that can cause system crashes"
  },
  {
    slug: "namespace",
    title: "Namespace",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "A namespace is a declarative region that provides a scope to the identifiers (the names of types, functions, variables, etc) inside it."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of a namespace as a way of organizing the books in a library into different sections to avoid naming conflicts and confusion."
      }
    ],
    readMoreLink: {
      ref: "https://docs.microsoft.com/en-us/cpp/cpp/namespaces-cpp",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Organize code to avoid naming conflicts"
  },
  {
    slug: "serviceDiscovery",
    title: "Service Discovery",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Service discovery is a dynamic directory that helps services find and communicate with each other in cloud environments."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of service discovery as the phonebook for services, allowing them to look up how to connect with other services dynamically."
      }
    ],
    readMoreLink: {
      ref: "https://www.consul.io/discovery.html",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Dynamic directory for services to find each other"
  },
  {
    slug: "throttling",
    title: "Throttling",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Throttling is a technique used to control the amount of traffic sent or received on a network to prevent overloading."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine throttling as a traffic light controlling the flow of cars to prevent congestion."
      }
    ],
    readMoreLink: {
      ref: "https://www.cloudflare.com/learning/bots/what-is-rate-limiting/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Control network traffic to prevent overloading"
  },
  {
    slug: "functionAsAService",
    title: "Function as a Service (FaaS)",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Function as a Service (FaaS) is a cloud computing service that allows you to execute code in response to events without the complexity of building and maintaining the infrastructure typically required for developing and launching an app."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of FaaS like a magic button that only activates and uses resources when you need it, without the hassle of owning the machinery."
      }
    ],
    readMoreLink: {
      ref: "https://aws.amazon.com/lambda/faas/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Execute code without managing infrastructure"
  },
  {
    slug: "dataLakehouse",
    title: "Data Lakehouse",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "A Data Lakehouse combines the features of data lakes and data warehouses to provide structured and unstructured data storage and analytics capabilities."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of a Data Lakehouse as a hybrid home that offers both the vast storage space of a warehouse and the relaxing, fluid environment of a lake."
      }
    ],
    readMoreLink: {
      ref: "https://databricks.com/glossary/data-lakehouse",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Combine data lakes and warehouses for comprehensive storage"
  },
  {
    slug: "eventLoop",
    title: "Event Loop",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "The event loop is a programming construct that waits for and dispatches events or messages in a program."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine the event loop as a postal worker sorting and delivering mail as it arrives, ensuring that each message reaches its destination promptly."
      }
    ],
    readMoreLink: {
      ref: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Programming construct that waits for and dispatches events"
  },
  {
    slug: "tokenization",
    title: "Tokenization",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Tokenization is the process of converting sensitive data into non-sensitive data called tokens, which can be used in a database or internal system without exposing sensitive information."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of tokenization as swapping out your real, valuable diamonds for costume jewelry when traveling to secure the real assets."
      }
    ],
    readMoreLink: {
      ref: "https://www.pcisecuritystandards.org/pdfs/pci_fs_data_tokenization.pdf",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Convert sensitive data into non-sensitive tokens"
  },
  {
    slug: "serverSentEvents",
    title: "Server Sent Events (SSE)",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Server Sent Events (SSE) is a standard allowing a web page to get updates from a server automatically."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine SSE as a news ticker on a website, continuously updating with the latest news without you needing to refresh the page."
      }
    ],
    readMoreLink: {
      ref: "https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Automatically update web pages with server data"
  },
  {
    slug: "messageBrokers",
    title: "Message Brokers",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Message brokers are intermediaries that manage communication and data exchange between different software applications."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of message brokers as post offices, ensuring that messages are delivered from one application to another without them needing to communicate directly."
      }
    ],
    readMoreLink: {
      ref: "https://www.rabbitmq.com/tutorials/tutorial-one-python.html",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Intermediaries that manage communication between apps"
  },
  {
    slug: "cacheInvalidation",
    title: "Cache Invalidation",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Cache invalidation is the process of removing outdated data from cache so that fresh data can be loaded the next time it is needed."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of cache invalidation like cleaning out your fridge; you need to remove old food to make room for fresh groceries."
      }
    ],
    readMoreLink: {
      ref: "https://www.cloudflare.com/learning/cdn/what-is-caching/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Remove outdated data to make room for fresh information"
  },
  {
    slug: "immutableDataStructures",
    title: "Immutable Data Structures",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Immutable data structures are data structures that cannot be modified after they are created."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine immutable data structures as a written contract; once it's signed, it cannot be changed, only replaced with a new version."
      }
    ],
    readMoreLink: {
      ref: "https://immutable-js.github.io/immutable-js/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Data structures that cannot be modified after creation"
  },
  {
    slug: "dataDeduplication",
    title: "Data Deduplication",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Data deduplication is a technique used to eliminate redundant copies of data, increasing storage efficiency."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of data deduplication as decluttering your digital storage by removing unnecessary duplicates of your files."
      }
    ],
    readMoreLink: {
      ref: "https://searchdatabackup.techtarget.com/definition/data-deduplication",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Eliminate redundant data to increase storage efficiency"
  },
  {
    slug: "statefulVsStatelessSystems",
    title: "Stateful vs Stateless Systems",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "In stateful systems, the server stores information about the client's session. Stateless systems do not store this data, treating each request as independent."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine stateful systems as having a memory of past interactions, whereas stateless systems have no recollection of previous encounters."
      }
    ],
    readMoreLink: {
      ref: "https://www.cloudflare.com/learning/serverless/glossary/stateful-vs-stateless/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Compare systems that maintain state with those that don't"
  },
  {
    slug: "zeroDowntimeDeployment",
    title: "Zero Downtime Deployment",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Zero downtime deployment refers to the process of updating software without causing any service disruption or downtime."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of it as renovating a bridge while keeping it open to traffic."
      }
    ],
    readMoreLink: {
      ref: "https://www.digitalocean.com/community/tutorials/what-is-zero-downtime-deployment",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Update software without causing service disruption"
  },
  {
    slug: "dataPartitioning",
    title: "Data Partitioning",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Data partitioning involves dividing a database into distinct, independent parts to improve manageability, performance, and availability."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine data partitioning as organizing a library into separate rooms, each holding different genres of books."
      }
    ],
    readMoreLink: {
      ref: "https://docs.microsoft.com/en-us/sql/relational-databases/partitions/partitioned-tables-and-indexes?view=sql-server-ver15",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Divide a database into distinct, independent parts"
  },
  {
    slug: "featureBranching",
    title: "Feature Branching",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Feature branching is a version control strategy where developers create a branch for each new feature, isolating development and making integration easier."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of feature branching as setting up individual workstations for each project in a workshop."
      }
    ],
    readMoreLink: {
      ref: "https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Isolate development in branches for easier integration"
  },
  {
    slug: "deadlock",
    title: "Deadlock",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Deadlock is a situation in computing where two or more processes are each waiting for the other to release a resource, causing all of them to remain blocked."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine deadlock as a stand-off in a narrow hallway where two people block each other's way and neither can move forward until one steps aside."
      }
    ],
    readMoreLink: {
      ref: "https://www.geeksforgeeks.org/deadlock-in-operating-system/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A stand-off where processes block each other's progress"
  },
  {
    slug: "microBatching",
    title: "Micro-batching",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Micro-batching is a processing technique where small groups of data are collected and processed together in short intervals."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of micro-batching as making mini-meals throughout the day instead of three large ones, optimizing energy levels and efficiency."
      }
    ],
    readMoreLink: {
      ref: "https://spark.apache.org/docs/latest/streaming-programming-guide.html#window-operations",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Process small groups of data in short intervals"
  },
  {
    slug: "domainDrivenDesign",
    title: "Domain-Driven Design",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Domain-Driven Design is an approach to software development that focuses on complex needs by connecting the implementation to an evolving model of the core business concepts."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of Domain-Driven Design as building a software model that mirrors real-life business scenarios, helping to solve actual problems effectively."
      }
    ],
    readMoreLink: {
      ref: "https://martinfowler.com/bliki/DomainDrivenDesign.html",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Software development approach focused on core business concepts"
  },
  {
    slug: "apiVersioning",
    title: "API Versioning",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "API Versioning is the process of assigning version numbers to different stages of API development to manage changes and ensure backward compatibility."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine API versioning as a way of keeping a diary of changes to a recipe, allowing you to refer back to any version at any time."
      }
    ],
    readMoreLink: {
      ref: "https://www.mulesoft.com/resources/api/api-versioning-guide",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Manage API changes by assigning version numbers"
  },
  {
    slug: "distributedFileSystem",
    title: "Distributed File System (DFS)",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "A Distributed File System is a network file system where data is stored across multiple servers but appears to the user as one single file system."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of a DFS as a public library system with multiple branches where books are spread out but accessible from any location."
      }
    ],
    readMoreLink: {
      ref: "https://www.ibm.com/docs/en/zos/2.1.0?topic=concepts-distributed-file-system",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "A network file system that spans multiple servers"
  },
  {
    slug: "statefulWidget",
    title: "Stateful Widget",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "A Stateful Widget in UI programming is a component that maintains state data across user sessions and redraws itself when the data changes."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of a stateful widget as a scorekeeper in a game, constantly updating the score based on the game's progress."
      }
    ],
    readMoreLink: {
      ref: "https://flutter.dev/docs/development/ui/widgets-intro",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "UI component that maintains state across sessions"
  },
  {
    slug: "serverlessFunctions",
    title: "Serverless Functions",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Serverless functions are pieces of code that are executed by a cloud provider without requiring the developer to manage a server or runtime environment."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine serverless functions as a catering service that delivers food directly to your event, without you needing to cook or clean."
      }
    ],
    readMoreLink: {
      ref: "https://aws.amazon.com/lambda/serverless-architectures-learn-more/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Execute code without the need to manage servers"
  },
  {
    slug: "edgeServices",
    title: "Edge Services",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Edge services are technologies that provide content, computing, and security to user devices at the edge of the network, closer to the user."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of edge services as local branches of a bank, offering faster and more personalized services than the main headquarters."
      }
    ],
    readMoreLink: {
      ref: "https://www.cloudflare.com/learning/edge/what-is-edge-computing/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Technologies providing services closer to the user"
  },
  {
    slug: "darkLaunch",
    title: "Dark Launch",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Dark launching is a technique where new features are released to a subset of users under real conditions without their knowledge."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of a dark launch as a soft opening for a restaurant, where new dishes are tested discreetly before the official menu launch."
      }
    ],
    readMoreLink: {
      ref: "https://launchdarkly.com/blog/guide-to-dark-launching/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Release features to a subset of users without their knowledge"
  },
  {
    slug: "cloudSecurity",
    title: "Cloud Security",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Cloud security involves the procedures and technology that secure cloud computing environments against both external and internal cybersecurity threats."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of cloud security as the security measures at an airport, ensuring the safety of passengers and the integrity of flights."
      }
    ],
    readMoreLink: {
      ref: "https://www.cisco.com/c/en/us/solutions/enterprise-networks/cloud-security/index.html",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Procedures and technology to secure cloud environments"
  },
  {
    slug: "scalability",
    title: "Scalability",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Scalability is the capability of a system, network, or process to handle a growing amount of work, or its potential to accommodate growth."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of scalability as the ability of a bridge to handle more traffic as the city grows."
      }
    ],
    readMoreLink: {
      ref: "https://azure.microsoft.com/en-us/overview/what-is-scalability/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Capability of a system to handle growth"
  },
  {
    slug: "eventStreamProcessing",
    title: "Event Stream Processing",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Event Stream Processing involves analyzing and processing a continuous flow of events in real-time to detect patterns, trends, or anomalies."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine event stream processing as monitoring a live news feed and immediately reacting to any breaking stories."
      }
    ],
    readMoreLink: {
      ref: "https://www.confluent.io/event-stream-processing/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Analyze and process continuous streams of events"
  },
  {
    slug: "multiTenancy",
    title: "Multi-Tenancy",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Multi-tenancy is a software architecture where a single instance of software serves multiple customers or tenants, keeping their data separate and secure."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of multi-tenancy as an apartment building where each tenant has their own secure unit within the same structure."
      }
    ],
    readMoreLink: {
      ref: "https://www.redhat.com/en/topics/cloud-computing/what-is-multi-tenancy",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Single instance of software serves multiple customers"
  },
  {
    slug: "dataLakesVsDataWarehouses",
    title: "Data Lakes vs Data Warehouses",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Data Lakes store raw data in its native format, while Data Warehouses store structured data optimized for query and analysis."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine data lakes as vast, unfiltered collections of data and data warehouses as well-organized libraries ready for study."
      }
    ],
    readMoreLink: {
      ref: "https://aws.amazon.com/big-data/datalakes-and-analytics/data-lake-vs-data-warehouse/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Unorganized vs Organized"
  },
  {
    slug: "softwareContainers",
    title: "Software Containers",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Software containers package an application and its dependencies into a standardized unit for development, shipment, and deployment."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of containers as portable lunchboxes that hold everything needed for a meal, no matter where you eat it."
      }
    ],
    readMoreLink: {
      ref: "https://www.docker.com/resources/what-container/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Package an application and its dependencies into a unit"
  },
  {
    slug: "cloudOrchestration",
    title: "Cloud Orchestration",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Cloud Orchestration is the automated arrangement, coordination, and management of complex cloud services and processes."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine cloud orchestration as a conductor directing an orchestra, ensuring each service plays its part in harmony."
      }
    ],
    readMoreLink: {
      ref: "https://www.vmware.com/topics/glossary/content/cloud-orchestration",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Automated arrangement and coordination of cloud services"
  },
  {
    slug: "networkSlicing",
    title: "Network Slicing",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Network Slicing allows multiple virtual networks to be created on top of a shared physical infrastructure, each tailored for specific use cases."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of network slicing as dividing a highway into dedicated lanes for different types of vehicles."
      }
    ],
    readMoreLink: {
      ref: "https://www.ericsson.com/en/5g/numerology/network-slicing",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Create multiple virtual networks on shared infrastructure"
  },
  {
    slug: "IoTEdgeComputing",
    title: "IoT Edge Computing",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "IoT Edge Computing processes data at or near the location where it is generated in the Internet of Things, reducing latency and bandwidth use."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine IoT Edge Computing as a smart home assistant making decisions locally rather than waiting for cloud instructions."
      }
    ],
    readMoreLink: {
      ref: "https://www.intel.com/content/www/us/en/internet-of-things/solutions/what-is-edge-computing.html",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Process data near its source in IoT devices"
  },
  {
    slug: "dataLakesAndWarehousesIntegration",
    title: "Data Lakes and Warehouses Integration",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Integrating Data Lakes and Data Warehouses involves combining raw and structured data storage solutions for comprehensive data management."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of this integration as blending an unorganized library with a curated archive, offering both raw data and refined insights."
      }
    ],
    readMoreLink: {
      ref: "https://www.dataversity.net/integrating-data-lakes-data-warehouses/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Combine raw and structured data storage for better management"
  },
  {
    slug: "machineLearningOperations",
    title: "Machine Learning Operations (MLOps)",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "MLOps is the practice of applying DevOps principles to machine learning processes to streamline model development and deployment."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine MLOps as a production line where AI models are continuously improved and deployed, just like software applications."
      }
    ],
    readMoreLink: {
      ref: "https://mlops.community/what-is-mlops/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "Streamline machine learning processes using DevOps principles"
  },
  {
    slug: "GDPR",
    title: "GDPR",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "The General Data Protection Regulation (GDPR) is a comprehensive data protection law in the European Union designed to enhance individuals' control over their personal information. It sets strict guidelines on how companies collect, store, and manage personal data."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://d2z0k1elb7rxgj.cloudfront.net/uploads/2019/12/gdpr-guidelines-1024x531.png",
        alt: "GDPR Guidelines"
      }
    ],
    readMoreLink: {
      ref: "https://gdpr.eu/what-is-gdpr/",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "General Data Protection Regulation"
  },
  {
    slug: "symmetricCryptography",
    title: "Symmetric Cryptography",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "In cryptography, a symmetric key is like a shared password that both encrypts and decrypts data. This means the same key locks and unlocks the information, making it crucial that only trusted parties have access to it."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Imagine you and a friend have the same key. You use it to lock (encrypt) a message, and your friend uses the same key to unlock (decrypt) it. The catch? You both need to keep that key safe and secret."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://upload.wikimedia.org/wikipedia/commons/6/61/Simple_symmetric_encryption.png",
        alt: "Symmertic-key image"
      }
    ],
    readMoreLink: {
      ref: "https://simple.wikipedia.org/wiki/Symmetric-key_algorithm",
      text: readMoreText
    },
    keywords: [],
    shortDesc: "algorithms for cryptography that use the same cryptographic keys for both the encryption of plaintext."
  },
  {
    slug: "AsymmetricCryptography",
    title: "Asymmetric Cryptography",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Asymmetric keys are the foundation of Public Key Infrastructure (PKI) a cryptographic scheme requiring two different keys, one to lock or encrypt the plaintext, and one to unlock or decrypt the cyphertext. Neither key will do both functions. One key is published (public key) and the other is kept private (private key). If the lock/encryption key is the one published, the system enables private communication from the public to the unlocking key's owner. If the unlock/decryption key is the one published, then the system serves as a signature verifier of documents locked by the owner of the private key. This system also is called asymmetric key cryptography."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Public_key_encryption.svg/800px-Public_key_encryption.svg.png",
        alt: "Symmertic-key image"
      }
    ],
    readMoreLink: {
      ref: "https://en.wikipedia.org/wiki/Public-key_cryptography",
      text: readMoreText
    },
    keywords: ["security"],
    shortDesc: "cryptographic scheme requiring two different keys, one for encryption and the other for decryption."
  },
  {
    slug: "iteration",
    title: "Iteration",
    modalContent: [
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Iteration is the process of repeating a set of operations or instructions in software development, refining the outcome with each cycle."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Think of iteration as a loop where each pass brings you closer to the perfect solution, whether it's fine-tuning code or improving a machine learning model."
      }
    ],
    readMoreLink: {
      ref: "https://goodspeed.studio/glossary/what-is-iteration-iteration-explained",
      text: readMoreText
    },
    keywords: ["algorithm"],
    shortDesc: "The process of repeating a set of operations or instructions."
  }
]


export { cards, MODAL_CONTENT_TYPES }
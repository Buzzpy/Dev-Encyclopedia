/* Sample Structure of a JS item
 nameOfTerm: `
    <h2 id="modal-heading">Title (Eg: Monolith)</h2>
    
    <p class="modal-paragraph">
      Description, formal and professional
    </p>
    <p class="modal-paragraph">
      Use a simple, real-life example, even a 15-year-old may understand
    </p>
    
    <img  src="a-desscriptive-image-link.png">
    <a href="a-link-to-an-article-on-the-topic-mentioned-for-beginners" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `
*/

const descriptions = {
    codeSmell: `
    <h2 id="modal-heading">Code Smell</h2>
    
    <p class="modal-paragraph">
      A code smell is a sign in the code that something might be wrong. It doesn't mean the code is broken, but it suggests that it might be improved or fixed.
    </p>
    <p class="modal-paragraph">
      Think of it like noticing a weird smell in your house. It doesn't mean there's definitely a fire, but it's worth checking out.
    </p>
    
    <img  src="https://miro.medium.com/v2/resize:fit:1400/1*ufqp4eDLabgkKTxqi168yA.png" alt="Code Smell image">
    <a href="https://www.sonarsource.com/learn/code-smells/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    serverlessComputing: `
    <h2 id="modal-heading">Serverless Computing</h2>
    
    <p class="modal-paragraph">
      Serverless computing is a cloud computing model where the cloud provider runs the server, and dynamically manages the allocation of machine resources. You don't have to worry about managing servers; you just focus on your code.
    </p>
    <p class="modal-paragraph">
      It's like renting a car instead of owning one. You get to use it when you need it without worrying about maintenance.
    </p>
    
    <img  src="https://www.fortinet.com/content/dam/fortinet/images/cyberglossary/serverless-computing.png" alt="Serverless Computing image">
    <a href="https://cloud.google.com/discover/what-is-serverless-computing" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    webFlow: `
    <h2 id="modal-heading">Web Flow</h2>
    
    <p class="modal-paragraph">
      Web flow refers to the sequence of steps or pages a user goes through on a website to complete a task. It's like a map that shows how users navigate your site.
    </p>
    <p class="modal-paragraph">
      Think of it like the steps you take when you follow a recipe to bake a cake.
    </p>
    
   
  `,

    webHooks: `
    <h2 id="modal-heading">Web Hooks</h2>
    
    <p class="modal-paragraph">
      Web hooks are automated messages sent from one app to another when something happens. They let different applications communicate in real time.
    </p>
    <p class="modal-paragraph">
      It's like getting a text alert when your favorite show is on TV.
    </p>
    
    <img  src="https://miro.medium.com/v2/resize:fit:1200/1*D0JykQxrL0IpYCZ6LH0CiA.png" alt="Web Hooks image">
    <a href="https://zapier.com/blog/what-are-webhooks/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    llms: `
    <h2 id="modal-heading">LLMs</h2>
    
    <p class="modal-paragraph">
      LLMs (Large Language Models) are advanced AI systems that can understand, generate, and interact with human language. They are trained on vast amounts of text data to perform a variety of language-related tasks.
    </p>
    <p class="modal-paragraph">
      Imagine a robot that has read all the books in the library and can talk about any topic.
    </p>
    
    <img  src="https://f5b623aa.rocketcdn.me/wp-content/uploads/2023/06/page-4.jpg" alt="LLMs image">
    <a href="https://aws.amazon.com/what-is/large-language-model/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    openSource: `
    <h2 id="modal-heading">Open Source</h2>
    
    <p class="modal-paragraph">
      Open source software is software with source code that anyone can inspect, modify, and enhance. It promotes collaboration and sharing among developers.
    </p>
    <p class="modal-paragraph">
      Think of it like a recipe that everyone can see, change, and improve.
    </p>
    
    <a href="https://opensource.com/resources/what-open-source" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    webScraping: `
    <h2 id="modal-heading">Web Scraping</h2>
    
    <p class="modal-paragraph">
      Web scraping is the process of using software to automatically collect data from websites. It helps gather large amounts of information quickly.
    </p>
    <p class="modal-paragraph">
      It's like using a vacuum to clean up a room instead of picking up every piece of dust by hand.
    </p>
    
    <img  src="https://d1pnnwteuly8z3.cloudfront.net/images/4d5bf260-c3d0-4f21-b718-8ede8d4ca716/febf9de6-8a5a-4055-b274-e685485496f5.jpeg" alt="Web Scraping image">
    <a href="https://www.geeksforgeeks.org/what-is-web-scraping-and-how-to-use-it/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    frontEnd: `
    <h2 id="modal-heading">Front End</h2>
    
    <p class="modal-paragraph">
      Front end development involves creating the parts of a website that users interact with. This includes everything you see and click on a website.
    </p>
    <p class="modal-paragraph">
      Think of it like decorating a cake. It's all about making it look good and making sure it’s easy to enjoy.
    </p>
    
    <img  src="https://www.extwebtech.com/wp-content/uploads/2023/03/frontend-vs-bancend.webp" alt="Front End image">
    <a href="https://flatironschool.com/blog/front-end-vs-back-end-development/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    fullStack: `
    <h2 id="modal-heading">Full Stack</h2>
    
    <p class="modal-paragraph">
      Full stack development means working on both the front end (what users see) and the back end (the server and database) of a website or application. Full stack developers can build entire applications from start to finish.
    </p>
    <p class="modal-paragraph">
      It's like being able to bake a cake and decorate it too!
    </p>
    
    <img  src="https://miro.medium.com/v2/resize:fit:1400/0*cl7fc6pt1MHjIF4K.png" alt="Full Stack image">
    <a href="https://aws.amazon.com/what-is/full-stack-development/#:~:text=Full%20stack%20development%20is%20the,user%20interactions%20with%20the%20application." id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    functions: `
    <h2 id="modal-heading">Functions</h2>
    
    <p class="modal-paragraph">
      Functions are blocks of code that perform specific tasks. You can call a function whenever you need to perform that task, which helps keep your code organized and reusable.
    </p>
    <p class="modal-paragraph">
      It's like having a set of instructions for making a sandwich. Anytime you want a sandwich, you just follow the steps.
    </p>
    
    <img  src="https://res.cloudinary.com/practicaldev/image/fetch/s--iCkOfD0L--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/1024/1%2A709ugF12LLkYxvb839YNlg.png" alt="Functions image">
    <a href="https://www.w3schools.com/js/js_functions.asp" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    arguments: `
    <h2 id="modal-heading">Arguments</h2>
    
    <p class="modal-paragraph">
      Arguments are the values you pass to a function so it can perform its task. They are like the ingredients you give to a recipe.
    </p>
    <p class="modal-paragraph">
      Think of it like telling a function to make a sandwich and giving it bread, peanut butter, and jelly.
    </p>
    
    <img  src="https://i.sstatic.net/9lg1H.png" alt="Arguments image">
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#parameters" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    dictionary: `
    <h2 id="modal-heading">Dictionary</h2>
    
    <p class="modal-paragraph">
      A dictionary in programming is a collection of key-value pairs. It's like a real dictionary where you look up a word (key) to find its definition (value).
    </p>
    <p class="modal-paragraph">
      Imagine having a box with labels (keys) and items (values) inside. You can quickly find what you need by looking at the labels.
    </p>
    
    <img  src="https://cdn-wordpress-info.futurelearn.com/info/wp-content/uploads/FL-Prog103-2.3-Dictionary-768x317.png" alt="Dictionary image">
    <a href="https://www.w3schools.com/python/python_dictionaries.asp" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    tuple: `
    <h2 id="modal-heading">Tuple</h2>
    
    <p class="modal-paragraph">
      A tuple is a collection of items that are ordered and unchangeable. It's like a list, but once you create it, you can't change it.
    </p>
    <p class="modal-paragraph">
      Think of it like a grocery list written in pen. You can't erase or change the items once they're written down.
    </p>
  
    <a href="https://www.w3schools.com/python/python_tuples.asp" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    list: `
    <h2 id="modal-heading">List</h2>
    
    <p class="modal-paragraph">
      A list is a collection of items that are ordered and changeable. You can add, remove, or change items in a list.
    </p>
    <p class="modal-paragraph">
      Imagine a grocery list written in pencil. You can add new items, erase old ones, or change them as you need.
    </p>
 
    <a href="https://www.w3schools.com/python/python_lists.asp" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    boolean: `
    <h2 id="modal-heading">Boolean</h2>
    
    <p class="modal-paragraph">
      A boolean is a data type with two possible values: true or false. It's like a light switch that can only be on or off.
    </p>
    <p class="modal-paragraph">
      Think of it like asking a yes or no question. The answer can only be yes (true) or no (false).
    </p>
    
    <a href="https://www.w3schools.com/js/js_booleans.asp" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    string: `
    <h2 id="modal-heading">String</h2>
    
    <p class="modal-paragraph">
      A string is a sequence of characters, like letters, numbers, and symbols, used to represent text in programming.
    </p>
    <p class="modal-paragraph">
      Imagine a string as a necklace made of different beads. Each bead is a character in the string.
    </p>
    
    <a href="https://www.w3schools.com/python/python_strings.asp" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    floats: `
    <h2 id="modal-heading">Floats</h2>
    
    <p class="modal-paragraph">
      Floats are numbers that have a decimal point. They can represent fractions and very precise values.
    </p>
    <p class="modal-paragraph">
      Think of a float as the way you write money, like $3.50 or $7.99.
    </p>
    <a href="https://www.w3schools.com/python/python_datatypes.asp" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    double: `
    <h2 id="modal-heading">Double</h2>
    
    <p class="modal-paragraph">
      A double is similar to a float, but it can store much larger and more precise decimal numbers.
    </p>
    <p class="modal-paragraph">
      Imagine a double as a super accurate float, used when you need extra precision, like in scientific calculations.
    </p>
    <a href="https://www.w3schools.com/java/java_data_types.asp" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    dataTypes: `
    <h2 id="modal-heading">Data Types</h2>
    
    <p class="modal-paragraph">
      Data types define the kind of data a variable can hold. Common data types include integers (whole numbers), floats (decimal numbers), strings (text), and booleans (true or false).
    </p>
    <p class="modal-paragraph">
      Think of data types like different kinds of containers: a jar for jam, a box for toys, or a bottle for water.
    </p>
    <a href="https://www.w3schools.com/python/python_datatypes.asp" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    threads: `
    <h2 id="modal-heading">Threads</h2>
    
    <p class="modal-paragraph">
      Threads are like mini-programs running inside a larger program. They allow different parts of the program to run simultaneously.
    </p>
    <p class="modal-paragraph">
      Imagine a restaurant kitchen where multiple chefs (threads) are preparing different dishes at the same time.
    </p>
    
    <img  src="https://cdn.ttgtmedia.com/rms/onlineimages/how_threads_make_process-f_mobile.png" alt="Threads image">
    <a href="https://www.techtarget.com/whatis/definition/thread/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    classes: `
    <h2 id="modal-heading">Classes</h2>
    
    <p class="modal-paragraph">
      Classes are blueprints for creating objects in programming. They define the properties and behaviors that the objects created from the class will have.
    </p>
    <p class="modal-paragraph">
      Think of a class as a cookie cutter and the objects as the cookies made from it.
    </p>
    
    <img  src="https://nonlineardata.com/wp-content/uploads/2020/11/Car_Class.png" alt="Classes image">
    <a href="https://brilliant.org/wiki/classes-oop/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    objects: `
    <h2 id="modal-heading">Objects</h2>
    
    <p class="modal-paragraph">
      Objects are instances of classes. They have the properties and behaviors defined by their class.
    </p>
    <p class="modal-paragraph">
      Imagine an object as a specific cookie made from a cookie cutter. It has the same shape but can be decorated differently.
    </p>
 
    <a href="https://www.geeksforgeeks.org/what-are-objects-in-programming/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    inheritance: `
    <h2 id="modal-heading">Inheritance</h2>
    
    <p class="modal-paragraph">
      Inheritance is a way to create a new class using details from an existing class. The new class inherits the properties and behaviors of the existing class.
    </p>
    <p class="modal-paragraph">
      Think of inheritance like getting traits from your parents, like eye color or hair color.
    </p>
    
    <img  src="https://cdn-images-1.medium.com/v2/resize:fit:1080/1*gvHEf4lT2m_dHyH6c0UC1Q.png" alt="Inheritance image">
    <a href="https://www.enjoyalgorithms.com/blog/inheritance-in-java" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    syntax: `
    <h2 id="modal-heading">Syntax</h2>
    
    <p class="modal-paragraph">
      Syntax in programming refers to the rules that define the structure of a program. It’s like grammar in a language, ensuring that code is written correctly so the computer can understand it.
    </p>
    <p class="modal-paragraph">
      Imagine syntax as the rules of writing sentences in English, like using proper punctuation and word order.
    </p>
    
    <a href="https://woz-u.com/blog/what-is-syntax-in-computer-programming/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    ide: `
    <h2 id="modal-heading">IDE (Integrated Development Environment)</h2>
    
    <p class="modal-paragraph">
      An IDE is a software application that provides tools to help programmers write, test, and debug their code. It’s like a supercharged text editor with features like syntax highlighting, code completion, and debugging.
    </p>
    <p class="modal-paragraph">
      Think of an IDE as a toolkit for coding, with everything you need in one place.
    </p>
    <a href="https://aws.amazon.com/what-is/ide/#:~:text=An%20integrated%20development%20environment%20(IDE,easy%2Dto%2Duse%20application." id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    debugger: `
    <h2 id="modal-heading">Debugger</h2>
    
    <p class="modal-paragraph">
      A debugger is a tool that helps programmers find and fix bugs (errors) in their code. It allows you to run your code step-by-step to see what’s happening at each stage.
    </p>
    <p class="modal-paragraph">
      Imagine a debugger like a magnifying glass that helps you see exactly where things go wrong in a program.
    </p>
    
    <img  src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*554AE0054vtiRNfcqlOXLw.png" alt="Debugger image">
    <a href="https://medium.com/@dwivedi.ankit21/the-debugger-a-behind-the-scenes-look-at-how-it-works-983a65883e97" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    deployment: `
    <h2 id="modal-heading">Deployment</h2>
    
    <p class="modal-paragraph">
      Deployment is the process of making an application available for use. This involves moving the code from development to a live environment where users can access it.
    </p>
    <p class="modal-paragraph">
      Think of deployment like launching a new video game, making it available for everyone to play.
    </p>
    
    <a href="https://www.ibm.com/docs/en/zos/2.4.0?topic=task-deploying-software" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    continuousDeployment: `
    <h2 id="modal-heading">Continuous Deployment</h2>
    
    <p class="modal-paragraph">
      Continuous Deployment is a software release process that automatically deploys every code change that passes automated tests to production. It ensures that the software is always up-to-date and can be quickly updated.
    </p>
    <p class="modal-paragraph">
      Imagine Continuous Deployment as a bakery where fresh bread is baked and put on shelves as soon as it's ready, ensuring customers always get the freshest products.
    </p>
    
    <a href="https://www.atlassian.com/continuous-delivery/software-testing/continuous-deployment" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    deploymentPipeline: `
    <h2 id="modal-heading">Deployment Pipeline</h2>
    
    <p class="modal-paragraph">
      A deployment pipeline is a set of automated processes that ensure software changes go through various stages like building, testing, and deployment. It helps deliver high-quality software quickly and consistently.
    </p>
    <p class="modal-paragraph">
      Think of a deployment pipeline like an assembly line in a factory, where each step ensures the product is perfect before it reaches the customer.
    </p>
    
    <img  src="https://example.com/deployment-pipeline-image.png" alt="Deployment Pipeline image">
    <a href="https://www.pagerduty.com/resources/learn/what-is-a-deployment-pipeline/#:~:text=In%20software%20development%2C%20a%20deployment,%2C%20building%2C%20and%20deploying%20code." id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    dataValidation: `
    <h2 id="modal-heading">Data Validation</h2>
    
    <p class="modal-paragraph">
      Data validation is the process of checking data for accuracy and completeness before using it. This ensures that the data is correct and reliable.
    </p>
    <p class="modal-paragraph">
      Imagine data validation like checking your homework for mistakes before submitting it to your teacher.
    </p>
    
    <img  src="https://media.geeksforgeeks.org/wp-content/uploads/20240709183957/Verification-vs-validation.png" alt="Data Validation image">
    <a href="https://www.tibco.com/glossary/what-is-data-validation#:~:text=Data%20validation%20is%20the%20process,validation%20to%20ensure%20accurate%20results." id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    dataSerialization: `
    <h2 id="modal-heading">Data Serialization</h2>
    
    <p class="modal-paragraph">
      Data serialization is the process of converting data into a format that can be easily stored or transmitted and then reconstructed later. Common formats include JSON and XML.
    </p>
    <p class="modal-paragraph">
      Think of data serialization like packing a suitcase for a trip, making it easy to carry and unpack later.
    </p>
    
    <img  src="https://miro.medium.com/v2/resize:fit:1018/1*QaauFe77Rsk7YeULrhUtxw.gif" alt="Data Serialization image">
    <a href="https://medium.com/@jdelamettrie/data-serialization-631a0325c38a" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    mocking: `
    <h2 id="modal-heading">Mocking</h2>
    
    <p class="modal-paragraph">
      Mocking is a technique in software testing where you create fake versions of objects or functions to test parts of your code without relying on the real ones.
    </p>
    <p class="modal-paragraph">
      Imagine mocking like practicing a play with stand-ins before the actual actors come in.
    </p>
    
    <a href="https://www.geeksforgeeks.org/software-testing-mock-testing/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    authentication: `
    <h2 id="modal-heading">Authentication</h2>
    
    <p class="modal-paragraph">
      Authentication is the process of verifying who someone is. It’s like showing your ID to prove your identity.
    </p>
    <p class="modal-paragraph">
      Think of authentication as logging into your email account using your username and password to prove it’s really you.
    </p>
    
    <img  src="https://miro.medium.com/v2/resize:fit:960/1*FhdNVsZV5cPvrBKsE0OVvw.png" alt="Authentication image">
    <a href="https://medium.com/geekculture/authentication-and-authorization-a5a2eafdde16" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    authorization: `
    <h2 id="modal-heading">Authorization</h2>
    
    <p class="modal-paragraph">
      Authorization is the process of determining what someone is allowed to do. It happens after authentication.
    </p>
    <p class="modal-paragraph">
      Think of authorization like a security guard checking if you have access to a VIP area after you’ve shown your ID.
    </p>
    
    <img  src="https://miro.medium.com/v2/resize:fit:960/1*FhdNVsZV5cPvrBKsE0OVvw.png" alt="Authorization image">
    <a href="https://medium.com/geekculture/authentication-and-authorization-a5a2eafdde16" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    prototypes: `
    <h2 id="modal-heading">Prototypes (Software Development)</h2>
    
    <p class="modal-paragraph">
      In software development, a prototype is an early sample or model of the software being developed. It helps developers understand how the final product will look and function.
    </p>
    <p class="modal-paragraph">
      Think of a prototype like a rough draft of an essay. It’s not the final version but gives a good idea of what the end result will be.
    </p>
    <a href="https://www.techtarget.com/searcherp/definition/prototype#:~:text=Prototype%2Dbased%20programming%20generates%20an,code%20and%20how%20it%20executes." id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    monolithicArchitecture: `
    <h2 id="modal-heading">Monolithic Architecture</h2>
    
    <p class="modal-paragraph">
      Monolithic architecture is a software design where all the components of the application are integrated into a single, large system.
    </p>
    <p class="modal-paragraph">
      Imagine monolithic architecture like a giant block of Legos all stuck together, where changing one part affects the entire structure.
    </p>
    
    <img  src="https://miro.medium.com/v2/resize:fit:755/1*Tiizur0VlvZlJSIgADsp4w.png" alt="Monolithic Architecture image">
    <a href="https://tech.tamara.co/monolith-architecture-5f00270f384e" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    github: `
    <h2 id="modal-heading">GitHub</h2>
    
    <p class="modal-paragraph">
      GitHub is a platform that allows developers to host, review, and manage their code. It’s a place where you can collaborate with others on software projects.
    </p>
    <p class="modal-paragraph">
      Think of GitHub like a social network for programmers where they share and improve each other’s code.
    </p>
    
    <img  src="https://miro.medium.com/v2/resize:fit:1400/1*irvoqLol7t-EPNzZN6CSnA.png" alt="GitHub image">
    <a href="https://medium.com/swlh/an-introduction-to-git-and-github-22ecb4cb1256" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    orm: `
    <h2 id="modal-heading">ORM (Object-Relational Mapping)</h2>
    
    <p class="modal-paragraph">
      ORM is a technique that allows you to interact with your database using objects in your code. It makes database operations more intuitive by representing data as objects rather than tables.
    </p>
    <p class="modal-paragraph">
      Think of ORM like a translator that helps your code speak the language of the database.
    </p>
    
    <img  src="https://media.licdn.com/dms/image/D5612AQGZjJpjEP1iEA/article-cover_image-shrink_720_1280/0/1686716645931?e=2147483647&v=beta&t=tAiEVMUjaDyUeHbCWsWd6jQb5u1DZyWomJgqow1HzWM" alt="ORM image">
    <a href="https://medium.com/@grover.vinayak0611/what-is-orm-why-to-use-it-and-brief-introduction-of-orm-frameworks-b61b16d02a3c" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    caching: `
    <h2 id="modal-heading">Caching</h2>
    
    <p class="modal-paragraph">
      Caching is a technique used to store copies of frequently accessed data in a temporary storage area, or cache, so that it can be accessed more quickly.
    </p>
    <p class="modal-paragraph">
      Think of caching like keeping your favorite snacks in a drawer so you don’t have to go to the kitchen every time you’re hungry.
    </p>
    
    <a href="https://hazelcast.com/glossary/caching/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    // ENDS HERE, 07/27
    machineLearning: `
    <h2 id="modal-heading">Machine Learning</h2>
    
    <p class="modal-paragraph">Machine learning is a type of artificial intelligence that allows software applications to become more accurate at predicting outcomes without being explicitly programmed to do so. Machine learning algorithms use historical data as input to predict new output values.</p>
    <p class="modal-paragraph">It's used in many areas such as email filtering, network security, and computer vision.</p>
    
    
    <img  src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ilep9ckl66ho6mp5v6ht.png" alt="Machine Learning image">
    <a href="https://mitsloan.mit.edu/ideas-made-to-matter/machine-learning-explained" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  
  `,
    deepLearning: `
    <h2 id="modal-heading">Deep Learning</h2>
    
    <p class="modal-paragraph">Deep learning is a subset of machine learning where artificial neural networks, algorithms inspired by the human brain, learn from large amounts of data. It's a key technology behind driverless cars, enabling them to recognize a stop sign, or to distinguish a pedestrian from a lamppost.</p>
    <p class="modal-paragraph">Deep learning is used in many applications such as voice assistants, translation services, and image recognition.</p>
    
     
    <img  src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2l6t6kevnd062opmw6ab.png" alt="Deep Learning image">
    
    <a href="https://www.ibm.com/topics/deep-learning" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    artificialIntelligence: `
    <h2 id="modal-heading">Artificial Intelligence</h2>
    
    <p class="modal-paragraph">Artificial intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. The term may also be applied to any machine that exhibits traits associated with a human mind such as learning and problem-solving.</p>
    <p class="modal-paragraph">AI is used in many areas such as robotics, autonomous vehicles, and natural language processing.</p>
    
    <img  src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/iii01cstbhic3xzt9ceu.png" alt="Artificial Intelligence image">
    
    <a href="https://www.ibm.com/topics/artificial-intelligence" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    cybersecurity: `
    <h2 id="modal-heading">Cybersecurity</h2>
    
    <p class="modal-paragraph">Cybersecurity involves protecting computer systems and networks from digital attacks, theft, and damage. It includes various practices and technologies to safeguard data and maintain privacy.</p>
    <p class="modal-paragraph">Cybersecurity is crucial for protecting sensitive information and ensuring the safe operation of systems in both personal and professional environments.</p>
    
    <img  src="https://reciprocity.com/wp-content/uploads/2022/10/resources_top-cybersecurity-threats_730x425.jpg" alt="Cybersecurity image">
    
    <a href="https://www.ibm.com/topics/cybersecurity" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    epochs: `
    <h2 id="modal-heading">Epochs</h2>
    
    <p class="modal-paragraph">In machine learning, an epoch is one complete pass through the entire training dataset. During each epoch, the model's parameters are updated to improve accuracy.</p>
    <p class="modal-paragraph">Multiple epochs are often needed for a model to learn effectively and reach high performance on the task it is trained for. However, its' crucial to determine the number of epochs carefully, as explaned in the image below.</p>
    
    <img  src="https://miro.medium.com/v2/resize:fit:860/1*GXftMdKjyaLYuAIn-nB4zA.png" alt="Epochs image">
    
    <a href="https://www.simplilearn.com/tutorials/machine-learning-tutorial/what-is-epoch-in-machine-learning" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    apis: `
    <h2 id="modal-heading">APIs</h2>
    
    <p class="modal-paragraph">An API (Application Programming Interface) is a set of rules that allows different software programs to communicate with each other. It defines how requests and responses should be formatted so that different systems can interact seamlessly.</p>
    <p class="modal-paragraph">APIs are used to integrate different services, enabling developers to build applications that interact with other software or services.</p>
     
      <p>For example, An API is like a messenger between apps and services. Imagine you are using a weather app. The app uses an API to ask a weather service for today’s weather. The weather service sends the info back through the API, and you see the weather on your app. So, an API helps different software talk to each other and share information.</p>
    
    <img  src="https://www.openlegacy.com/hs-fs/hubfs/Picture1-2.webp?width=969&height=509&name=Picture1-2.webp" alt="APIs image">
    
    <a href="https://www.postman.com/what-is-an-api/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    cloudComputing: `
    <h2 id="modal-heading">Cloud Computing</h2>
    
    <p class="modal-paragraph">Cloud computing is the delivery of computing services—such as servers, storage, databases, and software—over the internet (the cloud). It allows users to access and use these services without having to manage physical servers or infrastructure.</p>
    <p class="modal-paragraph">Cloud computing provides flexibility, scalability, and cost-efficiency for businesses and individuals. Following image shows types of cloud computing</p>
    
    
    <img  src="https://images.spiceworks.com/wp-content/uploads/2021/07/02105247/Cloud-Computing.png" alt="Cloud Computing image">
    
    <a href="https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-cloud-computing" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    dataScience: `
    <h2 id="modal-heading">Data Science</h2>
    
    <p class="modal-paragraph">Data science involves using scientific methods, processes, and systems to extract insights and knowledge from data. It combines various fields such as statistics, data analysis, and machine learning to understand and interpret complex data.</p>
    <p class="modal-paragraph">Data science helps in making informed decisions and predictions based on data analysis.</p>
    
    <img  src="https://editor.analyticsvidhya.com/uploads/73194new%202.png" alt="Data Science image from DataScientist.com">
    
    <a href="https://www.ibm.com/topics/data-science" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    quantumComputing: `
    <h2 id="modal-heading">Quantum Computing</h2>
    
    <p class="modal-paragraph">Quantum computing is an area of computing that uses principles of quantum mechanics to perform calculations. It leverages quantum bits (qubits) to process information in ways that classical computers cannot.</p>
    <p class="modal-paragraph">Quantum computing has the potential to solve complex problems more efficiently than traditional computers.</p>
    
    <img  src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/auzqrr27ccgv9ylkloed.png" alt="Quantum Computing image">
    
    <a href="https://www.explainthatstuff.com/quantum-computing.html" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    internetOfThings: `
    <h2 id="modal-heading">Internet of Things</h2>
    
    <p class="modal-paragraph">The Internet of Things (IoT) refers to the network of physical objects embedded with sensors and software that can connect and exchange data with other devices over the internet.</p>
    <p class="modal-paragraph">IoT enables smarter interactions between devices and can be used in various applications like smart homes, health monitoring, and industrial automation.</p>
    
     
    <img  src="https://www.i-scoop.eu/wp-content/uploads/2016/10/The-Internet-of-Things-from-connecting-devices-to-creating-value-large.jpg" alt="Internet of Things image">
    
    <a href="https://www.oracle.com/internet-of-things/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a> 
  `,
    blockchain: `
    <h2 id="modal-heading">Blockchain</h2>
    
    <p class="modal-paragraph">Blockchain is a digital ledger technology that records transactions across many computers in a way that ensures the security and transparency of the data.</p>
    <p class="modal-paragraph">Each transaction is recorded in a "block," and blocks are linked together in a "chain." Blockchain is used in cryptocurrencies and other applications requiring secure data storage.</p>
    
    <img  src="https://www.investopedia.com/thmb/XrimO6cL95A3j-ts3PknnOXn8EI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/dotdash_Final_Blockchain_Sep_2020-01-60f31a638c4944abbcfde92e1a408a30.jpg" alt="Blockchain image">
    
    <a href="https://builtin.com/blockchain" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    reactJS: `
    <h2 id="modal-heading">ReactJS</h2>
    
    <p class="modal-paragraph">ReactJS is a JavaScript library used for building user interfaces. It allows developers to create reusable UI components and manage the state of their applications efficiently.</p>
    <p class="modal-paragraph">ReactJS is often used for developing single-page applications (SPAs) and can be integrated with other libraries or frameworks.</p>
    
    <img  src="https://miro.medium.com/v2/resize:fit:1400/1*6l9rCElYlP9EoG0A-iXULg.png" alt="ReactJS image">
    
    <a href="https://www.freecodecamp.org/news/react-for-beginners-handbook/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    docker: `
    <h2 id="modal-heading">Docker</h2>
    
    <p class="modal-paragraph">Docker is a platform that allows developers to package applications and their dependencies into containers. Containers are lightweight, portable, and can run on any system with Docker installed.</p>
    <p class="modal-paragraph">Docker simplifies deployment and scaling of applications, ensuring consistency across different environments.</p>
    
    <img  src="https://accesto.com/blog/static/d97eced7f59a885b5ba877366cf21909/3c492/docker-explained-1.png" alt="Docker image">
    
    <a href="https://docker-curriculum.com/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    initFunction: `
    <h2 id="modal-heading">__init__ Function</h2>
    
    <p class="modal-paragraph">The __init__ function is a special method in Python that is called when an object is instantiated. It initializes the object's attributes and sets up the initial state of the object.</p>
    <p class="modal-paragraph">It is commonly used to set default values for object properties or to perform setup tasks when creating new instances of a class.</p>
    
    <img  src="https://www.boardinfinity.com/blog/content/images/2023/05/init-in-python.png" alt="__init__ Function image">
    
    <a href="https://docker-curriculum.com/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    python: `
    <h2 id="modal-heading">Python</h2>
    
    <p class="modal-paragraph">Python is a high-level programming language known for its readability and simplicity. It is widely used in web development, data science, automation, and more.</p>
    <p class="modal-paragraph">Python's syntax is designed to be easy to understand and write, making it a popular choice for beginners and experienced programmers alike.</p>
    
    <img  src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9fx9gi335wgl2pdt6sjj.png" alt="Python image">
    
    <a href="https://example.com" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    threeSigmaRule: `
    <h2 id="modal-heading">Three-Sigma Rule</h2>
    
    <p class="modal-paragraph">The Three-Sigma Rule, also known as <strong> the 68-95-99.7 rule and  </strong>  <strong>Empirical Rule </strong>, states that for a normal distribution, nearly all data points will fall within three standard deviations of the mean.</p>
    <p class="modal-paragraph">This rule helps to understand data variability and is used in various fields, including quality control and statistics.</p>
    

    <img  src="https://decodingdatascience.com/wp-content/uploads/2023/05/Screenshot-2023-05-05-101857.jpg" alt="Three-Sigma Rule image">
    
    <a href="https://www.investopedia.com/terms/t/three-sigma-limits.asp" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    recursion: `
    <h2 id="modal-heading">Recursion</h2>
    
    <p class="modal-paragraph">Recursion is a programming technique where a function calls itself in order to solve a problem. It is often used to break down complex problems into simpler sub-problems.</p>
    <p class="modal-paragraph">Recursion is useful in tasks such as tree traversal, sorting algorithms, and solving mathematical problems.</p>
    
    <img  src="https://miro.medium.com/v2/resize:fit:2000/1*QrQ5uFKIhK3jQSFYeRBIRg.png" alt="Recursion image">
    
    <a href="https://2533.medium.com/recursion-explained-with-pictures-72578d28058a" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    git: `
    <h2 id="modal-heading">Git</h2>
    
    <p class="modal-paragraph">Git is a version control system that tracks changes to files and allows multiple people to collaborate on a project. It helps manage code changes, track history, and resolve conflicts.</p>
    <p class="modal-paragraph">Git is widely used in software development to maintain code integrity and support collaborative work.</p>
    
    <a href="https://dev.to/milu_franz/git-explained-the-basics-igc" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
    
    
  `,
    versionControl: `
    <h2 id="modal-heading">Version Control</h2>
    
    <p class="modal-paragraph">Version control is a system that records changes to files over time so that you can recall specific versions later. It is essential for managing software development and tracking changes to code.</p>
    <p class="modal-paragraph">Version control helps coordinate work among multiple developers and track the history of changes. Mainly, there are two types of version control systems as "Centralized" and "Distributed" Version Control Systems, as explained in the image below.</p>
    
    <img  src="https://www.thatcompany.com/wp-content/uploads/2020/03/art3.jpg" alt="Version Control image">
    
    <a href="https://about.gitlab.com/topics/version-control/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    microservices: `
    <h2 id="modal-heading">Microservices</h2>
    
    <p class="modal-paragraph">
      Microservices is a way of designing software systems where the application is divided into small, independent services that work together. Each service performs a specific function and can be developed, deployed, and scaled independently.
    </p>
    <p class="modal-paragraph">
      Think of microservices like a team of specialists. Each specialist is very good at one thing. They work independently, but they all come together to complete a big project.
    </p>
    
    <img  src="https://d1.awsstatic.com/Developer%20Marketing/containers/monolith_1-monolith-microservices.70b547e30e30b013051d58a93a6e35e77408a2a8.png" alt="Microservices image">
    <a href="https://aws.amazon.com/microservices/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    restfulAPI: `
    <h2 id="modal-heading">RESTful API</h2>
    
    <p class="modal-paragraph">
      A RESTful API (Representational State Transfer API) is a type of API that follows a set of rules for how to create, read, update, and delete data. It uses standard HTTP methods like GET, POST, PUT, and DELETE.
    </p>
    <p class="modal-paragraph">
      Think of it as a way for different programs to talk to each other over the internet, using common language and protocols.
    </p>
    
    <img  src="    https://www.altexsoft.com/media/2021/03/rest_api_works.png" alt="GraphQL image">

    <a href="https://aws.amazon.com/what-is/restful-api/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    graphql: `
    <h2 id="modal-heading">GraphQL</h2>
    
    <p class="modal-paragraph">
      GraphQL is a query language for APIs that allows clients to request exactly the data they need. It provides a more efficient and flexible alternative to RESTful APIs.
    </p>
    <p class="modal-paragraph">
      Imagine being able to ask for specific ingredients in a recipe, rather than getting the entire cookbook.
    </p>
    
    <img  src="https://cdn.prod.website-files.com/5ff66329429d880392f6cba2/614841249e5f844b0c7550d1_REST%20vs%20GraphQL.png" alt="GraphQL image">
    <a href="https://www.solo.io/topics/graphql/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    containerization: `
    <h2 id="modal-heading">Containerization</h2>
    
    <p class="modal-paragraph">
      Containerization is a technology that packages an application and its dependencies into a "container" that can run anywhere. Containers make it easy to deploy and manage applications consistently across different environments.
    </p>
    <p class="modal-paragraph">
      Think of it like packing everything you need for a trip into a single, portable box.
    </p>  
    <a href="https://aws.amazon.com/what-is/containerization/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    kubernetes: `
    <h2 id="modal-heading">Kubernetes</h2>
    
    <p class="modal-paragraph">
      Kubernetes is an open-source platform designed to automate the deployment, scaling, and operation of containerized applications. It helps manage clusters of containers.
    </p>
    <p class="modal-paragraph">
      Think of it as the conductor of an orchestra, ensuring all the musicians (containers) play in harmony.
    </p>
    
    <img  src="https://example.com/kubernetes-image.png" alt="Kubernetes image">
    <a href="https://kubernetes.io/docs/concepts/overview/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    branching: `
    <h2 id="modal-heading">Branching</h2>
    
    <p class="modal-paragraph">
      Branching is a feature of version control systems like Git that allows developers to create separate copies of the codebase to work on different tasks without affecting the main project.
    </p>
    <p class="modal-paragraph">
      It's like having different drafts of an essay where you can make changes without messing up the original.
    </p>
    
    <img  src="https://res.cloudinary.com/snyk/image/upload/v1615821731/wordpress-sync/image1-11.png" alt="Branching image">
    <a href="https://medium.com/@jacoblogan98/understanding-git-branching-5d01f3dda541" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    merging: `
    <h2 id="modal-heading">Merging</h2>
    
    <p class="modal-paragraph">
      Merging is the process of combining changes from different branches into a single branch in version control systems. It helps integrate features and fixes back into the main codebase.
    </p>
    <p class="modal-paragraph">
      It's like combining different drafts of an essay into one final version.
    </p>
    
    <a href="https://atlassian.com/git/tutorials/using-branches/git-merge" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    pullRequests: `
    <h2 id="modal-heading">Pull Requests (PR)</h2>
    
    <p class="modal-paragraph">
      A pull request is a way to propose changes to a codebase. It allows developers to review and discuss the changes before integrating them into the main branch.
    </p>
    <p class="modal-paragraph">
      It's like asking your teacher to review and approve your essay before adding it to the class's shared document.
    </p>
    
    <a href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    agile: `
    <h2 id="modal-heading">Agile</h2>
    
    <p class="modal-paragraph">Agile is a methodology for software development that emphasizes flexibility, collaboration, and customer feedback. It focuses on delivering small, incremental improvements to a project.</p>
    <p class="modal-paragraph">Agile methodologies include frameworks such as Scrum and Kanban, which help teams adapt to changes and continuously improve their processes.</p>
    
    <img  src="https://miro.medium.com/v2/resize:fit:718/0*7te6LdDJm2DqZIHB.png" alt="Agile image">
    
    <a href="https://www.spiceworks.com/tech/devops/articles/what-is-agile-software-development/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    scrum: `
    <h2 id="modal-heading">Scrum</h2>
    
    <p class="modal-paragraph">Scrum is a framework within the Agile methodology used for managing and completing complex projects. It involves iterative development and regular feedback from stakeholders.</p>
    <p class="modal-paragraph">Scrum emphasizes teamwork, accountability, and continuous improvement through practices such as sprints, daily stand-ups, and retrospectives.</p>
    
    <img  src="https://scrumorg-website-prod.s3.amazonaws.com/drupal/inline-images/2023-09/scrum-framework-9.29.23.png" alt="Scrum image">
    
    <a href="https://www.scrum.org/resources/what-scrum-module" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    kanban: `
    <h2 id="modal-heading">Kanban</h2>
    
    <p class="modal-paragraph">Kanban is a visual workflow management method that helps teams visualize and manage work. It uses a board with columns to represent different stages of the work process.</p>
    <p class="modal-paragraph">Kanban helps teams improve efficiency by limiting work in progress and optimizing the flow of tasks through the workflow.</p>
    
    <img  src="https://media.geeksforgeeks.org/wp-content/uploads/20231107173425/Kanban-board-2.png" alt="Kanban image">
    
    <a href="https://www.atlassian.com/agile/kanban" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    sql: `
    <h2 id="modal-heading">SQL</h2>
    
    <p class="modal-paragraph">SQL (Structured Query Language) is a language used for managing and querying relational databases. It allows users to perform operations such as retrieving, inserting, updating, and deleting data.</p>
    <p class="modal-paragraph">SQL is essential for working with databases and is widely used in various applications to interact with data.</p>
    
    <img  src="https://www.spiceworks.com/wp-content/uploads/2022/06/How-Does-SQL-Work.png" alt="SQL image">
    
    <a href="https://aws.amazon.com/what-is/sql/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    nosql: `
    <h2 id="modal-heading">NoSQL</h2>
    
    <p class="modal-paragraph">NoSQL is a type of database that provides a mechanism for data storage and retrieval that is different from traditional relational databases. It is designed to handle large volumes of unstructured or semi-structured data.</p>
    <p class="modal-paragraph">NoSQL databases are often used for applications that require high scalability, performance, and flexibility in handling data.</p>
    
  
    <a href="https://radixweb.com/blog/introduction-to-continuous-deployment#Continuous" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    html: `
    <h2 id="modal-heading">HTML</h2>
    
    <p class="modal-paragraph">HTML (HyperText Markup Language) is the standard language used to create and design web pages. It structures content on the web by using tags and elements to define headings, paragraphs, links, images, and other components.</p>
    <p class="modal-paragraph">HTML forms the backbone of web content and is used in conjunction with CSS and JavaScript to build complete web pages.</p>
    
    <img  src="assets/images/html.jpg" alt="HTML image">
    
    <a href="https://www.hostinger.com/tutorials/what-is-html" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    css: `
    <h2 id="modal-heading">CSS</h2>
    
    <p class="modal-paragraph">CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML. It controls the layout, colors, fonts, and overall design of web pages.</p>
    <p class="modal-paragraph">CSS allows for the separation of content and design, making web pages more flexible and easier to maintain.</p>
    
    <img  src="assets/images/css.jpg" alt="CSS image">
    
    <a href="https://www.hostinger.com/tutorials/what-is-css" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    java: `
    <h2 id="modal-heading">Java</h2>
    
    <p class="modal-paragraph">Java is a high-level programming language known for its portability, scalability, and performance. It is widely used for building enterprise-level applications, mobile apps, and web services.</p>
    <p class="modal-paragraph">Java's "write once, run anywhere" philosophy makes it a popular choice for cross-platform development.</p>
    
    <img  src="assets/images/java.jpg" alt="Java image">
    
    <a href="https://www.simplilearn.com/tutorials/java-tutorial/what-is-java" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    cSharp: `
    <h2 id="modal-heading">C#</h2>
    
    <p class="modal-paragraph">C# (C-Sharp) is a modern, object-oriented programming language developed by Microsoft. It is used primarily for developing applications on the .NET framework, including web, desktop, and mobile apps.</p>
    <p class="modal-paragraph">C# is known for its simplicity, versatility, and strong integration with Microsoft technologies.</p>
    
    <img  src="assets/images/cSharp.jpg" alt="C# image">
    
    <a href="https://dotnet.microsoft.com/en-us/languages/csharp" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    php: `
    <h2 id="modal-heading">PHP</h2>
    
    <p class="modal-paragraph">PHP (Hypertext Preprocessor) is a server-side scripting language designed for web development. It is commonly used to create dynamic web pages and interact with databases.</p>
    <p class="modal-paragraph">PHP is widely supported and integrates well with HTML, making it a popular choice for web developers.</p>
    
    <img  src="assets/images/php.jpg" alt="PHP image">
    
     <a href="https://www.freecodecamp.org/news/what-is-php-the-php-programming-language-meaning-explained/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    ruby: `
    <h2 id="modal-heading">Ruby</h2>
    
    <p class="modal-paragraph">Ruby is an object-oriented programming language known for its simplicity and productivity. It is often used for web development, particularly with the Ruby on Rails framework.</p>
    <p class="modal-paragraph">Ruby's elegant syntax makes it easy to read and write, helping developers create robust applications quickly.</p>
    
     <a href="https://developer.oracle.com/learn/technical-articles/what-is-ruby" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    swift: `
    <h2 id="modal-heading">Swift</h2>
    
    <p class="modal-paragraph">Swift is a programming language developed by Apple for iOS and macOS development. It is known for its speed, safety, and ease of use.</p>
    <p class="modal-paragraph">Swift allows developers to build high-performance applications with modern features and a clean syntax.</p>
    
    <img  src="assets/images/swift.jpg" alt="Swift image">
    
     <a href="https://developer.apple.com/swift/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    typescript: `
    <h2 id="modal-heading">TypeScript</h2>
    
    <p class="modal-paragraph">TypeScript is a superset of JavaScript that adds static typing to the language. It helps developers catch errors early and improve code quality by providing type-checking and advanced features.</p>
    <p class="modal-paragraph">TypeScript is compiled to JavaScript and is compatible with existing JavaScript code and libraries.</p>
    
    <img  src="assets/images/typescript.jpg" alt="TypeScript image">
   
     <a href="https://www.typescripttutorial.net/typescript-tutorial/what-is-typescript/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>

  `,
    kotlin: `
    <h2 id="modal-heading">Kotlin</h2>
    
    <p class="modal-paragraph">Kotlin is a statically-typed programming language developed by JetBrains. It is used for Android development and is fully interoperable with Java.</p>
    <p class="modal-paragraph">Kotlin offers modern features, concise syntax, and improved safety compared to Java.</p>
    
   
     <a href="https://www.techtarget.com/whatis/definition/Kotlin" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    bash: `
    <h2 id="modal-heading">Bash</h2>
    
    <p class="modal-paragraph">Bash is a Unix shell and command language used for writing shell scripts. It allows users to automate tasks, manage files, and interact with the operating system through commands.</p>
    <p class="modal-paragraph">Bash scripts are commonly used for system administration and software deployment tasks.</p>
    
    <a href="https://opensource.com/resources/what-bash" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    rubyOnRails: `
    <h2 id="modal-heading">Ruby on Rails</h2>
    
    <p class="modal-paragraph">Ruby on Rails is a web application framework written in Ruby. It follows the Model-View-Controller (MVC) architecture and emphasizes convention over configuration.</p>
    <p class="modal-paragraph">Rails helps developers build robust and scalable web applications quickly by providing built-in tools and best practices.</p>
    
    <img  src="assets/images/rubyOnRails.jpg" alt="Ruby on Rails image">
     
     <a href="https://www.codecademy.com/resources/blog/what-is-ruby-on-rails/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    angular: `
    <h2 id="modal-heading">Angular</h2>
    
    <p class="modal-paragraph">Angular is a TypeScript-based open-source web application framework developed by Google. It provides a comprehensive solution for building dynamic and responsive web applications.</p>
    <p class="modal-paragraph">Angular includes features such as data binding, dependency injection, and modular development to streamline the development process.</p>
    
    <img  src="https://www.aalpha.net/wp-content/uploads/2019/07/angularjs-development-india.jpg" alt="Angular image">
     
     <a href="https://v17.angular.io/guide/what-is-angular" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    vueJS: `
    <h2 id="modal-heading">VueJS</h2>
    
    <p class="modal-paragraph">VueJS is a progressive JavaScript framework used for building user interfaces. It is designed to be incrementally adoptable and can be integrated into existing projects.</p>
    <p class="modal-paragraph">VueJS provides reactive data binding and component-based architecture, making it easy to build interactive and maintainable web applications.</p>
    
    <img  src="https://v1.vuejs.org/images/mvvm.png" alt="VueJS image">
     
     <a href="https://v1.vuejs.org/guide/overview.html" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    flutter: `
    <h2 id="modal-heading">Flutter</h2>
    
    <p class="modal-paragraph">Flutter is an open-source UI toolkit developed by Google for building natively compiled applications for mobile, web, and desktop from a single codebase.</p>
    <p class="modal-paragraph">Flutter uses the Dart programming language and provides a rich set of pre-designed widgets and tools for creating beautiful and responsive user interfaces.</p>
    
    <img  src="assets/images/flutter.jpg" alt="Flutter image">
     
     <a href="https://techvify-software.com/wp-content/uploads/2023/07/how-flutter-works.jpg" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    swiftUI: `
    <h2 id="modal-heading">SwiftUI</h2>
    
    <p class="modal-paragraph">SwiftUI is a framework by Apple for building user interfaces across all Apple platforms using a declarative Swift syntax. It simplifies the process of creating complex UI elements and animations.</p>
    <p class="modal-paragraph">SwiftUI integrates seamlessly with existing Swift code and provides a live preview of UI changes, enhancing the development workflow.</p>
    
     <a href="https://www.adjust.com/blog/get-started-with-swiftui/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    algorithm: `
    <h2 id="modal-heading">Algorithm</h2>
    
    <p class="modal-paragraph">An algorithm is a step-by-step procedure or formula for solving a problem. It is a fundamental concept in computer science and programming used to perform tasks, calculations, and data processing.</p>
    <p class="modal-paragraph">Algorithms are the basis of programming and are used to design and optimize code for various applications.</p>
    
    <img  src="https://cdn.ttgtmedia.com/rms/onlineimages/types_of_algorithms-f_mobile.png" alt="Algorithm image">
     
     <a href="https://www.geeksforgeeks.org/introduction-to-algorithms/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    dataStructure: `
    <h2 id="modal-heading">Data Structure</h2>
    
    <p class="modal-paragraph">A data structure is a way of organizing and storing data so that it can be accessed and modified efficiently. Common data structures include arrays, linked lists, stacks, queues, and trees.</p>
    <p class="modal-paragraph">Choosing the right data structure is crucial for optimizing performance and managing data effectively in software applications.</p>
    
    <img  src="https://media.geeksforgeeks.org/wp-content/uploads/20220520182504/ClassificationofDataStructure-660x347.jpg" alt="Data Structure image">
     
     <a href="https://www.w3schools.com/dsa/dsa_intro.php" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    bigO: `
    <h2 id="modal-heading">Big O Notation</h2>
    
    <p class="modal-paragraph">Big O notation is used to describe the performance or complexity of an algorithm in terms of time and space. It provides an upper bound on the growth rate of an algorithm's running time or space usage.</p>
    <p class="modal-paragraph">In simple words, Big O Notation helps us understand how the time to find something changes as the number of items increases. The lower the Big O value, the more efficient the process!</p>
    <p class="modal-paragraph">Big O notation also helps in <strong> analyzing and comparing the efficiency </strong> of different algorithms.</p>
    
     <a href="https://www.freecodecamp.org/news/big-o-notation-why-it-matters-and-why-it-doesnt-1674cfa8a23c/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    recursionDepth: `
    <h2 id="modal-heading">Recursion Depth</h2>
    
    <p class="modal-paragraph">Recursion depth refers to the number of times a recursive function calls itself before reaching the base case. It is important to manage recursion depth to avoid stack overflow errors and ensure efficient execution.</p>
    <p class="modal-paragraph">Understanding recursion depth helps in designing algorithms that use recursion effectively and safely.</p>
    
  `,
    debugging: `
    <h2 id="modal-heading">Debugging</h2>
    
    <p class="modal-paragraph">Debugging is the process of identifying and fixing errors or bugs in software code. It involves testing, analyzing, and modifying code to ensure that it functions correctly.</p>
    <p class="modal-paragraph">Effective debugging is crucial for improving software quality and performance.</p>
    
    <img  src="https://www.edureka.co/blog/wp-content/uploads/2019/08/debuuging-steps-528x294.png" alt="Debugging image">
     
     <a href="https://www.ibm.com/topics/debugging" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    testing: `
    <h2 id="modal-heading">Testing</h2>
    
    <p class="modal-paragraph">Testing is the process of evaluating software to ensure it behaves as expected. It involves executing code with various inputs to verify correctness, performance, and reliability.</p>
    <p class="modal-paragraph">Testing can be performed manually or through automated test scripts and is essential for delivering high-quality software.</p>
    

     <a href="https://www.ibm.com/topics/software-testing" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    unitTest: `
    <h2 id="modal-heading">Unit Test</h2>
    
    <p class="modal-paragraph">A unit test is a type of testing that focuses on verifying individual components or functions of a software application. It ensures that each unit of code performs as intended.</p>
    <p class="modal-paragraph">Unit tests are typically automated and help identify bugs early in the development process.</p>
    
    <img  src="https://codenboxautomationlab.com/wp-content/uploads/2022/06/unit-testing-life-cycle-pic.png" alt="Unit Test image">
     
     <a href="https://aws.amazon.com/what-is/unit-testing/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    integrationTest: `
    <h2 id="modal-heading">Integration Test</h2>
    
    <p class="modal-paragraph">Integration testing focuses on verifying the interactions between different components or systems to ensure they work together as expected.</p>
    <p class="modal-paragraph">Integration tests help ensure that different parts of a software application integrate smoothly and function correctly as a whole.</p>
    
    <img  src="https://www.simform.com/wp-content/uploads/2022/01/Integration-testing-types.png" alt="Integration Test image">
     
     <a href="https://katalon.com/resources-center/blog/integration-testing" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    endToEndTest: `
    <h2 id="modal-heading">End-to-End Test</h2>
    
    <p class="modal-paragraph">End-to-end testing evaluates the entire software application from start to finish to ensure that it works as intended in a real-world scenario.</p>
    <p class="modal-paragraph">It verifies that all components of the application interact correctly and that the system as a whole meets the desired requirements.</p>
    
    <img  src="https://cdn.prod.website-files.com/610bb663a35dd3364ddbf08c/62b594796e28e910d6624e03_end-to-end-testing-metrics.png" alt="End-to-End Test image">
     
     <a href="https://smartbear.com/learn/automated-testing/what-is-end-to-end-testing/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    performanceTest: `
    <h2 id="modal-heading">Performance Test</h2>
    
    <p class="modal-paragraph">Performance testing evaluates how well a software application performs under various conditions, including load, stress, and scalability.</p>
    <p class="modal-paragraph">It helps identify bottlenecks and ensure that the application meets performance criteria and handles user demands effectively.</p>
    
    <img  src="https://www.a1qa.com/wp-content/uploads/2019/06/performance-testing.jpg" alt="Performance Test image">
     
     <a href="https://en.wikipedia.org/wiki/Software_performance_testing" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    loadTest: `
    <h2 id="modal-heading">Load Test</h2>
    
    <p class="modal-paragraph">Load testing is a type of performance testing that evaluates how a software application handles a specific volume of users or transactions.</p>
    <p class="modal-paragraph">It helps determine if the application can handle expected load conditions without degrading performance.</p>
    
   
     <a href="https://en.wikipedia.org/wiki/Software_load_testing#:~:text=Load%20testing%20generally%20refers%20to,model%2C%20such%20as%20web%20servers." id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    stressTest: `
    <h2 id="modal-heading">Stress Test</h2>
    
    <p class="modal-paragraph">Stress testing assesses how a software application performs under extreme conditions, such as a sudden spike in user activity or data volume.</p>
    <p class="modal-paragraph">It helps identify the application's breaking point and ensure it can recover gracefully from high-stress situations.</p>
    
   
     <a href="https://www.geeksforgeeks.org/stress-testing-software-testing/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    securityTest: `
    <h2 id="modal-heading">Security Test</h2>
    
    <p class="modal-paragraph">Security testing identifies vulnerabilities and weaknesses in a software application to ensure it is protected against potential threats and attacks.</p>
    <p class="modal-paragraph">It involves checking for issues such as unauthorized access, data breaches, and compliance with security standards.</p>
    

     <a href="https://www.hackerone.com/knowledge-center/what-security-testing" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    usabilityTest: `
    <h2 id="modal-heading">Usability Test</h2>
    
    <p class="modal-paragraph">Usability testing evaluates how easy and intuitive a software application is for users. It focuses on user experience, including ease of navigation, accessibility, and overall satisfaction.</p>
    <p class="modal-paragraph">Usability tests help ensure that the application is user-friendly and meets the needs of its target audience.</p>
    
  
     <a href="https://www.geeksforgeeks.org/usability-testing/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    codeReview: `
    <h2 id="modal-heading">Code Review</h2>
    
    <p class="modal-paragraph">
      Code review is the process where developers check each other's code for mistakes, improvements, and learning opportunities. It ensures code quality and helps share knowledge within the team.
    </p>
    <p class="modal-paragraph">
      Think of it as having a friend read your essay to catch any errors and suggest better ways to write it.
    </p>
    
    <img  src="https://browserstack.wpenginepowered.com/wp-content/uploads/2023/09/Code-Review-Process-700x380.png" alt="Code Review image">
    <a href="https://about.gitlab.com/topics/version-control/what-is-code-review/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    refactoring: `
    <h2 id="modal-heading">Refactoring</h2>
    
    <p class="modal-paragraph">
      Refactoring is the process of improving the structure and readability of code without changing its behavior. It's like cleaning and organizing your room to make it more efficient and pleasant to use.
    </p>
    <p class="modal-paragraph">
      Imagine rewriting a messy essay to make it clearer and easier to understand.
    </p>
    
    <img  src="https://lvivity.com/wp-content/uploads/2020/09/refactoring-process.png" alt="Refactoring image">
    <a href="https://refactoring.guru/refactoring/what-is-refactoring" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    technicalDebt: `
    <h2 id="modal-heading">Technical Debt</h2>
    
    <p class="modal-paragraph">
      Technical debt refers to the extra work required in the future because of shortcuts or suboptimal solutions made in the past. It's like doing your homework quickly and poorly, knowing you'll have to redo it later.
    </p>
    <p class="modal-paragraph">
      Think of it as borrowing time now but paying back with interest later.
    </p>
    
    <img  src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2vdqiy2rlvcg00nw230f.png" alt="Technical Debt image">
    <a href="https://asana.com/resources/technical-debt" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    designPatterns: `
    <h2 id="modal-heading">Design Patterns</h2>
    
    <p class="modal-paragraph">
      Design patterns are standard solutions to common problems in software design. They provide a reusable template for solving recurring issues in coding.
    </p>
    <p class="modal-paragraph">
      It's like having a recipe for your favorite dish that you can use over and over again.
    </p>
    
    <a href="https://refactoring.guru/design-patterns/what-is-pattern" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    solidPrinciples: `
    <h2 id="modal-heading">SOLID Principles</h2>
    
    <p class="modal-paragraph">
      SOLID principles are a set of guidelines to make software design more understandable, flexible, and maintainable. They stand for Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion.
    </p>
    <p class="modal-paragraph">
      Think of them as rules for writing good, clean, and efficient code.
    </p>
    
    <img  src="https://miro.medium.com/v2/resize:fit:751/1*GoLwqfeB624NB5g7JPVyBA.png" alt="SOLID Principles image">
    <a href="https://en.wikipedia.org/wiki/SOLID" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    kissPrinciple: `
    <h2 id="modal-heading">KISS Principle</h2>
    
    <p class="modal-paragraph">
      The KISS principle stands for "Keep It Simple, Stupid." It means that systems should be as simple as possible to avoid unnecessary complexity.
    </p>
    <p class="modal-paragraph">
      Think of it like writing an essay in clear, straightforward language so everyone can understand it easily.
    </p>
    
    <img  src="https://miro.medium.com/v2/resize:fit:1400/1*yN1zFlkN7bKVo1lld0Vm1A.png" alt="KISS Principle image">
    <a href="https://en.wikipedia.org/wiki/KISS_principle" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    dryPrinciple: `
    <h2 id="modal-heading">DRY Principle</h2>
    
    <p class="modal-paragraph">
      The DRY principle stands for "Don't Repeat Yourself." It means that every piece of knowledge or logic should be written once and reused throughout the code.
    </p>
    <p class="modal-paragraph">
      Think of it like using the same recipe card for your favorite dish instead of writing a new one each time.
    </p>
    
    <img  src="https://miro.medium.com/v2/resize:fit:1400/1*lQlLv4AJZysvATx1AEIpUQ.png" alt="DRY Principle image">
    <a href="https://thevaluable.dev/dry-principle-cost-benefit-example/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    uat: `
    <h2 id="modal-heading">UAT</h2>
    
    <p class="modal-paragraph">
      UAT (User Acceptance Testing) is the final phase of software testing where actual users test the software to ensure it meets their needs and requirements.
    </p>
    <p class="modal-paragraph">
      It's like asking a friend to try out a game you made to make sure it's fun and works well before sharing it with everyone.
    </p>
    
    <img  src="https://images.spiceworks.com/wp-content/uploads/2022/10/14110825/UAT-Testing-Process.png" alt="UAT image">
    <a href="https://www.guru99.com/user-acceptance-testing.html" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    testDrivenDevelopment: `
    <h2 id="modal-heading">Test-Driven Development</h2>
    
    <p class="modal-paragraph">Test-Driven Development (TDD) is a software development approach where tests are written before the actual code. It involves creating tests to define desired functionality and then writing code to pass those tests.</p>
    <p class="modal-paragraph">TDD helps ensure code quality and functionality by promoting continuous testing and iterative development.</p>
    
     <a href="https://testdriven.io/test-driven-development/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    continuousIntegration: `
    <h2 id="modal-heading">Continuous Integration</h2>
    
    <p class="modal-paragraph">Continuous Integration (CI) is a practice where code changes are automatically tested and integrated into a shared repository multiple times a day. It aims to detect and fix errors early in the development process.</p>
    <p class="modal-paragraph">CI helps improve software quality and reduce integration issues by ensuring that code changes are tested and validated frequently.</p>
    
    <img  src="https://www.pagerduty.com/wp-content/uploads/2020/01/continuous-integration-2.png" alt="Continuous Integration image">
     
     <a href="https://aws.amazon.com/devops/continuous-integration/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    continuousDelivery: `
    <h2 id="modal-heading">Continuous Delivery</h2>
    
    <p class="modal-paragraph">Continuous Delivery (CD) is a practice where code changes are automatically built, tested, and prepared for release to production. It ensures that software can be deployed at any time with minimal manual intervention.</p>
    <p class="modal-paragraph">CD promotes faster delivery of new features and bug fixes by streamlining the release process and ensuring that software is always in a deployable state.</p>
    
    <img  src="https://infraascode.com.br/images/ci_cd-CD.png" alt="Continuous Delivery image">
     
     <a href="https://aws.amazon.com/devops/continuous-delivery/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    devOps: `
    <h2 id="modal-heading">DevOps</h2>
    
    <p class="modal-paragraph">DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to improve collaboration, automation, and efficiency throughout the software development lifecycle.</p>
    <p class="modal-paragraph">DevOps aims to enhance the speed, quality, and reliability of software delivery by fostering a culture of continuous improvement and shared responsibility.</p>
    
    <img  src="https://d1.awsstatic.com/product-marketing/DevOps/DevOps_feedback-diagram.ff668bfc299abada00b2dcbdc9ce2389bd3dce3f.png" alt="DevOps image">
     
     <a href="https://aws.amazon.com/devops/what-is-devops/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    logisticRegression: `
    <h2 id="modal-heading">Logistic Regression</h2>
    
    <p class="modal-paragraph">Logistic regression is a statistical method used for binary classification. It helps predict the probability of an outcome that can be one of two possible categories. For example, it might predict whether an email is spam or not spam based on its content.</p>
    <p class="modal-paragraph">It works by fitting a logistic curve to the data and using this curve to make predictions.</p>
    
    
    <img  src="https://miro.medium.com/v2/resize:fit:1400/1*dm6ZaX5fuSmuVvM4Ds-vcg.jpeg" alt="Logistic Regression image">
    <a href="https://towardsdatascience.com/introduction-to-logistic-regression-66248243c148" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    kMeansClustering: `
    <h2 id="modal-heading">K-Means Clustering</h2>
    
    <p class="modal-paragraph">K-Means Clustering is an unsupervised learning algorithm used to divide data into groups (clusters) where each data point belongs to the cluster with the nearest mean. It's useful for discovering patterns in data.</p>
    <p class="modal-paragraph">For example, it can group customers into segments based on their purchasing behavior.</p>
    
    
    <img  src="https://editor.analyticsvidhya.com/uploads/56854k%20means%20clustering.png" alt="K-Means Clustering image">
    <a href="https://www.analyticsvidhya.com/blog/2020/10/a-simple-explanation-of-k-means-clustering/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    decisionTrees: `
    <h2 id="modal-heading">Decision Trees</h2>
    
    <p class="modal-paragraph">Decision Trees are a type of algorithm used for classification and regression tasks. They split data into branches to make decisions based on various features, much like a flowchart.</p>
    <p class="modal-paragraph">For instance, they can help determine whether a loan should be approved based on applicant details.</p>
    
    
    <img  src="https://miro.medium.com/v2/resize:fit:820/1*JAEY3KP7TU2Q6HN6LasMrw.png" alt="Decision Trees image">
    <a href="https://chirag-sehra.medium.com/decision-trees-explained-easily-28f23241248" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    randomForest: `
    <h2 id="modal-heading">Random Forest</h2>
    
    <p class="modal-paragraph">Random Forest is an ensemble learning technique that combines multiple decision trees to improve prediction accuracy. Each tree makes a decision, and the majority vote determines the final outcome.</p>
    <p class="modal-paragraph">It's like having a group of experts where the decision is based on the consensus of all experts.</p>
    
    
    <img  src="https://miro.medium.com/v2/resize:fit:1010/1*R3oJiyaQwyLUyLZL-scDpw.png" alt="Random Forest image">
    <a href="https://medium.com/@denizgunay/random-forest-af5bde5d7e1e" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    supportVectorMachines: `
    <h2 id="modal-heading">Support Vector Machines</h2>
    
    <p class="modal-paragraph">Support Vector Machines (SVM) are a type of supervised learning algorithm used for classification and regression. They work by finding the best boundary that separates different classes of data points.</p>
    <p class="modal-paragraph">Imagine drawing a line that best divides two groups of points on a graph. SVM finds this optimal line.</p>
    
    
    <img  src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/l4xu4d635cva6izqylzl.png" alt="Support Vector Machines image">
    <a href="https://www.kdnuggets.com/2016/07/support-vector-machines-simple-explanation.html" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    gradientDescent: `
    <h2 id="modal-heading">Gradient Descent</h2>
    
    <p class="modal-paragraph">Gradient Descent is an optimization algorithm used to minimize the error of a model. It works by iteratively adjusting the model's parameters to find the lowest error value.</p>
    <p class="modal-paragraph">Think of it as climbing down a hill to reach the lowest point, which represents the smallest error.</p>  
    
    <a href="https://towardsdatascience.com/gradient-descent-explained-9b953fc0d2c" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    neuralNetworks: `
    <h2 id="modal-heading">Neural Networks</h2>
    
    <p class="modal-paragraph">Neural Networks are a set of algorithms modeled after the human brain. They consist of interconnected nodes (neurons) that work together to solve complex problems, like image recognition.</p>
    <p class="modal-paragraph">They can learn from data and make predictions, just like how our brains learn from experience.</p>
    
    
    <img  src="https://miro.medium.com/v2/resize:fit:667/1*SqsP6IcQoCLy9eMU8te3Vw.png" alt="Neural Networks image">
    <a href="https://www.freecodecamp.org/news/deep-learning-neural-networks-explained-in-plain-english/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    naturalLanguageProcessing: `
    <h2 id="modal-heading">Natural Language Processing</h2>
    
    <p class="modal-paragraph">Natural Language Processing (NLP) is a field of artificial intelligence that helps computers understand and interact with human language. It's used in applications like chatbots and translation services.</p>
    <p class="modal-paragraph">NLP enables computers to understand, interpret, and generate human language.</p>
    
    
    <img  src="https://media.geeksforgeeks.org/wp-content/uploads/20240524132821/nlp-working.webp" alt="Natural Language Processing image">
    <a href="https://www.freecodecamp.org/news/deep-learning-neural-networks-explained-in-plain-english/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    recurrentNeuralNetworks: `
    <h2 id="modal-heading">Recurrent Neural Networks</h2>
    
    <p class="modal-paragraph">Recurrent Neural Networks (RNNs) are a type of neural network designed for processing sequences of data, like time series or sentences. They have loops that allow information to persist across time steps.</p>
    <p class="modal-paragraph">RNNs are great for tasks where context from previous inputs is important.</p>
    
    
    <img  src="https://media.geeksforgeeks.org/wp-content/uploads/20231204125839/What-is-Recurrent-Neural-Network-660.webp" alt="Recurrent Neural Networks image">
    <a href="https://media.geeksforgeeks.org/wp-content/uploads/20240524132821/nlp-working.webp" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    convolutionalNeuralNetworks: `
    <h2 id="modal-heading">Convolutional Neural Networks</h2>
    
    <p class="modal-paragraph">Convolutional Neural Networks (CNNs) are designed to process grid-like data, such as images. They use filters to detect patterns in different parts of an image, which helps in tasks like image classification.</p>
    <p class="modal-paragraph">CNNs are used for recognizing objects in photos or videos.</p>
    
    
    <img  src="https://miro.medium.com/v2/resize:fit:1400/1*7_BCJFzekmPXmJQVRdDgwg.png" alt="Convolutional Neural Networks image">
    <a href="https://nafizshahriar.medium.com/what-is-convolutional-neural-network-cnn-deep-learning-b3921bdd82d5" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    autoencoders: `
    <h2 id="modal-heading">Autoencoders</h2>
    
    <p class="modal-paragraph">Autoencoders are a type of neural network used for learning efficient representations of data. They work by compressing the input into a smaller representation and then reconstructing it to match the original input.</p>
    <p class="modal-paragraph">They are useful for tasks like noise reduction and dimensionality reduction.</p>
    
    
    <img  src="https://miro.medium.com/v2/resize:fit:600/1*nqzWupxC60iAH2dYrFT78Q.png" alt="Autoencoders image">
    <a href="https://medium.com/@birla.deepak26/autoencoders-76bb49ae6a8f" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    reinforcementLearning: `
    <h2 id="modal-heading">Reinforcement Learning</h2>
    
    <p class="modal-paragraph">Reinforcement Learning is a type of machine learning where an agent learns to make decisions by receiving rewards or penalties. The goal is to maximize the total reward over time.</p>
    <p class="modal-paragraph">It's like training a robot to play a game by giving it points for making good moves and penalties for bad moves.</p>
    
    
    <img  src="https://images.spiceworks.com/wp-content/uploads/2022/09/29100907/Reinforcement-Learning-Model.png" alt="Reinforcement Learning image">
    <a href="https://www.spiceworks.com/tech/artificial-intelligence/articles/what-is-reinforcement-learning/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    transferLearning: `
    <h2 id="modal-heading">Transfer Learning</h2>
    
    <p class="modal-paragraph">Transfer Learning is a technique where a pre-trained model is adapted to perform a different but related task. This approach helps save time and computational resources.</p>
    <p class="modal-paragraph">For example, a model trained to recognize cats and dogs can be adapted to identify different breeds of dogs.</p>
    
    
    <img  src="https://cdn.prod.website-files.com/5d7b77b063a9066d83e1209c/627d125248f5fa07e1faf0c6_61f54fb4bbd0e14dfe068c8f_transfer-learned-knowledge.png" alt="Transfer Learning image">
    <a href="https://www.v7labs.com/blog/transfer-learning-guide" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    hyperparameterTuning: `
    <h2 id="modal-heading">Hyperparameter Tuning</h2>
    
    <p class="modal-paragraph">Hyperparameter Tuning is the process of optimizing the settings of a machine learning model to improve its performance. These settings, called hyperparameters, control the learning process and the structure of the model.</p>
    <p class="modal-paragraph">It's like adjusting the knobs on a radio to get the best sound quality.</p>
    
    
    <a href="https://www.analyticsvidhya.com/blog/2022/02/a-comprehensive-guide-on-hyperparameter-tuning-and-its-techniques/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    crossValidation: `
    <h2 id="modal-heading">Cross-Validation</h2>
    
    <p class="modal-paragraph">Cross-Validation is a technique used to assess how well a machine learning model performs on unseen data. It involves splitting the data into multiple subsets, training the model on some subsets, and testing it on the remaining ones.</p>
    <p class="modal-paragraph">It's like taking a practice test to see how well you'll do on the real exam.</p>
    
    
    <img  src="https://www.sharpsightlabs.com/wp-content/uploads/2024/02/cross-validation-explained_FEATURED-IMAGE.png" alt="Cross-Validation image">
    <a href="https://www.geeksforgeeks.org/cross-validation-machine-learning/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    featureEngineering: `
    <h2 id="modal-heading">Feature Engineering</h2>
    
    <p class="modal-paragraph">Feature Engineering involves creating new features or modifying existing ones to improve the performance of a machine learning model. It's like adding more details to a drawing to make it clearer.</p>
    <p class="modal-paragraph">Effective feature engineering can make a significant difference in how well a model performs.</p>
    
    
    <img  src="https://blog.minitab.com/hubfs/FeatureEngineering-blog-img1-hubspot.jpg" alt="Feature Engineering image">
    <a href="https://builtin.com/articles/feature-engineering" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    featureScaling: `
    <h2 id="modal-heading">Feature Scaling</h2>
    
    <p class="modal-paragraph">Feature Scaling is the process of normalizing the range of features in your data. This helps improve the performance and convergence speed of machine learning algorithms.</p>
    <p class="modal-paragraph">It's like making sure all the pieces of a puzzle fit together properly.</p>
    
  
  `,

    overfitting: `
    <h2 id="modal-heading">Overfitting</h2>
    
    <p class="modal-paragraph">Overfitting occurs when a machine learning model learns the details and noise in the training data to the extent that it negatively impacts its performance on new data.</p>
    <p class="modal-paragraph">It's like memorizing answers to a practice test without understanding the material, leading to poor performance on the actual exam.</p>
    
    
    <img  src="https://www.mathworks.com/discovery/overfitting/_jcr_content/mainParsys/image.adapt.full.medium.svg/1718273106637.svg" alt="Overfitting image">
    <a href="https://www.geeksforgeeks.org/underfitting-and-overfitting-in-machine-learning/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    underfitting: `
    <h2 id="modal-heading">Underfitting</h2>
    
    <p class="modal-paragraph">Underfitting happens when a machine learning model is too simple to capture the underlying pattern in the data. It performs poorly on both training and new data.</p>
    <p class="modal-paragraph">It's like using a very basic formula to solve a complex problem, resulting in inaccurate answers.</p>
    
    
    <img  src="https://www.mathworks.com/discovery/overfitting/_jcr_content/mainParsys/image.adapt.full.medium.svg/1718273106637.svg" alt="Underfitting image">
    <a href="https://www.geeksforgeeks.org/underfitting-and-overfitting-in-machine-learning/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    regularization: `
    <h2 id="modal-heading">Regularization</h2>
    
    <p class="modal-paragraph">Regularization is a technique used to prevent overfitting by adding a penalty to the complexity of the model. It helps in keeping the model simpler and more generalizable.</p>
    <p class="modal-paragraph">It's like adding rules to limit how much a model can change to avoid fitting too closely to the training data.</p>
    
    
    <img  src="https://editor.analyticsvidhya.com/uploads/71199regularization.jpg" alt="Regularization image">
    <a href="" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    bagging: `
    <h2 id="modal-heading">Bagging</h2>
    
    <p class="modal-paragraph">Bagging, or Bootstrap Aggregating, is an ensemble technique that improves model performance by training multiple models on different subsets of the data and combining their predictions.</p>
    <p class="modal-paragraph">It's like asking several people for their opinions and then averaging them to make a decision.</p>
    
    <a href="https://www.ibm.com/topics/bagging" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    boosting: `
    <h2 id="modal-heading">Boosting</h2>
    
    <p class="modal-paragraph">Boosting is an ensemble technique that builds multiple models sequentially, where each model tries to correct the errors of the previous one. The final prediction is a weighted sum of the predictions from all models.</p>
    <p class="modal-paragraph">It's like learning from mistakes and improving with each step.</p>
 
    <a href="https://aws.amazon.com/what-is/boosting/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    ensembleMethods: `
    <h2 id="modal-heading">Ensemble Methods</h2>
    
    <p class="modal-paragraph">Ensemble Methods combine the predictions from multiple models to improve overall performance. Techniques like bagging, boosting, and stacking are common ensemble methods.</p>
    <p class="modal-paragraph">It's like using the wisdom of a group to make a better decision.</p>
    
    
    <img  src="https://cdn.corporatefinanceinstitute.com/assets/ensemble-methods.png" alt="Ensemble Methods image">
    <a href="https://corporatefinanceinstitute.com/resources/data-science/ensemble-methods/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    rocCurve: `
    <h2 id="modal-heading">ROC Curve</h2>
    
    <p class="modal-paragraph">The ROC Curve (Receiver Operating Characteristic Curve) is a graphical representation of a classifier's performance. It plots the true positive rate against the false positive rate at various thresholds.</p>
    <p class="modal-paragraph">It helps in assessing how well a model can distinguish between classes.</p>
    
    
    <img  src="https://media.geeksforgeeks.org/wp-content/uploads/20230410164437/AUC-ROC-Curve.webp" alt="ROC Curve image">
    <a href="https://medium.com/@shaileydash/understanding-the-roc-and-auc-intuitively-31ca96445c02" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    aucCurve: `
    <h2 id="modal-heading">AUC Curve</h2>
    
    <p class="modal-paragraph">AUC (Area Under the Curve) is a performance measurement for classification problems at various threshold settings. The AUC represents the degree or measure of separability. It tells how much the model is capable of distinguishing between classes.</p>
    <p class="modal-paragraph">It's like checking how well a doctor can distinguish between patients with and without a disease based on a diagnostic test.</p>
    
    
    <img  src="https://media.geeksforgeeks.org/wp-content/uploads/20230410164437/AUC-ROC-Curve.webp" alt="AUC Curve image">
    <a href="https://medium.com/@shaileydash/understanding-the-roc-and-auc-intuitively-31ca96445c025" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    precisionRecall: `
    <h2 id="modal-heading">Precision and Recall</h2>
    
    <p class="modal-paragraph">Precision and Recall are metrics used to evaluate the performance of classification models. Precision measures the accuracy of positive predictions, while Recall measures how well the model identifies all positive instances.</p>
    <p class="modal-paragraph">They are especially useful when dealing with imbalanced datasets.</p>
    
    
    <img src="https://miro.medium.com/v2/resize:fit:824/1*xMl_wkMt42Hy8i84zs2WGg.png" alt="Precision and Recall image">
    <a href="https://www.analyticsvidhya.com/blog/2020/09/precision-recall-machine-learning/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    f1Score: `
    <h2 id="modal-heading">F1 Score</h2>
    
    <p class="modal-paragraph">The F1 Score is a metric that combines Precision and Recall into a single number. It is the harmonic mean of Precision and Recall, providing a balanced measure of a model's accuracy.</p>
    <p class="modal-paragraph">It's useful when you need a single metric to assess the performance of a model.</p>
    
    
    <img  src="https://miro.medium.com/v2/resize:fit:898/1*7tC4-fUHtcffvXGcGTJJtg.png" alt="F1 Score image">
    <a href="https://www.v7labs.com/blog/f1-score-guide" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    confusionMatrix: `
    <h2 id="modal-heading">Confusion Matrix</h2>
    
    <p class="modal-paragraph">A Confusion Matrix is a table used to evaluate the performance of a classification model. It shows the counts of true positive, false positive, true negative, and false negative predictions.</p>
    <p class="modal-paragraph">It helps in understanding the types of errors a model makes.</p>
    
    
    <img  src="https://cdn.prod.website-files.com/5d7b77b063a9066d83e1209c/63b413d2cdc133446aa23fc5_636b9182cfaef2115e028921_HERO_1_Confusion.png" alt="Confusion Matrix image">
    <a href="https://www.analyticsvidhya.com/blog/2020/04/confusion-matrix-machine-learning/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    crossEntropy: `
    <h2 id="modal-heading">Cross-Entropy</h2>
    
    <p class="modal-paragraph">Cross-Entropy is a loss function used to measure the performance of a classification model. It quantifies the difference between the predicted probabilities and the actual class labels.</p>
    <p class="modal-paragraph">Lower cross-entropy indicates better model performance.</p>
    
    <a href="https://towardsdatascience.com/what-is-cross-entropy-3bdb04c13616" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    // Start from here - 01/08
    noSQLDatabases: `
    <h2 id="modal-heading">NoSQL Databases</h2>
    
    <p class="modal-paragraph">
      NoSQL databases store data in a flexible, scalable way, unlike traditional SQL databases. It's like having different types of storage boxes that can expand as you add more stuff.
    </p>
    <p class="modal-paragraph">
      Imagine NoSQL as a big collection of adjustable shelves that fit all kinds of items, not just books.
    </p>
    
    
    <a href="https://www.mongodb.com/nosql-explained" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    microservicesArchitecture: `
    <h2 id="modal-heading">Microservices Architecture</h2>
    
    <p class="modal-paragraph">
      Microservices architecture is a way of building software where each part is a small, independent piece. It's like building a Lego structure with different blocks that can be replaced without breaking the whole thing.
    </p>
    <p class="modal-paragraph">
      Think of microservices as separate apps on your phone that work together to make everything run smoothly.
    </p>
    
    
    <a href="https://microservices.io/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    serverlessArchitecture: `
    <h2 id="modal-heading">Serverless Architecture</h2>
    
    <p class="modal-paragraph">
      Serverless architecture means you don't have to manage servers yourself. The cloud provider takes care of it for you. It's like having a magic kitchen that cooks your food without you needing to know how.
    </p>
    <p class="modal-paragraph">
      Imagine serverless as a vending machine that automatically refills itself when something runs out.
    </p>
    
   
    <a href="https://serverless.com/learn/what-is-serverless/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    webAssembly: `
    <h2 id="modal-heading">WebAssembly (Wasm)</h2>
    
    <p class="modal-paragraph">
      WebAssembly is a new way to run code on the web, making it super fast. It's like turbocharging your web browser so it can do heavy tasks quickly.
    </p>
    <p class="modal-paragraph">
      Think of WebAssembly as a superhero suit that gives your web apps amazing speed and power.
    </p>
    
   
    <a href="https://webassembly.org/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    edgeComputing: `
    <h2 id="modal-heading">Edge Computing</h2>
    
    <p class="modal-paragraph">
      Edge computing brings data processing closer to where it's needed, reducing delays. It's like having a mini-computer in your smart devices to make things faster.
    </p>
    <p class="modal-paragraph">
      Imagine edge computing as a brain in your devices that helps them think quicker without asking a faraway server.
    </p>
    
    
    <a href="https://www.ibm.com/cloud/what-is-edge-computing" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    zeroTrustSecurityModel: `
    <h2 id="modal-heading">Zero Trust Security Model</h2>
    
    <p class="modal-paragraph">
      Zero Trust is a security approach where no one inside or outside the network is trusted by default. It's like having multiple locks and security checks before letting someone in.
    </p>
    <p class="modal-paragraph">
      Think of Zero Trust as always double-checking and verifying everyone before allowing access to important stuff.
    </p>
    
   
    <a href="https://www.csoonline.com/article/3247848/what-is-zero-trust-a-model-for-more-effective-security.html" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    dockerSwarm: `
    <h2 id="modal-heading">Docker Swarm</h2>
    
    <p class="modal-paragraph">
      Docker Swarm helps manage a group of Docker containers, making it easy to deploy, manage, and scale them. It's like having a team of workers that coordinate tasks efficiently.
    </p>
    <p class="modal-paragraph">
      Think of Docker Swarm as the conductor of an orchestra, ensuring all musicians play in harmony.
    </p>
    
   
    <a href="https://docs.docker.com/engine/swarm/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    oAuth2_0: `
    <h2 id="modal-heading">OAuth 2.0</h2>
    
    <p class="modal-paragraph">
      OAuth 2.0 is a way to let apps access your information without giving them your password. It's like giving a friend a key that only works for one room, not your whole house.
    </p>
    <p class="modal-paragraph">
      Imagine OAuth 2.0 as a permission slip that allows access to specific parts of your data.
    </p>
    
   
    <a href="https://oauth.net/2/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    jwt: `
    <h2 id="modal-heading">JWT (JSON Web Tokens)</h2>
    
    <p class="modal-paragraph">
      JWTs are a way to securely transmit information between parties as a JSON object. It's like a sealed envelope that can only be opened by the right person.
    </p>
    <p class="modal-paragraph">
      Think of JWT as a digital ID card that proves your identity and allows access to certain resources.
    </p>
    
   
    <a href="https://jwt.io/introduction/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    eventDrivenArchitecture: `
    <h2 id="modal-heading">Event-Driven Architecture</h2>
    
    <p class="modal-paragraph">
      Event-Driven Architecture is a way of building software where actions (events) trigger responses. It's like ringing a doorbell and someone answers the door.
    </p>
    <p class="modal-paragraph">
      Imagine it as a cause-and-effect system where specific events lead to certain actions.
    </p>
    
  
    <a href="https://aws.amazon.com/event-driven-architecture/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    cqrs: `
    <h2 id="modal-heading">CQRS (Command Query Responsibility Segregation)</h2>
    
    <p class="modal-paragraph">
      CQRS is a pattern that separates reading and writing operations into different models. It's like having separate lines at a counter: one for placing orders and one for picking them up.
    </p>
    <p class="modal-paragraph">
      Think of CQRS as organizing tasks to improve efficiency and clarity in your system.
    </p>
    
   
    <a href="https://martinfowler.com/bliki/CQRS.html" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    devSecOps: `
    <h2 id="modal-heading">DevSecOps</h2>
    
    <p class="modal-paragraph">
      DevSecOps integrates security practices into the DevOps process. It's like adding security checks at every step of building a Lego tower to make sure it doesn't fall.
    </p>
    <p class="modal-paragraph">
      Imagine DevSecOps as building with Legos where every piece is checked for safety.
    </p>
    
  
    <a href="https://www.redhat.com/en/topics/devops/what-is-devsecops" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    dataLake: `
    <h2 id="modal-heading">Data Lake</h2>
    
    <p class="modal-paragraph">
      A Data Lake is a storage system that holds vast amounts of raw data in its native format. It's like having a giant pool where you can store all kinds of water without sorting.
    </p>
    <p class="modal-paragraph">
      Think of a Data Lake as a big swimming pool where you can store different types of data.
    </p>
    
   
    <a href="https://aws.amazon.com/big-data/datalakes-and-analytics/what-is-a-data-lake/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    etl: `
    <h2 id="modal-heading">ETL (Extract, Transform, Load)</h2>
    
    <p class="modal-paragraph">
      ETL stands for Extract, Transform, Load. It's a process to collect data, change it to fit needs, and store it in a new place. It's like taking ingredients, cooking them, and serving the dish.
    </p>
    <p class="modal-paragraph">
      Imagine ETL as making a recipe where you gather ingredients, prepare them, and then serve the meal.
    </p>
    
   
    <a href="https://www.talend.com/resources/what-is-etl/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    monolith: `
    <h2 id="modal-heading">Monolith</h2>
    
    <p class="modal-paragraph">
      A monolith is a large, single software application that handles multiple tasks. It's like having one big machine that does everything, from washing clothes to making coffee.
    </p>
    <p class="modal-paragraph">
      Imagine a monolith as an all-in-one tool that can be harder to fix if something breaks.
    </p>
    
   
    <a href="https://en.wikipedia.org/wiki/Monolithic_application" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    dataWarehouse: `
    <h2 id="modal-heading">Data Warehouse</h2>
    
    <p class="modal-paragraph">
      A Data Warehouse is a system used to store and manage large amounts of data for analysis. It's like a giant library where all the books are organized for easy searching.
    </p>
    <p class="modal-paragraph">
      Think of a Data Warehouse as a super-organized bookshelf that makes finding information quick and easy.
    </p>
    
   
    <a href="https://www.oracle.com/data-warehouse/what-is-a-data-warehouse.html" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    graphDatabases: `
    <h2 id="modal-heading">Graph Databases (e.g., Neo4j)</h2>
    
    <p class="modal-paragraph">
      Graph Databases store data in nodes and edges, which show relationships. It's like a web of connections, like a social network map.
    </p>
    <p class="modal-paragraph">
      Imagine a Graph Database as a map of your friendships, showing who knows who.
    </p>
    
    
    <a href="https://neo4j.com/what-is-a-graph-database/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    apm: `
    <h2 id="modal-heading">APM (Application Performance Management)</h2>
    
    <p class="modal-paragraph">
      APM monitors and manages the performance and availability of software applications. It's like having a fitness tracker for your software, showing how healthy it is.
    </p>
    <p class="modal-paragraph">
      Think of APM as a doctor for your apps, keeping them in top shape.
    </p>
    
  
    <a href="https://www.dynatrace.com/news/blog/what-is-apm/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    infrastructureAsCode: `
    <h2 id="modal-heading">Infrastructure as Code (IaC)</h2>
    
    <p class="modal-paragraph">
      IaC is managing and provisioning computing infrastructure through machine-readable scripts. It's like using a recipe to automatically make a cake.
    </p>
    <p class="modal-paragraph">
      Imagine IaC as writing instructions for a robot to set up your computer systems.
    </p>
    
   
    <a href="https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    immutableInfrastructure: `
    <h2 id="modal-heading">Immutable Infrastructure</h2>
    
    <p class="modal-paragraph">
      Immutable Infrastructure means servers are never modified after deployment; they're replaced with new ones. It's like using a new sheet of paper for each new drawing.
    </p>
    <p class="modal-paragraph">
      Imagine Immutable Infrastructure as using new Lego pieces each time you build something new.
    </p>
    
   
    <a href="https://www.redhat.com/en/topics/automation/what-is-immutable-infrastructure" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    distributedLedgerTechnology: `
    <h2 id="modal-heading">Distributed Ledger Technology</h2>
    
    <p class="modal-paragraph">
      Distributed Ledger Technology (DLT) is a digital system for recording transactions where details are recorded in multiple places at the same time. It's like having multiple copies of a book to prevent losing any information.
    </p>
    <p class="modal-paragraph">
      Think of DLT as sharing your diary with friends to ensure everyone has the same stories.
    </p>
    
   
    <a href="https://www.ibm.com/blockchain/what-is-blockchain" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    chaosEngineering: `
    <h2 id="modal-heading">Chaos Engineering</h2>
    
    <p class="modal-paragraph">
      Chaos Engineering is the practice of experimenting on a system to build confidence in its ability to withstand turbulent conditions. It's like testing a bridge by simulating strong winds.
    </p>
    <p class="modal-paragraph">
      Imagine Chaos Engineering as stress-testing your structures to ensure they can handle unexpected events.
    </p>
    
 
    <a href="https://principlesofchaos.org/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    reactiveProgramming: `
    <h2 id="modal-heading">Reactive Programming</h2>
    
    <p class="modal-paragraph">
      Reactive Programming is a way to handle data streams and changes in real time. It's like making sure your app can react instantly to user inputs, like a game that updates immediately when you press a button.
    </p>
    <p class="modal-paragraph">
      Imagine Reactive Programming as being able to respond quickly to events, just like a reflex.
    </p>
    
  
    <a href="https://www.reactivemanifesto.org/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    dataSharding: `
    <h2 id="modal-heading">Data Sharding</h2>
    
    <p class="modal-paragraph">
      Data Sharding splits a large database into smaller, faster, more manageable parts. It's like cutting a big pizza into slices so everyone can have a piece.
    </p>
    <p class="modal-paragraph">
      Imagine data sharding as dividing your work among friends to get it done faster.
    </p>
    
    <a href="https://www.mongodb.com/basics/sharding" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    apiGateway: `
    <h2 id="modal-heading">API Gateway</h2>
    
    <p class="modal-paragraph">
      An API Gateway is like a front door that handles all requests from clients, ensuring they get directed to the right services. It's like a receptionist who directs calls to the correct department.
    </p>
    <p class="modal-paragraph">
      Imagine an API Gateway as a helpful guide that makes sure everyone gets to where they need to go.
    </p>
    
    <a href="https://aws.amazon.com/api-gateway/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    webRTC: `
    <h2 id="modal-heading">WebRTC (Web Real-Time Communication)</h2>
    
    <p class="modal-paragraph">
      WebRTC allows real-time communication in web browsers without needing special plugins. It's like a video call that works instantly in your browser.
    </p>
    <p class="modal-paragraph">
      Imagine WebRTC as a way to talk to your friends face-to-face through your browser, no extra apps needed.
    </p>
    
    <a href="https://webrtc.org/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    dataGovernance: `
    <h2 id="modal-heading">Data Governance</h2>
    
    <p class="modal-paragraph">
      Data Governance is the management of data's availability, usability, integrity, and security. It's like making sure your library's books are organized, accessible, and protected.
    </p>
    <p class="modal-paragraph">
      Think of Data Governance as setting rules and responsibilities for handling data properly.
    </p>
    

    <a href="https://www.dataversity.net/what-is-data-governance/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    dataAnonymization: `
    <h2 id="modal-heading">Data Anonymization</h2>
    
    <p class="modal-paragraph">
      Data Anonymization removes personal information from data sets so that individuals can't be identified. It's like blurring faces in a photo to protect people's privacy.
    </p>
    <p class="modal-paragraph">
      Imagine Data Anonymization as making sure no one can recognize the people in your photos.
    </p>
    
    <a href="https://en.wikipedia.org/wiki/Data_anonymization" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    federatedLearning: `
    <h2 id="modal-heading">Federated Learning</h2>
    
    <p class="modal-paragraph">
      Federated Learning is a way to train AI models across multiple devices without sharing raw data. It's like learning from everyone's notebooks without taking them away.
    </p>
    <p class="modal-paragraph">
      Imagine Federated Learning as combining knowledge from many sources while keeping the original notes private.
    </p>
    
    <a href="https://ai.googleblog.com/2017/04/federated-learning-collaborative.html" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    explainableAI: `
    <h2 id="modal-heading">Explainable AI (XAI)</h2>
    
    <p class="modal-paragraph">
      Explainable AI (XAI) is about making AI decisions understandable to humans. It's like having a teacher explain how they solved a math problem.
    </p>
    <p class="modal-paragraph">
      Imagine XAI as getting a step-by-step explanation for how an AI reached its conclusion.
    </p>
    
    <a href="https://en.wikipedia.org/wiki/Explainable_artificial_intelligence" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    syntheticData: `
    <h2 id="modal-heading">Synthetic Data</h2>
    
    <p class="modal-paragraph">
      Synthetic Data is artificially generated data that mimics real data. It's like creating a fake ID that looks real but isn't linked to a real person.
    </p>
    <p class="modal-paragraph">
      Imagine Synthetic Data as a practice exam that helps you prepare for the real test without using real questions.
    </p>
    

    <a href="https://en.wikipedia.org/wiki/Synthetic_data" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    quantumCryptography: `
    <h2 id="modal-heading">Quantum Cryptography</h2>
    
    <p class="modal-paragraph">
      Quantum Cryptography uses the principles of quantum mechanics to secure data. It's like using a secret code that only works with the laws of physics.
    </p>
    <p class="modal-paragraph">
      Imagine Quantum Cryptography as an unbreakable lock that can only be opened with a special quantum key.
    </p>
    

    <a href="https://en.wikipedia.org/wiki/Quantum_cryptography" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    digitalTwins: `
    <h2 id="modal-heading">Digital Twins</h2>
    
    <p class="modal-paragraph">
      Digital Twins are virtual replicas of physical objects or systems. It's like having a digital version of yourself that can try things out before you do.
    </p>
    <p class="modal-paragraph">
      Imagine Digital Twins as having a virtual clone to test new ideas without any risk.
    </p>
    
  
    <a href="https://en.wikipedia.org/wiki/Digital_twin" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    edgeAI: `
    <h2 id="modal-heading">Edge AI</h2>
    
    <p class="modal-paragraph">
      Edge AI brings artificial intelligence to devices at the edge of the network, closer to where data is collected. It's like having a smart assistant right where you need it.
    </p>
    <p class="modal-paragraph">
      Imagine Edge AI as having a mini-brain in your device that makes decisions without waiting for instructions from a central server.
    </p>
    
   
    <a href="https://en.wikipedia.org/wiki/Edge_AI" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    homomorphicEncryption: `
    <h2 id="modal-heading">Homomorphic Encryption</h2>
    
    <p class="modal-paragraph">
      Homomorphic Encryption allows computations on encrypted data without decrypting it. It's like solving a puzzle without seeing the pieces.
    </p>
    <p class="modal-paragraph">
      Imagine Homomorphic Encryption as doing math with secret numbers that only make sense when you finish the calculation.
    </p>
    

    <a href="https://en.wikipedia.org/wiki/Homomorphic_encryption" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    fogComputing: `
    <h2 id="modal-heading">Fog Computing</h2>
    
    <p class="modal-paragraph">
      Fog Computing extends cloud computing to the edge of the network, processing data closer to where it's generated. It's like having mini-clouds that work together with the big cloud.
    </p>
    <p class="modal-paragraph">
      Imagine Fog Computing as a network of small clouds that help process information locally.
    </p>
    
  
    <a href="https://en.wikipedia.org/wiki/Fog_computing" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    virtualPrivateCloud: `
    <h2 id="modal-heading">Virtual Private Cloud (VPC)</h2>
    
    <p class="modal-paragraph">
      A Virtual Private Cloud (VPC) is a private cloud space within a public cloud environment. It's like having your own private room in a large hotel.
    </p>
    <p class="modal-paragraph">
      Imagine a VPC as a secure area in a public place where only you can go.
    </p>
    

    <a href="https://en.wikipedia.org/wiki/Virtual_private_cloud" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    hybridCloud: `
    <h2 id="modal-heading">Hybrid Cloud</h2>
    
    <p class="modal-paragraph">
      Hybrid Cloud combines private and public clouds to provide greater flexibility. It's like having both a private garden and access to a public park.
    </p>
    <p class="modal-paragraph">
      Imagine Hybrid Cloud as using both your own secure space and a shared area for different needs.
    </p>
    
  
    <a href="https://en.wikipedia.org/wiki/Hybrid_cloud" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    multiCloudStrategy: `
    <h2 id="modal-heading">Multi-Cloud Strategy</h2>
    
    <p class="modal-paragraph">
      A Multi-Cloud Strategy uses multiple cloud services to avoid reliance on a single provider. It's like shopping at different stores to get the best deals.
    </p>
    <p class="modal-paragraph">
      Imagine Multi-Cloud as using various suppliers to get the best products for your needs.
    </p>
    

    <a href="https://en.wikipedia.org/wiki/Multicloud" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    dataOps: `
    <h2 id="modal-heading">DataOps</h2>
    
    <p class="modal-paragraph">
      DataOps is an automated, process-oriented methodology to improve the quality and reduce the cycle time of data analytics. It's like a production line for data.
    </p>
    <p class="modal-paragraph">
      Imagine DataOps as a factory that processes data quickly and efficiently to produce valuable insights.
    </p>
    
  
    <a href="https://en.wikipedia.org/wiki/DataOps" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    bioinformatics: `
    <h2 id="modal-heading">Bioinformatics</h2>
    
    <p class="modal-paragraph">
      Bioinformatics combines biology, computer science, and information technology to analyze biological data. It's like using computers to understand life better.
    </p>
    <p class="modal-paragraph">
      Imagine Bioinformatics as a digital detective solving mysteries of living organisms.
    </p>
    

    <a href="https://en.wikipedia.org/wiki/Bioinformatics" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    gRPC: `
    <h2 id="modal-heading">gRPC</h2>
    
    <p class="modal-paragraph">
      gRPC is a modern, high-performance framework that allows services to communicate with each other. Its primary usage is in connecting services in a microservices-style architecture.
    </p>
    <p class="modal-paragraph">
      Think of gRPC like a highly efficient postal service that ensures your messages are delivered quickly and correctly.
    </p>
    
    <a href="https://grpc.io/docs/what-is-grpc/introduction/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    dependencyGraph: `
    <h2 id="modal-heading">Dependency Graph</h2>
    
    <p class="modal-paragraph">
      A dependency graph is a tool that helps visualize dependencies in systems or projects, showing how different elements are interconnected.
    </p>
    <p class="modal-paragraph">
      Imagine a dependency graph as a map that shows which city roads are connected to which, helping you plan your travel efficiently.
    </p>
    
    <a href="https://www.visual-paradigm.com/guide/software-development/what-is-dependency-graph/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    clusterComputing: `
    <h2 id="modal-heading">Cluster Computing</h2>
    
    <p class="modal-paragraph">
      Cluster computing involves connecting multiple computers to work as a single system, enhancing computing strength and reliability.
    </p>
    <p class="modal-paragraph">
      Think of cluster computing as a team of horses pulling a wagon, where the load is shared and the journey is faster.
    </p>
    
    <a href="https://www.techtarget.com/searchdatacenter/definition/cluster" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    messageQueues: `
    <h2 id="modal-heading">Message Queues</h2>
    
    <p class="modal-paragraph">
      Message queues help applications communicate and process operations asynchronously, managing data exchange between different processes or services.
    </p>
    <p class="modal-paragraph">
      Imagine a message queue as a series of post office boxes, where messages wait safely until their recipient is ready to process them.
    </p>
    
    <a href="https://www.ibm.com/cloud/learn/message-queues" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    rateLimiting: `
    <h2 id="modal-heading">Rate Limiting</h2>
    
    <p class="modal-paragraph">
      Rate limiting controls how often a user or system can access a resource or perform an action, preventing overuse and ensuring fair usage.
    </p>
    <p class="modal-paragraph">
      Think of rate limiting as traffic lights on the internet, controlling the flow to prevent congestion.
    </p>
    
    <a href="https://www.cloudflare.com/learning/ddos/ddos-rate-limiting/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    concurrency: `
    <h2 id="modal-heading">Concurrency</h2>
    
    <p class="modal-paragraph">
      Concurrency in computing allows multiple processes to run simultaneously within the same application, enhancing efficiency.
    </p>
    <p class="modal-paragraph">
      Imagine concurrency as a kitchen where several chefs prepare different parts of a meal at the same time.
    </p>
    
    <a href="https://www.geeksforgeeks.org/concurrency-in-operating-system/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    verticalScaling: `
    <h2 id="modal-heading">Vertical Scaling</h2>
    
    <p class="modal-paragraph">
      Vertical scaling, or scaling up, involves increasing the capacity of a single server or resource without adding more physical units.
    </p>
    <p class="modal-paragraph">
      Think of vertical scaling like upgrading a car's engine to increase speed and performance instead of adding more cars.
    </p>
    
    <a href="https://www.ibm.com/cloud/learn/scaling" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    horizontalScaling: `
    <h2 id="modal-heading">Horizontal Scaling</h2>
    
    <p class="modal-paragraph">
      Horizontal scaling, or scaling out, involves adding more machines or resources to a pool to handle increased load.
    </p>
    <p class="modal-paragraph">
      Imagine horizontal scaling as adding more lanes to a highway to accommodate more traffic.
    </p>
    
    <a href="https://www.datadoghq.com/blog/horizontal-scaling/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    databaseIndexing: `
    <h2 id="modal-heading">Database Indexing</h2>
    
    <p class="modal-paragraph">
      Database indexing improves the speed of data retrieval operations by efficiently locating and accessing the data within a database.
    </p>
    <p class="modal-paragraph">
      Think of database indexing like an index in a book, helping you find information quickly without scanning every page.
    </p>
    
    <a href="https://www.techopedia.com/definition/2788/indexing-database" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    dataReplication: `
    <h2 id="modal-heading">Data Replication</h2>
    
    <p class="modal-paragraph">
      Data replication involves copying data from one location to another to ensure consistency and support data recovery and accessibility.
    </p>
    <p class="modal-paragraph">
      Think of data replication like having multiple copies of a document in different locations, so if one is lost, others are still available.
    </p>
    
    <a href="https://www.techtarget.com/searchdatamanagement/definition/data-replication" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    acidTransactions: `
    <h2 id="modal-heading">ACID Transactions</h2>
    
    <p class="modal-paragraph">
      ACID (Atomicity, Consistency, Isolation, Durability) transactions ensure that database operations are processed reliably.
    </p>
    <p class="modal-paragraph">
      Think of ACID transactions as a checklist that guarantees every financial transaction is processed completely and accurately.
    </p>
    
    <a href="https://www.ibm.com/cloud/learn/acid-properties" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    eventuallyConsistentSystems: `
    <h2 id="modal-heading">Eventually Consistent Systems</h2>
    
    <p class="modal-paragraph">
      Eventually consistent systems are a model of consistency in distributed computing where the system eventually reaches consistency but does not guarantee immediate consistency.
    </p>
    <p style="text-align: left; line-height:1.8; margin:0px, padding:0px;">
      Think of eventually consistent systems like updates to social media profiles that might not show up immediately for all users but will eventually.
    </p>
    
    <a href="https://www.allthingsdistributed.com/2008/12/eventually_consistent.html" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    memoryLeaks: `
    <h2 id="modal-heading">Memory Leaks</h2>
    
    <p class="modal-paragraph">
      Memory leaks occur when a computer program incorrectly manages memory allocations, resulting in reduced performance or system crashes.
    </p>
    <p style="text-align: left; line-height:1.8; margin:0px, padding:0px;">
      Think of a memory leak as a bucket with a slow leak; over time, it drains without you noticing until it affects the bucket’s use.
    </p>
    
    <a href="https://www.pluralsight.com/blog/software-development/understanding-memory-leaks" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    namespace: `
    <h2 id="modal-heading">Namespace</h2>
    
    <p class="modal-paragraph">
      A namespace is a declarative region that provides a scope to the identifiers (the names of types, functions, variables, etc) inside it.
    </p>
    <p style="text-align: left; line-height:1.8; margin:0px, padding:0px;">
      Think of a namespace as a way of organizing the books in a library into different sections to avoid naming conflicts and confusion.
    </p>
    
    <a href="https://docs.microsoft.com/en-us/cpp/cpp/namespaces-cpp" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    serviceDiscovery: `
    <h2 id="modal-heading">Service Discovery</h2>
    
    <p class="modal-paragraph">
      Service discovery is a dynamic directory that helps services find and communicate with each other in cloud environments.
    </p>
    <p class="modal-paragraph">
      Think of service discovery as the phonebook for services, allowing them to look up how to connect with other services dynamically.
    </p>
    
    <a href="https://www.consul.io/discovery.html" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    throttling: `
    <h2 id="modal-heading">Throttling</h2>
    
    <p class="modal-paragraph">
      Throttling is a technique used to control the amount of traffic sent or received on a network to prevent overloading.
    </p>
    <p class="modal-paragraph">
      Imagine throttling as a traffic light controlling the flow of cars to prevent congestion.
    </p>
    
    <a href="https://www.cloudflare.com/learning/bots/what-is-rate-limiting/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    functionAsAService: `
    <h2 id="modal-heading">Function as a Service (FaaS)</h2>
    
    <p class="modal-paragraph">
      Function as a Service (FaaS) is a cloud computing service that allows you to execute code in response to events without the complexity of building and maintaining the infrastructure typically required for developing and launching an app.
    </p>
    <p class="modal-paragraph">
      Think of FaaS like a magic button that only activates and uses resources when you need it, without the hassle of owning the machinery.
    </p>
    
    <a href="https://aws.amazon.com/lambda/faas/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    dataLakehouse: `
    <h2 id="modal-heading">Data Lakehouse</h2>
    
    <p class="modal-paragraph">
      A Data Lakehouse combines the features of data lakes and data warehouses to provide structured and unstructured data storage and analytics capabilities.
    </p>
    <p class="modal-paragraph">
      Think of a Data Lakehouse as a hybrid home that offers both the vast storage space of a warehouse and the relaxing, fluid environment of a lake.
    </p>
    
    <a href="https://databricks.com/glossary/data-lakehouse" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    eventLoop: `
    <h2 id="modal-heading">Event Loop</h2>
    
    <p class="modal-paragraph">
      The event loop is a programming construct that waits for and dispatches events or messages in a program.
    </p>
    <p class="modal-paragraph">
      Imagine the event loop as a postal worker sorting and delivering mail as it arrives, ensuring that each message reaches its destination promptly.
    </p>
    
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    tokenization: `
    <h2 id="modal-heading">Tokenization</h2>
    
    <p class="modal-paragraph">
      Tokenization is the process of converting sensitive data into non-sensitive data called tokens, which can be used in a database or internal system without exposing sensitive information.
    </p>
    <p class="modal-paragraph">
      Think of tokenization as swapping out your real, valuable diamonds for costume jewelry when traveling to secure the real assets.
    </p>
    
    <a href="https://www.pcisecuritystandards.org/pdfs/pci_fs_data_tokenization.pdf" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    serverSentEvents: `
    <h2 id="modal-heading">Server Sent Events (SSE)</h2>
    
    <p class="modal-paragraph">
      Server Sent Events (SSE) is a standard allowing a web page to get updates from a server automatically.
    </p>
    <p class="modal-paragraph">
      Imagine SSE as a news ticker on a website, continuously updating with the latest news without you needing to refresh the page.
    </p>
    
    <a href="https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    messageBrokers: `
    <h2 id="modal-heading">Message Brokers</h2>
    
    <p class="modal-paragraph">
      Message brokers are intermediaries that manage communication and data exchange between different software applications.
    </p>
    <p class="modal-paragraph">
      Think of message brokers as post offices, ensuring that messages are delivered from one application to another without them needing to communicate directly.
    </p>
    
    <a href="https://www.rabbitmq.com/tutorials/tutorial-one-python.html" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    cacheInvalidation: `
    <h2 id="modal-heading">Cache Invalidation</h2>
    
    <p class="modal-paragraph">
      Cache invalidation is the process of removing outdated data from cache so that fresh data can be loaded the next time it is needed.
    </p>
    <p class="modal-paragraph">
      Think of cache invalidation like cleaning out your fridge; you need to remove old food to make room for fresh groceries.
    </p>
    
    <a href="https://www.cloudflare.com/learning/cdn/what-is-caching/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    immutableDataStructures: `
    <h2 id="modal-heading">Immutable Data Structures</h2>
    
    <p class="modal-paragraph">
      Immutable data structures are data structures that cannot be modified after they are created.
    </p>
    <p class="modal-paragraph">
      Imagine immutable data structures as a written contract; once it's signed, it cannot be changed, only replaced with a new version.
    </p>
    
    <a href="https://immutable-js.github.io/immutable-js/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    dataDeduplication: `
    <h2 id="modal-heading">Data Deduplication</h2>
    
    <p class="modal-paragraph">
      Data deduplication is a technique used to eliminate redundant copies of data, increasing storage efficiency.
    </p>
    <p class="modal-paragraph">
      Think of data deduplication as decluttering your digital storage by removing unnecessary duplicates of your files.
    </p>
    
    <a href="https://searchdatabackup.techtarget.com/definition/data-deduplication" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    statefulVsStatelessSystems: `
    <h2 id="modal-heading">Stateful vs Stateless Systems</h2>
    
    <p class="modal-paragraph">
      In stateful systems, the server stores information about the client's session. Stateless systems do not store this data, treating each request as independent.
    </p>
    <p class="modal-paragraph">
      Imagine stateful systems as having a memory of past interactions, whereas stateless systems have no recollection of previous encounters.
    </p>
    
    <a href="https://www.cloudflare.com/learning/serverless/glossary/stateful-vs-stateless/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    zeroDowntimeDeployment: `
    <h2 id="modal-heading">Zero Downtime Deployment</h2>
    
    <p class="modal-paragraph">
      Zero downtime deployment refers to the process of updating software without causing any service disruption or downtime.
    </p>
    <p class="modal-paragraph">
      Think of it as renovating a bridge while keeping it open to traffic.
    </p>
    
    <a href="https://www.digitalocean.com/community/tutorials/what-is-zero-downtime-deployment" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    dataPartitioning: `
    <h2 id="modal-heading">Data Partitioning</h2>
    
    <p class="modal-paragraph">
      Data partitioning involves dividing a database into distinct, independent parts to improve manageability, performance, and availability.
    </p>
    <p class="modal-paragraph">
      Imagine data partitioning as organizing a library into separate rooms, each holding different genres of books.
    </p>
    
    <a href="https://docs.microsoft.com/en-us/sql/relational-databases/partitions/partitioned-tables-and-indexes?view=sql-server-ver15" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    featureBranching: `
    <h2 id="modal-heading">Feature Branching</h2>
    
    <p class="modal-paragraph">
      Feature branching is a version control strategy where developers create a branch for each new feature, isolating development and making integration easier.
    </p>
    <p class="modal-paragraph">
      Think of feature branching as setting up individual workstations for each project in a workshop.
    </p>
    
    <a href="https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    deadlock: `
    <h2 id="modal-heading">Deadlock</h2>
    
    <p class="modal-paragraph">
      Deadlock is a situation in computing where two or more processes are each waiting for the other to release a resource, causing all of them to remain blocked.
    </p>
    <p class="modal-paragraph">
      Imagine deadlock as a stand-off in a narrow hallway where two people block each other's way and neither can move forward until one steps aside.
    </p>
    
    <a href="https://www.geeksforgeeks.org/deadlock-in-operating-system/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    microBatching: `
    <h2 id="modal-heading">Micro-batching</h2>
    
    <p class="modal-paragraph">
      Micro-batching is a processing technique where small groups of data are collected and processed together in short intervals.
    </p>
    <p class="modal-paragraph">
      Think of micro-batching as making mini-meals throughout the day instead of three large ones, optimizing energy levels and efficiency.
    </p>
    
    <a href="https://spark.apache.org/docs/latest/streaming-programming-guide.html#window-operations" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    domainDrivenDesign: `
    <h2 id="modal-heading">Domain-Driven Design</h2>
    
    <p class="modal-paragraph">
      Domain-Driven Design is an approach to software development that focuses on complex needs by connecting the implementation to an evolving model of the core business concepts.
    </p>
    <p class="modal-paragraph">
      Think of Domain-Driven Design as building a software model that mirrors real-life business scenarios, helping to solve actual problems effectively.
    </p>
    
    <a href="https://martinfowler.com/bliki/DomainDrivenDesign.html" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    apiVersioning: `
    <h2 id="modal-heading">API Versioning</h2>
    
    <p class="modal-paragraph">
      API Versioning is the process of assigning version numbers to different stages of API development to manage changes and ensure backward compatibility.
    </p>
    <p class="modal-paragraph">
      Imagine API versioning as a way of keeping a diary of changes to a recipe, allowing you to refer back to any version at any time.
    </p>
    
    <a href="https://www.mulesoft.com/resources/api/api-versioning-guide" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    distributedFileSystem: `
    <h2 id="modal-heading">Distributed File System (DFS)</h2>
    
    <p class="modal-paragraph">
      A Distributed File System is a network file system where data is stored across multiple servers but appears to the user as one single file system.
    </p>
    <p class="modal-paragraph">
      Think of a DFS as a public library system with multiple branches where books are spread out but accessible from any location.
    </p>
    
    <a href="https://www.ibm.com/docs/en/zos/2.1.0?topic=concepts-distributed-file-system" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    statefulWidget: `
    <h2 id="modal-heading">Stateful Widget</h2>
    
    <p class="modal-paragraph">
      A Stateful Widget in UI programming is a component that maintains state data across user sessions and redraws itself when the data changes.
    </p>
    <p class="modal-paragraph">
      Think of a stateful widget as a scorekeeper in a game, constantly updating the score based on the game's progress.
    </p>
    
    <a href="https://flutter.dev/docs/development/ui/widgets-intro" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    serverlessFunctions: `
    <h2 id="modal-heading">Serverless Functions</h2>
    
    <p class="modal-paragraph">
      Serverless functions are pieces of code that are executed by a cloud provider without requiring the developer to manage a server or runtime environment.
    </p>
    <p class="modal-paragraph">
      Imagine serverless functions as a catering service that delivers food directly to your event, without you needing to cook or clean.
    </p>
    
    <a href="https://aws.amazon.com/lambda/serverless-architectures-learn-more/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    edgeServices: `
    <h2 id="modal-heading">Edge Services</h2>
    
    <p class="modal-paragraph">
      Edge services are technologies that provide content, computing, and security to user devices at the edge of the network, closer to the user.
    </p>
    <p class="modal-paragraph">
      Think of edge services as local branches of a bank, offering faster and more personalized services than the main headquarters.
    </p>
    
    <a href="https://www.cloudflare.com/learning/edge/what-is-edge-computing/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    darkLaunch: `
    <h2 id="modal-heading">Dark Launch</h2>
    
    <p class="modal-paragraph">
      Dark launching is a technique where new features are released to a subset of users under real conditions without their knowledge.
    </p>
    <p class="modal-paragraph">
      Think of a dark launch as a soft opening for a restaurant, where new dishes are tested discreetly before the official menu launch.
    </p>
    
    <a href="https://launchdarkly.com/blog/guide-to-dark-launching/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    cloudSecurity: `
    <h2 id="modal-heading">Cloud Security</h2>
    
    <p class="modal-paragraph">
      Cloud security involves the procedures and technology that secure cloud computing environments against both external and internal cybersecurity threats.
    </p>
    <p class="modal-paragraph">
      Think of cloud security as the security measures at an airport, ensuring the safety of passengers and the integrity of flights.
    </p>
    
    <a href="https://www.cisco.com/c/en/us/solutions/enterprise-networks/cloud-security/index.html" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    scalability: `
    <h2 id="modal-heading">Scalability</h2>
    
    <p class="modal-paragraph">
      Scalability is the capability of a system, network, or process to handle a growing amount of work, or its potential to accommodate growth.
    </p>
    <p class="modal-paragraph">
      Think of scalability as the ability of a bridge to handle more traffic as the city grows.
    </p>
    
    <a href="https://azure.microsoft.com/en-us/overview/what-is-scalability/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    eventStreamProcessing: `
    <h2 id="modal-heading">Event Stream Processing</h2>
    
    <p class="modal-paragraph">
      Event Stream Processing involves analyzing and processing a continuous flow of events in real-time to detect patterns, trends, or anomalies.
    </p>
    <p class="modal-paragraph">
      Imagine event stream processing as monitoring a live news feed and immediately reacting to any breaking stories.
    </p>
    
    <a href="https://www.confluent.io/event-stream-processing/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    multiTenancy: `
    <h2 id="modal-heading">Multi-Tenancy</h2>
    
    <p class="modal-paragraph">
      Multi-tenancy is a software architecture where a single instance of software serves multiple customers or tenants, keeping their data separate and secure.
    </p>
    <p class="modal-paragraph">
      Think of multi-tenancy as an apartment building where each tenant has their own secure unit within the same structure.
    </p>
    
    <a href="https://www.redhat.com/en/topics/cloud-computing/what-is-multi-tenancy" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    dataLakesVsDataWarehouses: `
    <h2 id="modal-heading">Data Lakes vs Data Warehouses</h2>
    
    <p class="modal-paragraph">
      Data Lakes store raw data in its native format, while Data Warehouses store structured data optimized for query and analysis.
    </p>
    <p class="modal-paragraph">
      Imagine data lakes as vast, unfiltered collections of data and data warehouses as well-organized libraries ready for study.
    </p>
    
    <a href="https://aws.amazon.com/big-data/datalakes-and-analytics/data-lake-vs-data-warehouse/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    softwareContainers: `
    <h2 id="modal-heading">Software Containers</h2>
    
    <p class="modal-paragraph">
      Software containers package an application and its dependencies into a standardized unit for development, shipment, and deployment.
    </p>
    <p class="modal-paragraph">
      Think of containers as portable lunchboxes that hold everything needed for a meal, no matter where you eat it.
    </p>
    
    <a href="https://www.docker.com/resources/what-container/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    cloudOrchestration: `
    <h2 id="modal-heading">Cloud Orchestration</h2>
    
    <p class="modal-paragraph">
      Cloud Orchestration is the automated arrangement, coordination, and management of complex cloud services and processes.
    </p>
    <p class="modal-paragraph">
      Imagine cloud orchestration as a conductor directing an orchestra, ensuring each service plays its part in harmony.
    </p>
    
    <a href="https://www.vmware.com/topics/glossary/content/cloud-orchestration" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    networkSlicing: `
    <h2 id="modal-heading">Network Slicing</h2>
    
    <p class="modal-paragraph">
      Network Slicing allows multiple virtual networks to be created on top of a shared physical infrastructure, each tailored for specific use cases.
    </p>
    <p class="modal-paragraph">
      Think of network slicing as dividing a highway into dedicated lanes for different types of vehicles.
    </p>
    
    <a href="https://www.ericsson.com/en/5g/numerology/network-slicing" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    IoTEdgeComputing: `
    <h2 id="modal-heading">IoT Edge Computing</h2>
    
    <p class="modal-paragraph">
      IoT Edge Computing processes data at or near the location where it is generated in the Internet of Things, reducing latency and bandwidth use.
    </p>
    <p class="modal-paragraph">
      Imagine IoT Edge Computing as a smart home assistant making decisions locally rather than waiting for cloud instructions.
    </p>
    
    <a href="https://www.intel.com/content/www/us/en/internet-of-things/solutions/what-is-edge-computing.html" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    dataLakesAndWarehousesIntegration: `
    <h2 id="modal-heading">Data Lakes and Warehouses Integration</h2>
    
    <p class="modal-paragraph">
      Integrating Data Lakes and Data Warehouses involves combining raw and structured data storage solutions for comprehensive data management.
    </p>
    <p class="modal-paragraph">
      Think of this integration as blending an unorganized library with a curated archive, offering both raw data and refined insights.
    </p>
    
    <a href="https://www.dataversity.net/integrating-data-lakes-data-warehouses/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,

    machineLearningOperations: `
    <h2 id="modal-heading">Machine Learning Operations (MLOps)</h2>
    
    <p class="modal-paragraph">
      MLOps is the practice of applying DevOps principles to machine learning processes to streamline model development and deployment.
    </p>
    <p class="modal-paragraph">
      Imagine MLOps as a production line where AI models are continuously improved and deployed, just like software applications.
    </p>
    
    <a href="https://mlops.community/what-is-mlops/" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
  `,
    iteration: `
  <h2 id="modal-heading">Iteration</h2>

  <p class="modal-paragraph">
  Iteration is the process of repeating a set of operations or instructions in software development, refining the outcome with each cycle.
  </p>
  <p class="modal-paragraph">
  Think of iteration as a loop where each pass brings you closer to the perfect solution, whether it's fine-tuning code or improving a machine learning model.
  </p>

<a href="https://goodspeed.studio/glossary/what-is-iteration-iteration-explained" id="modal-link" target="_blank">⌁—— Learn more about Iteration ——⌁</a>
`



};

function filterCards() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const cards = document.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
        const title = cards[i].getElementsByClassName('card-title')[0];
        if (title.innerText.toLowerCase().indexOf(filter) > -1) {
            cards[i].style.display = '';
        } else {
            cards[i].style.display = 'none';
        }
    }
}
const cardContainer = document.getElementById('cardContainer');
function showModal(term) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = descriptions[term];
    modal.style.display = 'block';
    cardContainer.style.pointerEvents = 'none';
}

function readMore() {
    // Redirect to detailed explanation page (e.g., a blog or documentation)
    window.open('https://example.com/detailed-explanation', '_blank');
}

function showAbout() {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = '<h2>About</h2><strong>IMPORTANT: Bookmarking or Pinning this webpage would help you get a quick overview of anything related to tech in seconds! </strong><p>This "Dev Encyclopedia" is a simple project that simplifies things.</p><p>This website has almost all the commonly used technical terms, concepts and even programming-language specific jargons explained and links provided for further reading.</p><p>Most importantly, it is ad-free, so basically, the best encyclopedia everr! *excited. too much.*</p><p>Built with love, by Chenuli J.</p><img src="image/Chenuli Signature.png" />';
    modal.style.display = 'block';
}
function showBuilders() {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = '<h3>A Note from the Builder</h3><p>If you find a flaw, love to sponsor or need help with learning something, my inbox is open: <span>-></span> <a href="mailto:buzzpy123@gmail.com">buzzpy123@gmail.com</a></p><p>- I am a Python Developer especilizing in backend so my <strong> web design skills </strong> are <strong>terrible.</strong></p><p>- This project was built in a month, unlike Rome which took years to build. Which means this is on early stages of development, so why not to <strong>fork, star and contribute? </strong> </p>';
    modal.style.display = 'block';
}
function showSponsors() {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');

    modalBody.innerHTML = `
        <h3>Sponsors</h3>
        <p>You can sponsor this project via my Ko-Fi profile: <a href="https://ko-fi.com/buzzpy">ko-fi.com/buzzpy</a></p>
        <p>Once you make any donation, I will get in touch with you and make sure you get a place on this "Sponsors" page!</p>
        <div id="sponsor-info">
          <img src="https://media.licdn.com/dms/image/D5603AQHJyX4hVmqjpQ/profile-displayphoto-shrink_200_200/0/1715316807453?e=2147483647&v=beta&t=7_xJ7ANI71x0vnvp1_2vj86V0kVvNDQGGflUzLfQBBk" alt="Malith J. Don" id="sponsor-image" />
          <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Flk.linkedin.com%2Fin%2Fmalith-jayasinghe-484509180&psig=AOvVaw3pVLfvt056d-wG57Gc361x&ust=1723739678386000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCOijn-v09IcDFQAAAAAdAAAAABAK" id="sponsor-name">Malith J. Don</a>
        </div>
      `;
    modal.style.display = 'block';
}



// to close the modal
function closeModal(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
        setTimeout(() => {
            cardContainer.style.pointerEvents = 'all';
        }, 500)
    }
}

function switchStyles() {
    let stylesheet = document.getElementById('themeStylesheet');

    if (stylesheet.getAttribute('href') === 'dark-mode.css') {
        stylesheet.setAttribute('href', 'style.css');
    } else {
        stylesheet.setAttribute('href', 'dark-mode.css');
    }
}

// Add event listeners for both click and touchstart
window.addEventListener('click', closeModal);
window.addEventListener('touchstart', closeModal);

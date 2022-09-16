1. What is ‘Version Control System’? 
Version_Control_Git.

A version control system (VCS) is a program that records any changes to a file or set of data so that it is possible to restore it to a previous version if necessary. This guarantees that everyone on the team is working on the most up-to-date version of the file. 

2. Differentiate Between Centralized and Distributed Version Control System
VersionControlSystemTypes

 In a Centralized Version Control System: 

It stores all file versions on a central server.
No developer has a complete copy of the local system's files.
If the project's central server fails, you will lose all the project's data.
In a Distributed Version Control System:

Every developer has a copy of all the code versions on their computer.
Improves the ability to work offline and eliminates the need for a single backup location.
Even if the server crashes, there is no danger.
Full Stack Java Developer Course
In Partnership with HIRIST and HackerEarthEXPLORE COURSEFull Stack Java Developer Course
3. Explain Git Push and Git Pull
Git_Push

Git push is a command that pushes the contents of a local repository to a remote repository. It runs a push after it has changed a local repository to share the changes with remote team members.

Git_Pull.

Git pull is a command that pulls changes from a remote repository and merges them into the local repository. It's made up of two commands: git fetch followed by git merge.

4. Name a few Git Commands and function
Git Config - Configure the username and email address
Git init - Initialize a local Git repository
Git Add - Add one or more files to the staging area
Git Diff - View the changes made to the file
Git Commit - Commit changes to the head but not to the remote repository
Git reset - Undo local changes to the state of a Git repo
Git Status - Displays the state of the working directory and staging area
Git Merge - Merge a branch into an active branch
Git Push - Upload content from the local repository to a remote repository
Git Pull - Fetch and download content from a remote repository
Also Read: How to Become a Front End Developer?

5. Explain the Difference Between Git Pull and Git Fetch
Git Fetch 
It downloads only new data from a remote repository using Git fetch
It does not include any of this new information in your working files
To update the remote-tracking branches, run Git fetch at any time
Command - git fetch origin
              git fetch –-all

Git Pull
Git pulls new data and integrates it with the current working files, updating the current HEAD branch with the latest modifications from the remote server
It attempts to combine remote modifications with those made locally
Command - git pull origin master
FREE GIT Training
Learn the basics of GITENROLL NOWFREE GIT Training
6. What is a Merge Conflict in Git and how can it be resolved?
When you have merging branches with opposing commits, a merge conflict occurs, and Git needs your help to select which changes to include in the final merge.

Resolve using GitHub conflict editor
When competing for line changes, i.e. when users make different modifications to the same line of the same file on different branches in your Git repository, this is done to avoid merging conflicts.

Step 1: Under your repository name, click Pull requests. 

GitConflictEditor_1

Step 2: Click the pull request with the merge conflict you'd like to resolve in the "Pull Requests" list. Click Resolve conflicts near the bottom of your pull request.

GitConflictEditor_2.

Step 3: Decide whether you want to maintain just your branch's changes, only the other branch's changes, or make a completely new modification that includes both branches' changes. 

Step 4: Delete the conflict markers and make the changes you want in the final merge. 

GitConflictEditor_3.

Step 5: If your file has over one merge conflict, scroll down to the next set of conflict markers and repeat steps four and five to resolve the issue. Mark the file as resolved once you've resolved all the conflicts.

GitConflictEditor_4.

Step 6: If you have more than one file with a conflict, go to the left side of the screen and select the next file you wish to edit under "conflicting files". Then repeat the above steps until you've resolved all the merge conflicts in your pull request.

GitConflictEditor_5

Step 7: Click Commit merge once you've resolved all of your merge conflicts. It merges the entire base branch into your head branch as a result of this. Click Merge pull request to combine your pull requests.

GitConflictEditor_6.

Resolve the issue with a local clone of the repository and commit the update to your GitHub branch.

It resolves all other forms of merge conflicts using this method. To push the update, you can use the command line or a program like GitHub desktop.

Step1: Open Git Bash. Go to the local Git repository where the merge conflict exists.

GitConflictBash_1

Step2: Make a list of the files that have been affected by the merge dispute. In this case, there is a merge conflict in the file styleguide.md.

GitConflictBash_2.

Step 3: Navigate to the file with merge conflicts in any text editor, such as Sublime Text or Atom. Look for the conflict marker "<<<<<<" if you want to see where the merging conflict started in your file.

After the line "<<<<<<HEAD", you'll see the changes from the base branch.

Step 4: Next you’ll see =======, which divides your changes from the changes in the other branch, followed by >>>>>>> BRANCH-NAME

Step 5: Decide whether you want to simplt maintain your branch's changes, only the other branch's changes, or make a completely new modification that includes both branches' changes.

Step 6: Delete the conflict markers, <<<<<, =====, >>>>> and make changes you want in the final merge. 

Step 7: Add or stage your changes. Commit your changes with a comment. 

You may now combine the branches using the command line, or you can upload your changes to your GitHub remote repository and merge them in a pull request.

Also Read: Git Rebase vs. Merge

7. What is Git Stash?
GitStash

FREE Java Certification Training
Learn A-Z of Java like never beforeENROLL NOWFREE Java Certification Training
8. Differentiate Between Git Merge and Git Rebase
Assume you're working on a new feature in a dedicated branch, and another team member pushes new commits to the master branch. 

Merge 
Git_Merge.

Merge is used to incorporate new commits into your feature branch. Every time you need to include modifications, this requires an extra merging commit. It taints the history of your feature branch.

Rebase 
Git_Rebase

You can rebase the feature branch into master instead of merging it. This incorporates all the new commits in the master branch. It also re-writes the project history by creating brand new commits for each commit in the original branch.

This brings us to the end of Git Questions. These are some of the most important Front End Interview Questions related to Version Control.

HTML Interview Questions
HTML is an integral part of Frontend Development. The following set of Frontend Developer Interview Questions are based on HTML. 

1. What Is an Attribute in HTML?
<h1>Hello</h1>

<p>Welcome</p>

<br>

<h2>Click on the button to subscribe</h2>

<button>Subscribe</button>

Attributes are the properties that can be added to an HTML tag that change the way the tag behaves or is displayed.
It adds attributes right after the name of the HTML tag, inside the brackets. 
2. What is Marquee in HTML?
The marquee is used to scroll the text on the webpage.
It automatically scrolls the image or text up, down, left, or right.
You must use <marquee> tags to apply for a marquee.
3. What is Semantic HTML? How does it work?
Semantic HTML is a type of coding.
It is the use of HTML markup to emphasize the content's semantics or meaning.
Consider the following scenario: The <b></b> tag is not used for bold statements in semantic HTML, while the <i></i> element is used for italic.
Instead, you use the <em></em> and <strong></strong> tags.
Also Read: An Ultimate Guide on How to Start Coding 2022

4. How do you Display a Table on an HTML Webpage?
HTML_Table

To display data in a tabular format, use the HTML table> tag.
It's also utilized to control the page's layout, such as the header section, navigation bar, body content, and footer section.
Free Course: Java Hibernate Fundamentals
Learn Java Hibernate Basic Skills for FreeENROLL NOWFree Course: Java Hibernate Fundamentals
5. What is SVG in HTML?
<svg width="100" height="100">

      <circle cx="50" cy="50" r="40" stroke="yellow" stroke-width="4" fill="red" />

    </svg>

HTML SVG is a markup language that describes vector and raster graphics. XML text files define SVG pictures and associated behaviors.
It's typically used for X, Y coordinate system diagrams like pie charts and 2-Dimensional graphs.
6. In HTML, how do you separate a section of text?
In HTML, you use the following tags to divide a chunk of text:

<br> tag–It's a character that's used to break up a line of text. It transfers the text flow to a new line by breaking the existing line.

<p> tag–This tag is used to create a text paragraph.

<blockquote> This tag is used to indicate big quoted passages.

7. How do you Create Nested Web Pages in HTML?
<!DOCTYPE html>

    <html>

      <body>

        <h2>HTML Iframes example</h2>

        <p>

          specify the size of the iframe using the height and width attributes:

        </p>

        <iframe src="https://simplilearn.com/" height="600" width="800"></iframe>

      </body>

    </html>

You refer a webpage within a webpage to as a nested web page.
Using HTML's built-in iframe tag, you can create nested web pages.
8. Differentiate Between Ordered List and Unordered List
<!DOCTYPE html>

    <html>

      <body>

        <h2>HTML List Example</h2>

        <ul>

          <li>Coffee</li>

          <li>Tea</li>

          <li>Milk</li>

        </ul>

        <ol>

          <li>Coffee</li>

          <li>Tea</li>

          <li>Milk</li>

        </ol>

      </body>

    </html>

HTML_List

An unordered list uses <ul> </ul> tags and each element of the list is written between <li> </li> tags.
An ordered list uses <ol> </ol> tags and each element of the list is written between <li> </li> tags.
Now that we are familiar with HTML questions, let’s look at the next set of Frontend Developer Interview Questions, CSS 

CSS Interview Questions
1. What is the best way to include CSS Styling in HTML?
There are three methods for incorporating CSS into HTML:

You use inline CSS when only a single element needs to be styled or when a little quantity of styling is required.
External Style Sheet: When a style is applied to many elements or HTML pages, it employs an external style sheet.
Internal Style Sheet: An internal style sheet is employed when a single HTML document has a distinct style and numerous elements.
Also Read: 11 Secrets about CSS That You Mustn’t Miss

Post Graduate Program: Full Stack Web Development
in Collaboration with Caltech CTMEENROLL NOWPost Graduate Program: Full Stack Web Development
2. Mention the different types of CSS Selectors
//Universal Selector

* {

        color: "green";

        font-size: 20px;

        line-height: 25px;

      } 

//Element type Selector 

  ul {

    line-style: none;

    border: solid 1px #ccc;

  } 

// ID Selector 

#container {

    width: 960px;

    margin: 0 auto;

  } 

  <div id="container"></div>

//Class Selector 

 .box {

    padding: 10px;

    margin: 10px;

    width: 240px;

  }  

  <div class="box"></div>

//Descendent Combinator

 #container .box {

    float: left;

    padding-bottom: 15px;

}  

<div id="container">

    <div class="box"></div>    

    <div class="box-2"></div>

</div> 

<div class=”box”></div>

//Child Combinator

 #container> .box {

    float: left;

    padding-bottom: 15px;

}

<div id="container">

    <div class="box"></div>   

    <div>

        <div class="box"></div>

    </div>

</div> 

// General Sibling Combinator

h2 ~ p {

    margin-bottom: 20px;

}

<h2>Title</h2>

<p>Paragraph example.</p>

<div class=”box”>

    <p>Paragraph example.</p>

</div>

//Attribute Selector 

input [type=”text”] {

    background-color: #444;

    width: 200px;

}

<input type="text">

3. What are Sass, Less, and Stylus?
Sass - Sass is the acronym for “Syntactically Awesome Style Sheets”. A ‘$’ sign commonly precedes it.

$font-color: #fff 

        $bg-color: #00f       
#box

          color: $font-color

          background: $bg-color

Less - LESS is an acronym for “Leaner Stylesheets”. Less uses ‘@’ to define the variables.

@font-color: #fff;

          @bg-color: #00f          

          #box{

            color: @font-color;

            background: @bg-color;

          }

Stylus - Stylus offers a great deal of flexibility in writing syntax. It doesn’t use @ or $ for defining variables. 

font-color= #fff;

        bg-color = #00f;    
#box {

          color: font-color;

          background: bg-color; }

4. Explain Box Sizing Property
Box Sizing property defines how the height and width of a box are calculated. 

Content Box - The default width and height apply only to the element’s content. Padding and border are added outside the box.

Padding Box - You add the dimensions to both element’s content and padding. It adds the border outside the box.

Border Box - The dimensions are added to the content, padding, and border. 

5. What are the different ways to hide an Element using CSS?
display: none

Hides the content and doesn’t store it in the DOM

visibility: hidden

It adds the element to the DOM and takes up space. However, it is not visible to the user

position: absolute

You can make the element appear outside the screen

New Course: Full Stack Development for Beginners
Learn Git Command, Angular, NodeJS, Maven & MoreENROLL NOWNew Course: Full Stack Development for Beginners
6. What does ‘Important’ in CSS mean?
The ‘important’ keyword indicates the highest precedence, and it overrides the cascaded property.

p {

                color:blue !important;

            }

            #thing {

                color: green;

            }

            
<p id="thing">Will be BLUE.</p> 

7. What are CSS Sprites?
Since each image sends out an HTTP request separately, a web page with a high number of photos takes longer to load.
CSS sprites are used to minimize the loading time of a web page by combining multiple small pictures into a single image.
It decreases the number of HTTP requests and, as a result, the time it takes for pages to load.
8. Which Property is used to Underline, Strikethrough, and Overline Text?
CSS_Text

text-style

Text-type

text-decoration

Text-transform

JavaScript Interview Questions
JavaScript is used to add user interaction to an application. The following section targets the commonly asked JavaScript Frontend Developer Interview Questions. 

1. What are the various Data Types in JavaScript?
JavaScript has many data types to provide the basic functionality needed for a web application. They are mentioned in this table. 

JavaScript_DataTypes.

Free Course: JavaScript for Beginners
Learn the Basics of JavaScriptENROLL NOWFree Course: JavaScript for Beginners
2. What is Callback in JavaScript?
JavaScript_CallBack

A callback is a JavaScript function that is sent as an argument or parameter to another function.

You call this function whenever the function to which it is provided is called.

3. What’s the difference between Function Declaration and Function Expression?
Function Declaration 
function abc(){

    return 5;

}

Within the main JavaScript code, it declares this as a separate statement. It is possible to invoke it before the function has been defined. It provides improved code readability.

Function Expression 
var a = function abc(){

    return

}

It is created inside an expression or some other construct. It is generally used when there is a need for a conditional declaration of a function. 

4. What do you understand about Cookies in JavaScript? 
A cookie is a little piece of data sent by a website and kept on the user's computer by the web browser that was used to access the page.

Cookies are used to remember information for later use and to keep track of a website's browsing activities.

The simplest approach to make a cookie with JavaScript is to do it as follows:

document.cookie = "key1 = value1; key2 = value2; expires = date";

To delete a cookie, you can just set an expiration date and time; specifying the correct path of the cookie is a good practice. 

function delete_cookie(name) {

      document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";

    }

5. What are Closures in JavaScript?
Closures in JavaScript are a feature where an inner function has access to the outer function’s variables.

function outer_func()

{

    var b =10;

    function inner_func(){

        var a =20;

        console.log(a+b);

    }

    return inner;

}

A closure has three scope chains –

Has access to the variable defined within its curly braces, which is its scope.
Has access to the outer functions' variables.
Has the ability to access global variables.
Full Stack Web Developer Course
To become an expert in MEAN StackVIEW COURSEFull Stack Web Developer Course
6. What are Imports and Exports in JavaScript?
Export 
 export const sqrt = Math.sqrt;

export function square(x) {

  return x * x;

}

export function diag(x, y) {

  return sqrt(square(x) + square(y));

}

This file exports two functions that calculate the squares and diagonal of the input respectively. 

Import 
import { square, diag } from "calc";

console.log(square(4)); // 16

    console.log(diag(4, 3)); // 5

Here you import those functions and pass input to those functions to calculate square and diagonal.

7. What is the difference between Undefined, Undeclared, and Null in JavaScript?
var x 

console.log(x) //Undefined variable

var y=NULL

console.log(y) //Null Variable

console.log(z) //Undeclared Variable

Undefined - Undefined means a variable has been declared but a value has not yet been assigned to that variable.

Null - Null is an assignment value that you can assign to any variable that is meant to contain no value.

Undeclared - Variables that are not declared or that do not exist in a program or application.

8. What is the best way to remove Duplicates from a JavaScript Array?
You can delete duplicates from a JavaScript array in one of two ways:

By employing the filtering technique - Three arguments are required to call the filter() function. These are the array, current element, and current element index.

The For loop is used to store all the repeated elements in an empty array.

ReactJS Interview Questions
React is a popular Frontend JavaScript library. It is vital to have a good understanding of a JavaScript framework or library for app development. 

The following segment of Frontend Developer Interview Questions comprises React questions. 

1. What Is JSX?
React_JSX

JSX is a JavaScript syntactic extension. It's a term used in React to describe how the user interface should seem.
You can write HTML structures in the same file as JavaScript code by utilizing JSX.
Because it avoids the use of complicated JS DOM structures, JSX makes the code easier to comprehend and debug.
2. What is Virtual DOM?
React_DOM

The Virtual DOM is the lightweight version of the Real DOM that React retains in memory.
Because nothing is drawn on the screen when processing Real DOM, it is substantially slower than handling virtual DOM.
When an object's state changes, Virtual DOM updates only that object in the real DOM rather than all of them.
Free ReactJS for Beginners Course
Master the Basics of ReactJSSTART LEARNINGFree ReactJS for Beginners Course
3. What are React Extensions? Name a few of them.
React is more than just a UI framework; it contains a slew of extensions that cover the entire application architecture.
It has a server-side rendering feature.
Supports the creation of mobile apps.
Flux and Redux, among other things, have been added to the mix.
React_Extensions

Flux is Facebook's application architecture for developing online applications.
React Native allows you to create mobile apps entirely in JavaScript.
4. What is an Event in React? How do you create one?
React_Event.

An event is an action triggered by the user or any system event, like pressing a key, a mouse key, etc. 

5. What are Components in ReactJS?
React_Components

Components are the building blocks of a React application that represent a part of the user interface.

A component used in one area of the application can be reused in another area. This helps speed up the development process.
A component can contain several other components.
A component must define a render method that specifies how the component renders to the DOM in its minimal form.
A component can also receive props. These are properties passed by its parent to specify values.
6. What is a State in React? How do you implement it?
A state is an object that stores the values of properties belonging to a component that could change over a period of time. 

React_State

Here are a few features of a State - 

You can change a state as a result of a user's action or changes in the network.
React re-renders the component to the browser whenever the state of an object changes.
You initialize the state object in the constructor.
It can store multiple properties in the state object.
this.setState() is used to alter the state object's value.
The setState() function merges the new and old state and the previous state in a shallow merge.
Free Course: Programming Fundamentals
Learn the Basics of ProgrammingENROLL NOWFree Course: Programming Fundamentals
7. What is a Higher Order and Pure Components in React?
Higher Order Components 
A higher-order component is a function that takes a component and returns a new component.
It facilitates reusing of component logic.
 const NewComponent = higherOrderComponent(originalComponent)

Pure Components 
React.Component is the base class for React components. React.PureComponent is a variation of React.Component class and does a shallow comparison of props and state.
A React component can be considered pure if it renders the same output for the same state and props.
8. How do you Implement React Routing?
React_Routing.

Considering that you have the App, About, and Contact components, routing can be implemented using the code shown above. 

Angular Interview Questions 
If you are well versed in the Angular Framework, then these Frontend Developer Interview Questions on Angular will be helpful. 

Also Read: How to Learn Angular: Benefits of Angular and Certifications

1. What is Data Binding and how does it work? Which Data Binding methods does Angular use?
Data binding is a method of manipulating web page elements through the usage of a web browser. It's utilized in interactive elements like forms, calculators, tutorials, and games on web pages.

DataBinding-Angular_Interview_Questions

Two-way Data Binding is used by Angular. Any modifications made to the user interface mirror the elements in the model state and vice versa. 

Free Angular Basics Course
Become a Programming Pro With the Free CourseENROLL NOWFree Angular Basics Course
2. What is Typescript? 
TypeScript

TypeScript is an object-oriented programming language that is a superset of JavaScript. Simply put, it's JavaScript with a slew of other remarkable capabilities. All TypeScript code is eventually compiled to JavaScript.

TypeScript supports all JavaScript libraries and frameworks, to name a few essential characteristics. Angular is a single-page application framework written in JavaScript.
With the rise in code complexity, JavaScript needed to meet OOP's criteria, which led to the creation of TypeScript.
TypeScript aids in the production of faster code, which improves performance.
3. What is AoT Compilation? How is it different from JiT? 
Ahead of Time (AOT), compilation translates your code as it is being built, rather than when it is downloaded and run by the browser. This guarantees that the browser renders content quickly. Include the —aot option with the ng build or ng serve commands to specify AOT compilation. 

The Just-in-Time (JIT) compilation technique converts computer code to machine code while it is being executed or run. Dynamic compilation is another name for it. When you use the ng build or ng serve CLI commands, by default it uses JIT compilation.

4. What are Pipes in Angular? Explain its types
Angular_Pipes.

Pipes are simple functions that accept an input value, process it, and return an altered value as an output, in a more technical sense. Angular has several built-in pipes. You can, however, make custom pipes to meet your specific requirements.

The following are some major features:

The pipe "|" symbol is used to define pipes.
Pipes can be linked together in a chain.
The colon (:) sign can be used to provide arguments to pipes.
Pure Pipes 
These are pipes with just pure functions. As a result, a pure pipe uses no internal state, and the output remains constant as long as the parameters provided remain constant. When Angular detects a change in the arguments being given, it invokes the pipe. Throughout all components, a single instance of the pure pipe is used.

Impure Pipes 
Angular calls an impure pipe for every change detection cycle, independent of the change in the input fields. For these pipes, it produces multiple pipe instances. The inputs to these pipes can be changed.

All pipes are pure by default. On the other hand, the pure attribute can be used to identify impure pipes, as demonstrated below.

@Pipe({

  name: 'demopipe',

  pure : true/false 

})

export class DemopipePipe implements PipeTransform {

5. In Angular, what are Promises and Observables?
While both concepts in Angular deal with asynchronous events, Promises deal with one at a time, whereas observables deal with a sequence of events over time.

Promises are objects that emit only one value at a time. They go into effect right once they're created and can't be stopped. They are Promises to the child Push Errors.
Observables - Observables are only executed when the subscribe() method is used to subscribe to them. Over a period, they emit multiple values. They aid in the execution of tasks such as forEach, filter, and retry, among others. Subscribers receive errors as a result of their actions. The listener stops receiving new data when they perform the unsubscribe() method.
6. What are Form Control and Form Groups?
Form Control 
Angular_FormControl

It enables validation through the Form Control class.
It produces a new instance of this class for each input field.
These instances allow you to verify the field's values to see if they've been touched, untouched, or dirty.
Form Group
Angular_FormGroup.

A group of controls is represented by the FormGroup class.
Multiple control groups are possible in a form.
If all the controls are valid, the Form Group class returns True.
It also includes a list of all validation problems.
7. What is Eager and Lazy Loading?
Eager loading - The default module-loading approach is eager loading. Eager loading feature modules are loaded before the program starts. You usually reserve this for applications that aren't too large.

Lazy Loading - When there is a demand, lazy loading dynamically loads the feature modules. This speeds up the application. It's utilized in larger applications where all the modules aren't required right at the start.

8. In Angular, what is String Interpolation?
String interpolation is a one-way data-binding method that delivers data from TypeScript code to an HTML view. Double curly braces are used to indicate it. This template expression allows the data from the component to be displayed in the view.

{{ data }}

Generic Interview Questions
Not all questions will be core technical. The interviewer would also like to understand your take on certain Frontend related questions or suggestions. The last segment of the Frontend Developer Interview Questions article focuses on some generic questions. 

1. What are the Advantages of TypeScript Over JavaScript?
TypeScriptvsJavaScript.

TypeScript points out compilation errors during development.
Supports strongly typed and static typing.
Better features like interfaces, generics, and more.
Provides excellent tooling support with IntelliSense.
2. How is a Web Developer different from a Web Designer?
Web Developer
Web Designer
Build web applications using languages like HTML, CSS, and JavaScript

Design web applications using tools like Adobe Photoshop, Sketch

They frequently use JavaScript frameworks for more streamlined development

They frequently use Adobe Creative Cloud for most of the design needs

It requires good coding skills

It requires good graphic design skills

Have to keep themselves up to date with the latest web frameworks and libraries

Have to keep themselves up to date with the latest design trends and color palettes

3. What is Backend Development?
Backend_Development.

Web development that occurs at the back end of programs is accurately termed back end development. Back-end development covers server-side web application logic and integration and activities, like writing APIs, creating libraries, and working with system components instead of frontend development, which focuses on customer-facing services and programs. Back-end developers build code that allows a database and an application to communicate with one another. Backend developers are in charge of the back end of a website, which includes servers, databases, and apps, and they control what you don't see.

Also Read: How to Become a Backend Developer?

4. What is CoffeeScript?
CoffeeScript.

CoffeeScript is a JavaScript-compiling programming language.
It's an attempt to demonstrate the positive points of JavaScript straightforwardly.
It also makes it easier to develop JavaScript code by providing a more consistent syntax and avoiding the peculiarities of the JavaScript language.
5. How would you ensure a web design is user-friendly?
A frontend developer should work closely with the user experience team to visualize the design for the app.
They should also test the web application and take user inputs.
The app developed should be compatible with different platforms and must ultimately run smoothly on the mobile phone.
6. Would you recommend a Web Designer Role or a Web Developer Role?
It is really a matter of preference. 

If you are inclined towards the creative aspect, you should go for a Web/UX Designer role. 
If you are inclined towards the coding aspect, you should go for the Web Developer role.  
7. How would you increase Page Performance?
Performance_FrontendInterviewQuestions.

You should clean the HTML document up
External HTTP requests could be minimized
Sprites, compressed images, and smaller images can be included
At the bottom of the page, include the JavaScript
Optimize CSS, JavaScript, and HTML
Caching and CDN
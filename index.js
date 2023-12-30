let express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.use(express.urlencoded({extended : true}));

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));

app.set(express.static(path.join(__dirname , "public")));

app.listen(port , ()=>{
    console.log("Successfully reached on port");
});

app.get("/posts" ,(req,res) =>{
    res.render("home.ejs" , {posts});
});

app.get("/posts/new" ,(req,res) =>{
    res.render("new.ejs");
});

app.post("/posts" ,(req,res) =>{
    let {username , que , ans} = req.body;
    let id = Math.floor(10000000 + Math.random() * 90000000);
    let newpost = {
        id : id ,
        username : username,
        que : que ,
        ans : ans
    }
    console.log(newpost);
    posts.push(newpost);
    res.redirect("/posts");
    console.log(id);
});

app.get("/posts/:id" , (req,res) =>{
    let id = req.params.id;
    let post = posts.find((p) => p.id == id);
    if(post){
        res.render("details.ejs" , {post});
    }
    else{
        return res.status(404).send("Post not found");
    }
});

app.get("/posts/:id/delete" , (req, res) =>{
    let id = req.params.id;
    let index = posts.findIndex((p) => p.id == id);
    posts.splice(index , 1);
    res.redirect("/posts");
});

app.get("/posts/:id/update", (req, res) => {
    let id = req.params.id;
    let post = posts.find((p) => p.id == id);
    if (post) {
        res.render("edit.ejs", { post });
    } else {
        return res.status(404).send("Post not found");
    }
});

app.post("/posts/:id/update", (req, res) => {
    let id = req.params.id;
    let { ans } = req.body;
    let post = posts.find((p) => p.id == id);
    if (post) {
        post.ans = ans;
        res.redirect("/posts");
    } else {
        return res.status(404).send("Post not found");
    }
});

let posts = [
    {
        id: 12345678,
        username: "Tejas",
        que: "What is the purpose of the 'var' keyword in JavaScript?",
        ans: "The 'var' keyword is used for variable declaration in JavaScript. However, it has some scope-related issues and is now largely replaced by 'let' and 'const'."
    },
    {
        id: 12345679,
        username: "Shubham",
        que: "Explain the concept of 'callback' functions in Node.js.",
        ans: "In Node.js, a callback function is a function passed as an argument to another function. It is then executed after the completion of a given task or at the time of an event."
    },
    {
        id: 12345677,
        username: "Aman",
        que: "What is the difference between '== and '===' in JavaScript?",
        ans: "In JavaScript, '==' is the equality operator, which performs type coercion if the operands are of different types. '===' is the strict equality operator, which does not perform type coercion and checks both value and type equality."
    },
    {
        id: 98765432,
        username: "Alex",
        que: "Explain the concept of 'RESTful APIs'.",
        ans: "RESTful APIs (Representational State Transfer) are a set of architectural principles for designing networked applications. They use standard HTTP methods (GET, POST, PUT, DELETE) to perform operations on resources identified by URLs."
    },
    {
        id: 34567890,
        username: "Emily",
        que: "What is the purpose of the 'git pull' command?",
        ans: "The 'git pull' command is used to fetch changes from a remote repository and merge them into the current branch. It is a combination of 'git fetch' and 'git merge'."
    },
    {
        id: 23456789,
        username: "Kevin",
        que: "Explain the concept of 'hoisting' in JavaScript.",
        ans: "Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, allowing them to be used before they are declared."
    },
    {
        id: 56789012,
        username: "Mia",
        que: "What is the purpose of the 'try...catch' statement in JavaScript?",
        ans: "The 'try...catch' statement is used for error handling in JavaScript. Code that may cause an error is placed in the 'try' block, and if an error occurs, it is caught and handled in the 'catch' block."
    },
    {
        id: 12345679,
        username: "Shubham",
        que: "What is the role of the 'package.json' file in Node.js projects?",
        ans: "The 'package.json' file in Node.js projects contains metadata about the project, dependencies, scripts, and other configuration details. It is used by npm (Node Package Manager) to manage project dependencies and scripts."
    },
    {
        id: 10987654,
        username: "Noah",
        que: "Explain the concept of 'asynchronous programming' in JavaScript.",
        ans: "Asynchronous programming in JavaScript allows tasks to be executed concurrently without waiting for the completion of each other. It is commonly achieved using callbacks, promises, and async/await."
    },
    {
        id: 65432109,
        username: "Lily",
        que: "How does 'localStorage' differ from 'sessionStorage' in web browsers?",
        ans: "'localStorage' and 'sessionStorage' are both web storage solutions in browsers. The main difference is that data stored in 'localStorage' persists even after the browser is closed and reopened, while data in 'sessionStorage' is only available for the duration of the page session."
    },
    {
        id: 87654321,
        username: "Ethan",
        que: "What is the purpose of the 'SQL JOIN' clause?",
        ans: "The 'SQL JOIN' clause is used to combine rows from two or more tables based on a related column between them. It allows for the retrieval of data from multiple tables in a single query."
    },
    {
        id: 34567890,
        username: "Emily",
        que: "What is the purpose of the 'git pull' command?",
        ans: "The 'git pull' command is used to fetch changes from a remote repository and merge them into the current branch. It is a combination of 'git fetch' and 'git merge'."
    },
];

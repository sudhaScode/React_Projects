console.log("Lets dive in to express");
const express = require('express');
const cors = require('cors'); //allows middlware auths or cross origin allow

let todoList = ["Listen", "Speak", "write"];
const PORT = 8081;

const app = express();
app.use(express.json())// makes to use json to parse request body

app.get("/todos", (req,res)=>{
    //res.json(todoList);
    //res.location("/user/todos");
    const redirectLocation = `/user/todos`;
    res.set("Location", redirectLocation)

    res.status(302).json("Hey, I changed my location to this endpoint, /user/todos. You can catch me up there. Love, /todos")
    //res.redirect("/user/todos")
});
app.get("/user/todos", (req,res)=>{
    //res.json(todoList);
    res.send(todoList)
})

app.post("/todos", (req, res)=>{
    //console.log(req)
   const task = req.body.name;
   todoList.push(task);
   console.log(todoList)
   res.status(201).json("task created");
});
app.delete("/todos", (req, res)=>{
    const task = req.body.name;
    console.log(todoList)
    const index = todoList.findIndex((name)=>name === task);
    todoList.splice(index,1);
    console.log(todoList)
    res.status(204).send("NO content");
})

//@ to serve any other than hanlded mehtods for same end point
app.all("/todos", (request, response) => { 

    response.status(501).send("Not implemented")

})
//@ to serve any other url/endpoints other thanh defined
app.all("*", (request, response) => {

    response.status(404);

    response.send("it's bad  404 we can't serve you>");

})


app.listen(PORT, ()=>{console.log(`Server listening and serves the requests at ${PORT}`)})


//curl -X POST -d '{"name":"Plan for next week"}' http://localhost:8081/todos -H 'content-type:application/json'

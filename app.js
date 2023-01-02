const express = require("express");

const app = express();

app.get("/",function(req,resp){
    resp.sendFile("home.html",{root:__dirname});
});

app.get("/schedule",function(req,resp){
    resp.sendFile("sch.html",{root:__dirname});
});

app.listen(5500);
console.log("Server is running at port 5500");
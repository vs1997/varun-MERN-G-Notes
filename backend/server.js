// (1)* Import the express package
const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");

// (2)* Create the object of imported package
const app = express();
dotenv.config();

// (4)* fetch data from db using endpoint
app.get('/', (req, res) =>{
    res.send("API is running....")
})

app.get('/api/notes',(req,res) => {
    res.json(notes);
})

app.get('/api/notes/:id',(req,res) => {
    const note = notes.find((n) => n.id === req.params.id);
    console.log(req.params,"PARAMS")
    const noteStore = [note];
    const noteCount = noteStore.length;
    res.send({data:[note], Count:noteCount});
})


const PORT = process.env.PORT || 7070;
// (3)* Created the web-server
app.listen(PORT, console.log(`server started on PORT ${PORT}`));
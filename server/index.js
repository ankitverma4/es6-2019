import express from 'express';

let app = express();

app.get('/', async(req, res ) => {
    res.send("Hello there");
})


app.listen(3000, () =>{
    console.log("server running at 3000");
})
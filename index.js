import express from "express";
import axios from "axios";

const port = 3000;
const app = express();

const url = "";
const config = "";
const apiKey = "";


app.use(express.static("public"));

app.get("/", (req,res) => {
  try {
    res.render("index.ejs")
  } catch(error) {
    console.error(error);
  }
  
});

app.listen(port, ()=>{

  console.log(`Server is running on port ${port}`);
})

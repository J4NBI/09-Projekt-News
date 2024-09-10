import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const port = 3000;
const app = express();

const url = "";
const config = "";
const apiKey = "";


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req,res) => {
  try {
    res.render("index.ejs")
  } catch(error) {
    console.error(error);
  }
  
});

app.post("/news", async (req, res) => {
  const body = req.body;
  try {
    const result = await axios.get(`https://www.tagesschau.de/api2u/news/?regions=${body.bundesland}&ressort=${body.themengebiet}`) 
    console.log(result.data.news);
    res.render("index.ejs", { content: result.data.news})
  } catch(error) {
    console.error(error);
  }
})

app.listen(port, ()=>{

  console.log(`Server is running on port ${port}`);
})

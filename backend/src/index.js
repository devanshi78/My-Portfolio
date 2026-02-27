import express from "express";
import dotenv from "dotenv";
import router from "./routes/contact.route.js";

dotenv.config();

const app = express();
const port = 5000;

app.use(express.json());

app.use("/api",router);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(port,(error) => {
    if(!error){
        console.log('Server Start.');
        console.log('http://localhost:'+port);
    }
})
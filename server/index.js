import express from 'express';
import "dotenv/config"
import cors from "cors"
import dbconnect from './db/Databas.js';
import connectcloud from './config/CLudnary.js';
import cookieParser from "cookie-parser"
import useroutes from './routes/userRoutes.js';
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors())



const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("serve working");
});
app.use("/cloth/v1/user",useroutes)

const server = () => {
  dbconnect()
  connectcloud()
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

server();

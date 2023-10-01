import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import itemroute from "./routes/itemroute.js"

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/Arts', {  useNewUrlParser: true ,useUnifiedTopology:true});

const connection = mongoose.connection;

connection.once('open', ()=> {console.log("MongoDB database connection established successfully");})

app.use(cors());
app.use(express.json())
app.use(itemroute);

app.listen(8800,()=>console.log("server up and running"))

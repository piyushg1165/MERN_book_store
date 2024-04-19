import express from "express";
import {PORT, mongodbURL} from "./config.js"
import mongoose from "mongoose";
import {Book} from "./models/bookModel.js";
import bodyParser from "body-parser";
import booksRoutes from "./routes/booksRoutes.js";

const app = express();


app.use(bodyParser.json());

app.get("/", (req, res) =>{
    console.log(req);
    return res.status(234).send("Welcome!");
});

app.use("/books", booksRoutes);



mongoose.connect(mongodbURL).then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`listening on port ${PORT}`);
    });
}).catch((error) => {
        console.log(error);
});
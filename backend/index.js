import express from "express";
import {PORT, mongodbURL} from "./config.js"
import mongoose from "mongoose";
import {Book} from "./models/bookModel.js";
import bodyParser from "body-parser";

const app = express();


app.use(bodyParser.json());

app.get("/", (req, res) =>{
    console.log(req);
    return res.status(234).send("Welcome!");
});

app.get("/books", async (req, res) =>{
    try {
        const books = await Book.find();
        return res.status(200).send({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
});

app.get("/books/:id", async (req, res) =>{
    try {
        const {id} = req.params;
        const book = await Book.findById(id);
        return res.status(200).send(book);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
});

app.post("/books", async (req, res) =>{
    try {
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ) {
            return res.status(400).send({
                messaage: "Send all required fields"
            });
          }
          const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
          };
          const book = await Book.create(newBook);
          return res.status(201).send(book); 

    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
});


mongoose.connect(mongodbURL).then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`listening on port ${PORT}`);
    });
}).catch((error) => {
        console.log(error);
});
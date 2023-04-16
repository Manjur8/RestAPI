const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.static('public'));

mongoose.connect('mongodb+srv://Manjur8:7278302813Mm@cluster0.rastq.mongodb.net/test', { useNewUrlParser: true });

const articleSchema = {
    title: String,
    content: String
};

const Article = mongoose.model('Article', articleSchema)

app.get("/", (req, res) => {
    Article.find({}).then((foundArticles) => {
        console.log(foundArticles)
        res.send(foundArticles)
    }).catch((err) => {
        res.send(err)
    })
})

app.listen(5000, () => {
    console.log('Server running on Port 5000')
})
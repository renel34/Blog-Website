import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let posts = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { posts: posts });
});

app.get("/create", (req, res) => {
  res.render("create.ejs");
});

app.post("/create", (req, res) => {
  const newPost = {
    id: new Date(),
    title: req.body.title,
    content: req.body.content,
  };
  posts.push(newPost);
  res.redirect("/");
});

app.get("/edit", (req, res) => {
  const postId = req.query.postId;
  const post = posts.find((p) => p.id.toString() === postId);
  if (post) {
    res.render("edit.ejs", { post: post });
  } else {
    res.redirect("/");
  }
});

app.post("/edit", (req, res) => {
  const postId = req.body.postId;
  const updatedTitle = req.body.title;
  const updatedContent = req.body.content;
  const postIndex = posts.findIndex((p) => p.id.toString() === postId);
  if (postIndex !== -1) {
    posts[postIndex].title = updatedTitle;
    posts[postIndex].content = updatedContent;
  }

  res.redirect("/");
});

app.post("/delete", (req, res) => {
  const postId = req.body.postId;
  posts = posts.filter((post) => post.id.toString() !== postId);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

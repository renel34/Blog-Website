import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// Array to store blog posts
let posts = [];

// Middlewares
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Route to display the home page with all posts
app.get("/", (req, res) => {
  // Render the index.ejs template, passing the posts array to it
  res.render("index.ejs", { posts: posts });
});

// Route to display the form for creating a new post
app.get("/create", (req, res) => {
  res.render("create.ejs");
});

// Route to handle the submission of a new post
app.post("/create", (req, res) => {
  // Create a new post object with a unique ID (using the current timestamp), title, and content from the form
  const newPost = {
    id: new Date(),
    title: req.body.title,
    content: req.body.content,
  };
  // Add the new post to the posts array
  posts.push(newPost);
  // Redirect the user back to the home page to see the new post
  res.redirect("/");
});

// Route to display the form for editing an existing post
app.get("/edit", (req, res) => {
  // Get the post ID from the query parameters
  const postId = req.query.postId;
  // Find the post in the array that matches the given ID
  const post = posts.find((p) => p.id.toString() === postId);
  // If the post is found
  if (post) {
    // Render the edit.ejs template, passing the found post data
    res.render("edit.ejs", { post: post });
  } else {
    // If no post is found, redirect to the home page
    res.redirect("/");
  }
});

// Route to handle the submission of an edited post
app.post("/edit", (req, res) => {
  // Get the post ID, updated title, and updated content from the form body
  const postId = req.body.postId;
  const updatedTitle = req.body.title;
  const updatedContent = req.body.content;
  // Find the index of the post to be updated
  const postIndex = posts.findIndex((p) => p.id.toString() === postId);
  // If the post is found (index is not -1)
  if (postIndex !== -1) {
    // Update the title and content of the post at the found index
    posts[postIndex].title = updatedTitle;
    posts[postIndex].content = updatedContent;
  }
  // Redirect the user back to the home page
  res.redirect("/");
});

// Route to handle the deletion of a post
app.post("/delete", (req, res) => {
  // Get the post ID from the form body
  const postId = req.body.postId;
  // Create a new array that excludes the post with the matching ID
  posts = posts.filter((post) => post.id.toString() !== postId);
  // Redirect the user back to the home page
  res.redirect("/");
});

// Start the server and listen for incoming requests on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

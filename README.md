# Blog Website

A server-rendered blog application built with Node.js, Express, and EJS that allows users to create, edit, and delete blog posts through a simple and intuitive interface.

---

## Overview

This project was created to strengthen my understanding of backend web development concepts and the Model-View-Controller (MVC) style workflow commonly used in web applications.

The application demonstrates how user input can be processed on the server, rendered dynamically using EJS templates, and managed through CRUD operations.

---

## Features

- Create new blog posts
- View all blog posts on the homepage
- Edit existing posts
- Delete posts
- Dynamic page rendering using EJS
- Reusable page layouts using EJS partials
- Static asset management with Express
- Environment variable support using dotenv

---

## Technologies Used

| Technology | Purpose |
|------------|----------|
| Node.js | JavaScript Runtime |
| Express.js | Web Framework |
| EJS | Server-Side Templating |
| Body-Parser | Form Data Processing |
| Dotenv | Environment Variable Management |
| HTML5 | Markup |
| CSS3 | Styling |

---

## Skills Demonstrated

This project demonstrates practical experience with:

- Server-side web development
- CRUD application design
- Express routing
- Middleware configuration
- Dynamic template rendering
- Form handling and data processing
- Static file serving
- Git and GitHub version control
- Project organization and code structure

---

## Project Structure

```text
Blog-Website
│
├── public/
│   ├── pictures/
│   └── styles/
│
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── create.ejs
│   ├── edit.ejs
│   └── index.ejs
│
├── index.js
├── package.json
└── README.md
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/renel34/Blog-Website.git
```

Navigate to the project folder:

```bash
cd Blog-Website
```

Install dependencies:

```bash
npm install
```

Start the application:

```bash
node index.js
```

Open your browser and visit:

```text
http://localhost:3000
```

---

## How It Works

The application stores blog posts in an in-memory JavaScript array.

Each post contains:

- Unique timestamp-based identifier
- Title
- Content

Users can:

1. Create a post using the Create page.
2. View all posts on the homepage.
3. Edit an existing post.
4. Delete a post.

Changes are immediately reflected through dynamic server-side rendering.

---

## Current Limitations

This project was designed as a learning exercise and currently stores all blog posts in memory.

Because of this:

- Data is not persisted after server restart.
- No user authentication is implemented.
- No database integration currently exists.

---

## What I Learned

Through this project I gained hands-on experience with:

- Express application structure
- Route handling
- HTTP GET and POST requests
- Dynamic content rendering with EJS
- Form submission processing
- Middleware usage
- Organizing reusable view components with partials

---

## Author

**René Laplante**

- Email: laplanter96@gmail.com
- GitHub: https://github.com/renel34
- Portfolio: *(Add your portfolio URL here)*

---

## License

This project is licensed under the MIT License.

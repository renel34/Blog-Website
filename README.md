Blog Platform (Express + EJS)
A server-side rendered blog application built with Node.js and Express that implements full CRUD functionality using REST-style routing and dynamic templating with EJS.
Description
The Blog Platform allows users to create, view, edit, and delete blog posts. The application uses Express for routing and middleware, EJS for dynamic server-side rendering, and stores post data in memory.
Although the current version uses in-memory storage, the architecture is structured in a way that can easily be extended to support a database such as PostgreSQL or MongoDB.
Technology Stack
•	Backend:
•	Node.js
•	Express.js
•	Body-Parser middleware
•	Frontend:
•	EJS (Embedded JavaScript Templates)
•	HTML5
•	CSS3
Core Architecture
•	Routing Structure:
•	GET / - Display all blog posts
•	GET /create - Render create post form
•	POST /create - Create a new blog post
•	GET /edit - Render edit form for selected post
•	POST /edit - Update existing post
•	POST /delete - Delete a blog post
Data Model
•	Current Implementation Structure:
•	id: Date
•	title: String
•	content: String
Note: Since there is no database integration yet, all data resets when the server restarts.
Getting Started
1.	1. Clone the repository
•	git clone https://github.com/your-username/blog-platform.git
2.	2. Install dependencies
•	npm install
3.	3. Run the application
•	node index.js
4.	4. Open in browser: http://localhost:3000
Production Improvements Roadmap
•	Replace in-memory storage with PostgreSQL
•	Implement RESTful route parameters (/posts/:id)
•	Add authentication and authorization
•	Add input validation and sanitization
•	Implement MVC folder structure
•	Add environment configuration (.env)
•	Add Docker support
•	Deploy to cloud infrastructure (Render, Railway, or AWS)
What This Project Demonstrates
•	Strong foundational knowledge of Express.js
•	Ability to implement CRUD operations from scratch
•	Understanding of server-side rendering concepts
•	Clean route logic and state manipulation
•	Awareness of production scalability considerations
License
MIT License

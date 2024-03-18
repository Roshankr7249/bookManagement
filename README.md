<!-- # bookManagement -->

Book Management Application
This is a Node.js application with a GraphQL API integrated with MongoDB for managing books and users.
It includes authentication functionality using JWT tokens.

Features:::::

GraphQL API:It Allows querying and mutation of data using a GraphQL interface.
MongoDB Integration: MongoDB is used as the database to store and retrieve data.
User Authentication: authentication is done using JWT tokens.
Book : CRUD operation to handle Book Management.
User : CRUD operation to handle User Data.

Getting Started:

Prerequisites:
Node.js and npm installed.
MongoDB Atlas account for cloud hosting.

Installed dependencies: "apollo-server-express": "^3.13.0",
"bcryptjs": "^2.4.3",
"dotenv": "^16.4.5",
"express": "^4.18.3",
"graphql": "^16.8.1",
"jsonwebtoken": "^9.0.2",
"mongoose": "^8.2.2"

Create a .env file in the backend directory.
Add the following environment variables:
makefile
Copy code
PORT=3000
JWT_SECRET=Roshan

Interact with the API:

Use the GraphQL Playground to send queries and mutations to the API.
Refer to the provided schema and documentation for available operations.
Deployment
This application is deployed on Render.

Deployed Link: https://bookmanagement-s1mt.onrender.com

Contact:
Roshan Kumar || mindsspiritual0@gmail.com ||  https://roshankr7249.github.io/

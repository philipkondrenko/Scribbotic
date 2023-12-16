# Scribbotic - A Note Taking Web App
Scribbotic is a note taking web app that lets users delete and add notes. 

# Features
- User token authentication using JWT
- Password hashing with bcrypt
- Backend REST API built with Node.js and Express
- Frontend built with CSS and EJS 
- MongoDB used for storing users and notes

# Usage (Project still in production)
1. Clone repository and install dependencies
```
mkdir <FOLDER_NAME>
git clone https://github.com/philipkondrenko/Scribbotic.git
cd <FOLDER_NAME>/Note-App
npm install express mongoose jsonwebtoken ejs dotenv cookie-parser body-parser bcryptjs
```
2. Create .env file for mongodb connection string, port number, and JWT key
```
PORT=5000
MONGO_URL=mongodb+srv://<USER>:<PASSWORD>@mernapp.y4figdd.mongodb.net/?retryWrites=true&w=majority
JWT_SECRET=<KEY>
```
Replace <USER> and <PASSWORD> with mongodb info
Replace <KEY> with a unique key

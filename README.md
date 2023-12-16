# Scribbotic - A Note Taking Web App
Scribbotic is a note taking web app that lets users delete and add notes. 

# Features
- User token authentication with JWT
- Password hashing with bcrypt
- Backend REST API built with Node.js and Express
- Frontend built with CSS and EJS 
- MongoDB used for storing users and notes

# Usage (Project still in production)
1. Clone repository and install dependencies
```
git clone https://github.com/philipkondrenko/Scribbotic.git
cd Note-App
npm install
```
2. Create .env file for mongodb connection string, port number, and JWT key
```
PORT=<PORT>
MONGO_URL=<URL>
JWT_SECRET=<KEY>
```
Replace <URL> with mongodb connection string
Replace <KEY> with unique key
Replace <PORT> with port number

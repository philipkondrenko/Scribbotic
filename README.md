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
PORT=<REPLACE_WITH_PORT_NUMBER>
MONGO_URL=<REPLACE_WITH_URL>
JWT_SECRET=<REPLACE_WITH_JWT_KEY>
```

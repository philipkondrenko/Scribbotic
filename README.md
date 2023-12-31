# Description
Scribbotic is a note taking web app that lets users add, delete, and view notes. 

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)



# Features
- User authentication with JWT
- Password hashing with bcrypt
- Backend REST API built with Node.js and Express
- Frontend built with CSS and EJS 
- MongoDB used for storing users and notes


# Usage (Project still in development)
1. Clone repository and install dependencies
```
git clone https://github.com/philipkondrenko/Scribbotic.git
cd Scribbotic
npm install
```
2. Create .env file for mongodb connection string, port number, and JWT key variables
```
PORT=<REPLACE_WITH_PORT_NUMBER>
MONGO_URL=<REPLACE_WITH_URL>
JWT_SECRET=<REPLACE_WITH_JWT_KEY>
```
3. Start server
```
nodemon server.js
```


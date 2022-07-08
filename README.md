
# FolkSoul Full Stack Application

This is a Folksoul app API, where we can add/remove/edit/delete band members and social links.


[FolkSoul API Documentation](folksoul-api.nina.redberryinternship.ge/api-docs) 

---



### Table of Contents
- [Prerequisites](#Prerequisites)  
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Resources](#Resources)

### Prerequisites
<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png' width="25" style="position: relative; top: 8px"/> *Node JS v16.X*  
<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/540px-Npm-logo.svg.png' width="25" style="position: relative; top: 8px"/> *npm v8.X*  

---

### Tech Stack
* <img src='https://user-images.githubusercontent.com/33086430/173361357-714c676e-de2c-4416-8d70-66815705a3d8.png' width="25" style="position: relative; top: 8px"/>  [*Express @4.18.1*](https://expressjs.com/) - Back end framework  
* <img src='https://miro.medium.com/max/1400/0*FKxKT6vIad9ZFlCn.png' width="25" style="position: relative; top: 8px"/> [*dotenv @16.0.1*](https://www.npmjs.com/package/dotenv) - Loads environment variables  
* <img src='https://user-images.githubusercontent.com/33086430/173362353-0bd21d1e-fa4b-4b75-baea-a600fffd66f4.png' width="25" style="position: relative; top: 8px"/> [*bBcrypt @5.0.1*](https://www.npmjs.com/package/bcrypt) - Password-hashing function  
* <img src='https://express-validator.github.io/img/logo.svg' width="25" style="position: relative; top: 8px"/> [*Express Validator @6.14.1*](https://express-validator.github.io/docs/) - Enables validation  
* <img src='https://static.cdnlogo.com/logos/j/20/jwt.svg' width="25" style="position: relative; top: 8px"/> [*JWT - Json Web Token @6.3.6*](https://jwt.io/) - Unique token generator  
* <img src='https://user-images.githubusercontent.com/33086430/173362596-5ec31137-b055-4f33-90d0-572d56f98fe1.png' width="25" style="position: relative; top: 8px"/> [*Swagger @4.4.0*](https://swagger.io/) - Documentation for API  
* <img src='https://w7.pngwing.com/pngs/255/713/png-transparent-promt-machine-translation-speech-translation-language-technology-topm-software-gmbh-angle-english-text-thumbnail.png' width="25" style="position: relative; top: 8px"/> [*Promt @0.3.0*](https://www.promt.com/) - Machine translation systems




---


### Getting Started
1. Clone FolkSoul API repository from github:

```
git clone git@github.com:RedberryInternship/folksoul-api-ninadarbaidze.git
```


2. Install dependencies

```
npm install
```


3. Copy .env.example and add your env variables

```
cp .env.example .env
```

4. Start server

```
npm start
```

5. Create user in terminal

```
npm run user:create
```


6. Swagger documentation URL

```
http://localhost:3000/api-docs/

```

---


### Project Structure

```

├─── src     
│   ├─── bin
│   ├─── config    
│   ├─── controllers 
│   ├─── middlewares 
│   ├─── models 
│   ├─── routes 
│   ├─── schemas 
│   ├─── server.js 

- .env.example   
- .eslintrc.json   
- .prettierrc.json
- .gitignore   
- package-lock.json 
- package.json       


```

### Resources

- [Application Design](https://www.figma.com/file/ferG8kznuy5s0hMhMZa2Hi/FolkSoul---Bootcamp?node-id=2%3A2)  
- [Git Commit Conventions](https://redberry.gitbook.io/resources/git-is-semantikuri-komitebi)


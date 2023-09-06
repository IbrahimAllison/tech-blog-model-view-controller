# tech-blog-model-view-controller

## Description
 
This project involves building a CMS-style blog site similar to a Wordpress site. This site was built completely from scratch and deployed to herokuapp.com. The application combined both the front-end and the back-end web development methodologies. See the Built-With section of the readme.md file for the detail technologies used for building this application.


## Motivation for the Project

I was motivated to build a full stack Website from the scratch and deployed it to heroku.com. I hope to build on the skills gained from this project and apply it to similar future projects. It is a great learning experience for me.

## Usage/Installation

Here is an high level steps for creating and executing the tech blog application.

## Steps

1. Create the necessary folders and their associated files.
2. Run npm init-y
3. Run npm i bcrypt 
4. Run npm i sequelize
5. Run npm i dotenv --save (ensure you put your sensitive information in the .env file).
6. Run npm i express
7. Run npm i express-handlebars
8. Run npm i express-session
9. Run npm i mysql2
10. Run npm i nodemon
11. Run node server.js
12. Login into mysql database using mysql -u root -p (enter your password)
13. Make sure you are in the correct directory where the schema.sql file is located then run SOURCE schema.sql
14. Run npm start
15. Test the application on your PC using node server.js and test the application in your browser using http://localhost:PORT 1001 (you can change the number 1001 to any 
    number you want).
16. Initialize git and commit using the command line:
17. git init
18. git add -A
19. git status
20. git commit -m "initial commit"
21. heroku create
22. git push heroku main (after login to heroku.com and created the app for your deployment).
23. Heroku open

Below is an additional instruction for the Heroku Deployment:

•	In your Heroku dashboard for your app, go to the "Settings" tab.

•	Scroll down to the "Config Vars" section.

•	Click the "Reveal Config Vars" button.

•	Add the following variables and their corresponding values:

•	DB_NAME (with your MySQL database name)

•	DB_USER (with your MySQL database username)

•	DB_PASSWORD (with your MySQL database password)

•	Additionally, Heroku will automatically set the JAWSDB_URL environment variable when you add the JawsDB add-on to your app. You don't need to set it manually; Heroku takes care of it.

 
## Built with

JavaScript
Visual Studio Code
NodeJS
MySQL
Handlebars
Bcrypt
Sequelize
Dotenv
Express
Handlebars
Mysql2
Heroku
CSS
NPM


## License

![License](https://img.shields.io/badge/License-MIT-9cf.svg)

MIT license was used for creating this repository.

## Credits/References

Inspiration and codes from: https://github.com/kaitlynatif/Tech_Blog/tree/main

Instructional team and tutor.

Course instruction notes and documentation on deploying to heroku.

My previous notes from Module 11 Challenge on deploying to localhost and heroku.


## Link to the Deployed Application

Here is the link to the deployed application:
https://radiant-anchorage-07713-21a13a734cb9.herokuapp.com

## Screenshots of the Deployed Application
![image](https://github.com/IbrahimAllison/tech-blog-model-view-controller/assets/116689797/d905ead0-1b7a-44ff-8aa9-802bf076f771)

![image](https://github.com/IbrahimAllison/tech-blog-model-view-controller/assets/116689797/9af910c8-5f42-4edb-8f65-540e7f20867b)

![image](https://github.com/IbrahimAllison/tech-blog-model-view-controller/assets/116689797/503c06f6-0122-455b-b013-a38afb05a3c2)

![image](https://github.com/IbrahimAllison/tech-blog-model-view-controller/assets/116689797/3f5ec3e3-0582-4a69-8b9b-930a8e6c9f17)

![image](https://github.com/IbrahimAllison/tech-blog-model-view-controller/assets/116689797/f901af50-94ef-4cf9-aee1-a6a66185f98f)

![image](https://github.com/IbrahimAllison/tech-blog-model-view-controller/assets/116689797/40c4452b-4fe6-4315-ad91-a8e9e844b835)

![image](https://github.com/IbrahimAllison/tech-blog-model-view-controller/assets/116689797/d715a4c2-15fd-4983-b952-b2f138482376)

![image](https://github.com/IbrahimAllison/tech-blog-model-view-controller/assets/116689797/c6064781-bec3-4a48-aa35-40c96ee98eb0)















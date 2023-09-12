# Tech Blog

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Questions](#questions)
* [License](#license)
* [Links](#links)

## [Description](#table-of-contents)
This project consists of a CMS-style blog site, where users (usually developers) can publish their blog posts and comment on other users’ posts as well. The app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

![demo](./Screenshot%202023-09-11%20at%209.53.33%20PM.png)

## [Installation](#table-of-contents)
For installing the application you will need to clone the repo into your local machine. To get started you can run `npm install` in the integrated terminal to install packages. After that, you will need to create a .env file and insert your own MySQL credentials. Then run mysql in your CLI to source the schema. Finally, you will need to run `npm run seed` to seed the database. Then, invoke the database with `node server.js`.

## [Usage](#table-of-contents)
In order to use the app, you can click on the link associated below that leads to the live page. From there you will need to create your own login by signing up. Then you will have the ability to create or update your own posts, view comments and leave your own comments.

## [Questions](#table-of-contents)
If you have any questions about the functionality of the application or installation, please reach out to me.

## [License](#table-of-contents)
N/A

## [Links](#table-of-contents)
[Heroku - Deployed App](https://dianabee16-tech-blog-60b9fd013dee.herokuapp.com/)
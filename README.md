# Module 13 Challenge - E-commerce Backend

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Video](#video)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learnt](#what-i-learnt)
 
## Overview

### The challenge

Internet retail, also known as e-commerce, is the largest sector of the electronics industry, having generated an estimated US$29 trillion in 2017 (Source: United Nations Conference on Trade and Development). E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to the prevalence of these platforms, developers should understand the fundamental architecture of e-commerce sites.

Your challenge is to build the back end for an e-commerce site. You’ll take a working Express.js API and configure it to use Sequelize to interact with a MySQL database.

### User Story

```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

### Acceptance Criteria

```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

### Video
[Demo Video](https://drive.google.com/file/d/1pF5PowVUvJDgtnwC6a6KHcukESEVlqsB/view?usp=sharing)

### Links

- [Github Repository](https://github.com/rmdn321/13-E-commerce-Backend)

## My process

### Built with

- Node.js
- Express.js
- MySQL
- Sequelize
- Dotenv

### What I learnt

- Connect to a database using Sequelize and environment variables.

- Create and configure a Sequelize model.

- Perform CRUD operations with Sequelize methods.

- Write a script to seed a database with initial data.

- Convert asynchronous code to synchronous code using async and await.
 
- Ensure that HTTP requests respond with the correct status code.

- Perform checks on a Sequelize model with validation tools.

- Automate functionality using Sequelize Hooks.

- Create and run a custom method on a Sequelize instance.

- Implement various Sequelize associations to create one-to-one, one-to-many, and many-to-many data relationships.

- Perform subqueries using a combination of Sequelize methods and plain SQL syntax.

- Enforce code styling for an application using ESLint.












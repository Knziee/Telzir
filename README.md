# Telzir Falemais

## About the project:
Test Show me the code for LOLDESIGN

## How to run the application:
Before running the application you will need to run the database, the script for it is in this link here:  
[sql file](/bd/scriptCreateDatabasev2.sql)

To run the application it is necessary to have node and npm installed.  
guide for installing both: [Click here](https://www.taniarascia.com/how-to-install-and-use-node-js-and-npm-mac-and-windows/)  

After that, navigate to the api folder in your terminal and run _npm i_ to install the dependencies.  

Then navigate to the config folder and in the file, change the data according to your MySQL connection, with the guidance below:  
HOST: usually localhost if it is running locally  
USER: your username of your local mysql connection  
PASSWORD: password of your mysql local connection  

After these settings, return to the api root folder and run the application's api by running the following command in the terminal _node server.js _  

Then navigate to the telzir-front folder in your terminal and run _npm i_ again to install the frontend dependencies  

And finally run npm start and the application will be executed  

## Technologies used:

### Front-end:
- Typescript
- React
- react-bootstrap
- styled-components
- node
- axios
- framer-motion

### Back-end:
- Node
- MySQL
- express
- sequelize
- nodemon
- cors


## Functionalities:
Simulates the cost for each type of Falemais plan based on the call duration in minutes entered by the customer

## Preview:

![preview](/src/assets/images/telzirScreenshotForReadme.png "preview")


## developed by:

- Rhuan Martins Teixeira

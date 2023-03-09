# Coin Data

Coin Data is a web-based application developed as a demonstration of competancy in skills using React hooks, namely useState and useEffect. These hooks are used to manage state across various components providing a UI that is interactive for the user to manipulate the DOM. The synopsis of the app is that it provides a general list of popular crypto-currencies that can be searched and, when clicked, display more details about the selected crypto. A form is provided allowing the user to add their own crytpo projects to the list as a form of imaginative entertainment

## Technologies

## Requirements
- React library (should be installed separately)
- An API that provides cryptocurrency data (the app is currently using CoinGeck API)
- A working internet connection to fetch data from the API

## Installation

1. Install Node.js on your computer if you haven't already. You can download the latest version of Node.js from the official website at https://nodejs.org.
2. Clone the repository to your local machine. 
Note: you will need to clone the backend to run the server for fetching data from the API as well as the frontend to run the application. The frontend and backend files will need to be in the same directory.
    - cloning frontend: type from within the file you wish to clone to "git clone git@github.com:allenlr/ALRphase2-frontend.git" in bash then hit enter.
    - cloning backend: type from within the file you wish to clone to "git clone git@github.com:allenlr/ALRphase2-backend.git" in bash then hit enter.
3. Navigate to the project directory:
    - type "cd 'project-directory'" replacing project-directory with the directory name you wish to enter, then hit enter.
4. Install the dependencies using NPM:
    - type "npm install" then hit enter.
5. From within the backend directory, run the server.js file to fetch the data from the API and import it to the db/db.json file for the client to use.
    - type "node server.js" then hit enter.
6. Run the server
    - type "npm start" then hit enter.
7. Launch the client side web application
    - navigate to the frontened directory and type "npm install" then hit enter following by "npm start" and hitting enter.

## Coinfiguration
- This app does not require any additional configuration outside of the UI. However, upon installation, the user will need to provide an API key to fetch real-time cryptocurrency data. To do this, the user must create an account with the CoinGecko API and obtain an API key. Once the API key is obtained, the user should create a .env file in the root directory and add the API key as a variable.

### images
[background bitcoin picture](https://www.mnp.ca/-/media/images/mnp/service/enterprise-risk/insights/f22/bitcoin-with-colorfull-blurred-background-and-reflection-jpg.jpg)
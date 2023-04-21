# React.js LotR API Demo

This is a simple demo app built with React.js that interacts with the LotR API. The app displays a list of movies and characters from the LotR universe and allows users to view movie quotes and character quotes.

## Dependencies
React.js
axios

## Usage
Clone this repository to your local machine.
Navigate to the project directory in a terminal or command prompt.
Run `npm install` to install the dependencies.
Replace `your-api-key` with your actual API key in the Authorization headers of the HTTP requests in the App.js file.
Run `npm start` to start the development server.
Open your web browser and navigate to http://localhost:3000.

## Features
Fetches all movies and characters from the LotR API on component mount.
Displays a list of movies and characters.
Allows users to select a movie or character to view associated quotes.
Fetches and displays movie quotes and character quotes.

## Design
The app is built with React.js and uses the useState and useEffect hooks to manage state and perform API requests. The axios library is used to make HTTP requests to the LotR API.

When the component mounts, we fetch all movies and characters from the API using HTTP GET requests. When a movie or character is clicked, we fetch the associated quotes using another HTTP GET request.

We're rendering the movie names and character names as clickable divs, and when a movie or character is selected, we're rendering the movie or character name and a list of its quotes (if any). If no quotes are found for the selected movie or character, we're rendering a message indicating so.

## Credits
This project was created by James Dunn as a demonstration of how to use the LotR API with React.js.
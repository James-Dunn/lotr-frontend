## Design
The app is built with React.js and uses the useState and useEffect hooks to manage state and perform API requests. The axios library is used to make HTTP requests to the LotR API.

When the component mounts, we fetch all movies and characters from the API using HTTP GET requests. When a movie or character is clicked, we fetch the associated quotes using another HTTP GET request.

We're rendering the movie names and character names as clickable divs, and when a movie or character is selected, we're rendering the movie or character name and a list of its quotes (if any). If no quotes are found for the selected movie or character, we're rendering a message indicating so.

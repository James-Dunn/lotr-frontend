import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = 'your-api-key';
const HTTP_OPTIONS = {
  headers: {
    Authorization: `Bearer ${API_KEY}`
  }
};

function LotRPage() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movieQuotes, setMovieQuotes] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [characterQuotes, setCharacterQuotes] = useState([]);

  useEffect(() => {
    // Fetch all movies
    axios.get('https://the-one-api.dev/v2/movie', HTTP_OPTIONS)
      .then((response) => {
        setMovies(response.data.docs);
      })
      .catch(console.error);

    // Fetch all characters
    axios.get('https://the-one-api.dev/v2/character', HTTP_OPTIONS)
      .then((response) => {
        setCharacters(response.data.docs);
      })
      .catch(console.error);
  }, []);

  const handleMovieClick = (movie) => {
    // Fetch movie quotes for selected movie
    axios.get(`https://the-one-api.dev/v2/movie/${movie._id}/quote`, HTTP_OPTIONS)
      .then((response) => {
        setMovieQuotes(response.data.docs);
      })
      .catch(console.error);

    setSelectedMovie(movie);
    setSelectedCharacter(null);
  }

  const handleCharacterClick = (character) => {
    // Fetch character quotes for selected character
    axios.get(`https://the-one-api.dev/v2/character/${character._id}/quote`, HTTP_OPTIONS)
      .then((response) => {
        setCharacterQuotes(response.data.docs);
      })
      .catch(console.error);

    setSelectedCharacter(character);
    setSelectedMovie(null);
  }

  return (
    <div>
      <h1>Lord of the Rings Movies</h1>

      <div class="parent">
        <div>
          <h2>Movies (Click a movie title to see quotes)</h2>

          {movies.map((movie) => (
            <div key={movie._id} onClick={() => handleMovieClick(movie)}>
              {movie.name}
            </div>
          ))}
        </div>

        {selectedMovie && (
          <div class="generic-div">
            <h3>{selectedMovie.name}</h3>

            {movieQuotes.length > 0 ? (
              <ul>
                {movieQuotes.map((quote) => (
                  <li key={quote._id}>{quote.dialog}</li>
                ))}
              </ul>
            ) : (
              <p>No quotes found for this movie.</p>
            )}
          </div>
        )}

        <div>
          <h2>Characters (Click to see quotes)</h2>

          <div class="generic-div">
            {characters.map((character) => (
              <div key={character._id} onClick={() => handleCharacterClick(character)}>
                {character.name}
              </div>
            ))}
          </div>
        </div>

        {selectedCharacter && (
          <div class="generic-div">
            <div>
              <h3>{selectedCharacter.name} Quotes:</h3>
            </div>

            <div>
            {characterQuotes.length > 0 ? (
              <ul>
                {characterQuotes.map((quote) => (
                  <li key={quote._id}>{quote.dialog}</li>
                ))}
              </ul>
            ) : (
              <p>No quotes found for this movie.</p>
            )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LotRPage;
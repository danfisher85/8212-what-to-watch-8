import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app/app';
import {films} from 'mocks/films';

const PromoFilm = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      title={PromoFilm.title}
      genre={PromoFilm.genre}
      year={PromoFilm.year}
      films={films}
    />
  </React.StrictMode>,
  document.getElementById('root'));

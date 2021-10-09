import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app/app';

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
    />
  </React.StrictMode>,
  document.getElementById('root'));

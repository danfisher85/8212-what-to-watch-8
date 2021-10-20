import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app/app';
import {promo, similarFilms, films} from 'fixtures/films';

ReactDOM.render(
  <React.StrictMode>
    <App
      promoFilm={promo}
      similarFilms={similarFilms}
      films={films}
    />
  </React.StrictMode>,
  document.getElementById('root'));

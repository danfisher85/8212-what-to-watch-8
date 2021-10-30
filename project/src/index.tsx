import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app/app';
import {promoFilm, films} from 'fixtures/films';
import {comments} from 'fixtures/comments';

ReactDOM.render(
  <React.StrictMode>
    <App promoFilm={promoFilm} films={films} comments={comments} />
  </React.StrictMode>,
  document.getElementById('root'),
);

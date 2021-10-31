import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from 'components/app/app';
import {promoFilm, films} from 'fixtures/films';
import {comments} from 'fixtures/comments';
import {reducer} from 'store/reducer';

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App promoFilm={promoFilm} films={films} comments={comments} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

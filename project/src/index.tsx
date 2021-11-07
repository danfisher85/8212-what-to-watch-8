import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from 'components/app/app';
import {promoFilm, films} from 'fixtures/films';
import {comments} from 'fixtures/comments';
import {rootReducer} from 'store/root-reducer';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App promoFilm={promoFilm} films={films} comments={comments} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createAPI} from 'services/api';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from 'components/app/app';
import {comments} from 'fixtures/comments';
import {requireAuthorization} from 'store/action';
import {checkAuthAction, fetchFilmsAction, fetchPromoFilmAction} from 'store/api-actions';
import {rootReducer} from 'store/root-reducer';
import {ThunkAppDispatch} from 'types/action';
import {AuthorizationStatus} from 'configs/auth-status';
import {redirect} from 'store/middlewares/redirect';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const api = createAPI(() => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)));
const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk.withExtraArgument(api)),
  applyMiddleware(redirect),
));

(store.dispatch as ThunkAppDispatch)(fetchPromoFilmAction());
(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchFilmsAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App comments={comments} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

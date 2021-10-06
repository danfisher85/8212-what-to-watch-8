import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import PlayerScreen from '../player-screen/player-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import FilmScreen from '../film-screen/film-screen';
import AddReviewScreen from '../add-review-screen/add-review-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';

interface AppScreenProps {
  title: string,
  genre: string,
  year: number
}

function App(props: AppScreenProps): JSX.Element {
  const {title, genre, year} = props;
  return (
    <MainScreen title={title} genre={genre} year={year} />
  );
}

export default App;

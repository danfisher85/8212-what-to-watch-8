import MainScreen from '../main-screen/main-screen';

type AppScreenProps = {
  title: string,
  genre: string,
  year: number
};

function App(props: AppScreenProps): JSX.Element {
  const {title, genre, year} = props;
  return (
    <MainScreen title={title} genre={genre} year={year} />
  );
}

export default App;

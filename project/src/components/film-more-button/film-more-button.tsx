interface FilmMoreButtonProps {
  handleMoreButtonClick: () => void;
}

function FilmMoreButton({handleMoreButtonClick}: FilmMoreButtonProps): JSX.Element {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={handleMoreButtonClick}>
        Show more
      </button>
    </div>
  );
}

export default FilmMoreButton;

import {promoFilmReducer} from 'store/promo-film/promo-film-reducer';
import {loadPromoFilm, setIsPromoFavoriteLoading} from 'store/action';
import {initialState} from 'store/promo-film/promo-film-reducer';
import {createFakeFilm} from 'fixtures/film';

const promoFilmFixture = createFakeFilm();

describe('Reducer: promoFilmReducer', () => {

  it('should load promo film', () => {
    expect(promoFilmReducer(initialState, loadPromoFilm(promoFilmFixture)))
      .toEqual({
        ...initialState,
        promoFilm: promoFilmFixture,
      });
  });

  it('should enable favorite flag', () => {
    expect(promoFilmReducer(initialState, setIsPromoFavoriteLoading(true)))
      .toEqual({
        ...initialState,
        isPromoFavoriteLoading: true,
      });
  });
});

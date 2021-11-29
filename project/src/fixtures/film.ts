import {datatype, date, internet, lorem, name} from 'faker';
import {Film, Films, ServerFilm} from 'types/film';

const createFirstLastName = () => `${name.firstName()} ${name.lastName()}`;

export const createFakeFilm = (): Film => {
  const actorsAmount = datatype.number({min: 1, max: 5});
  const actors = new Array(actorsAmount).fill(null).map(() => createFirstLastName());

  return {
    id: datatype.number(),
    name: lorem.words(),
    posterImage: internet.url(),
    previewImage: internet.url(),
    backgroundImage: internet.url(),
    backgroundColor: internet.color(),
    videoLink: internet.url(),
    previewVideoLink: internet.url(),
    description: lorem.paragraph(),
    rating: datatype.number(),
    scoresCount: datatype.number(),
    director: createFirstLastName(),
    genre: 'Adventure',
    runTime: datatype.number(),
    actors,
    released: date.past().getFullYear(),
    isFavorite: datatype.boolean(),
  };
};

export const createFakeFilms = (): Films => {
  const amount = datatype.number({min: 8, max: 25});
  const mockFilms = new Array(amount).fill(null).map(() => createFakeFilm());
  return mockFilms;
};

export const createFakeServerFilm = (): ServerFilm => {
  const actorsAmount = datatype.number({
    min: 1,
    max: 8,
  });
  const actors = new Array(actorsAmount).fill(null).map(() => createFirstLastName());

  return {
    id: datatype.number(),
    name: lorem.words(),
    'poster_image': internet.url(),
    'preview_image': internet.url(),
    'background_image': internet.url(),
    'background_color': internet.color(),
    'video_link': internet.url(),
    'preview_video_link': internet.url(),
    description: lorem.paragraph(),
    rating: datatype.number(),
    'scores_count': datatype.number(),
    director: createFirstLastName(),
    genre: 'Comedy',
    'run_time': datatype.number(),
    starring: actors,
    released: date.past().getFullYear(),
    'is_favorite': datatype.boolean(),
  };
};

export const createFakeServerFilms = (): ServerFilm[] => {
  const amount = datatype.number({
    min: 5,
    max: 25,
  });

  const mockFilms = new Array(amount).fill(null)
    .map(() => createFakeServerFilm())
    .map((film, index) => ({...film, id: index + 1}));

  return mockFilms;
};

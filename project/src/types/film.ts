export enum Genre {
  'All genres',
  'Comedy',
  'Crime',
  'Adventure',
  'Mystery',
  'History',
  'Drama',
  'Fantasy',
}
export type GenreName = keyof typeof Genre;

export interface Film {
  id: number;
  name: string;
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  previewVideoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  actors: string[];
  runTime: number;
  genre: GenreName;
  released: number;
  isFavorite: boolean;
}
export type Films = Film[];

export interface ServerFilm {
  id: number;
  name: string;
  'poster_image': string;
  'preview_image': string;
  'background_image': string;
  'background_color': string;
  'video_link': string;
  'preview_video_link': string;
  description: string;
  rating: number;
  'scores_count': number;
  director: string;
  starring: string[];
  'run_time': number;
  genre: GenreName;
  released: number;
  'is_favorite': boolean;
}

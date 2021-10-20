enum Genre {
  'Comedy',
  'Crime',
  'Adventure',
  'Mystery',
  'History',
  'Drama',
  'Fantasy',
}

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
  starring: string[];
  runTime: number;
  genre: keyof typeof Genre;
  released: number;
  isFavorite: boolean;
}

export type Films = Film[];

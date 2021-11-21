export interface Comment {
  id: number;
  user: {
    id: number;
    name: string;
  },
  rating: number;
  comment: string;
  date: string;
}

export type Comments = Comment[];

export interface CommmentPost {
  rating: number,
  comment: string,
}

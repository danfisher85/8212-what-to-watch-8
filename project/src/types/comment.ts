export type Comment = {
  id: string;
  user: {
    id: string;
    name: string;
  },
  rating: number;
  comment: string;
  date: string;
}

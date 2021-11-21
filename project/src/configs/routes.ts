export enum AppRoute {
  Root = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}

export enum APIRoute {
  Films = '/films',
  Favorite = '/favorite',
  Promo = '/promo',
  Film = '/films/:id',
  FilmComments = '/comments/:id',
  SimilarFilms = '/films/:id/similar',
  PostComment = '/comments/:id',
  Login = '/login',
  Logout = '/logout',
}

export enum AppRoute {
  Root = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '/404',
}

export enum APIRoute {
  Films = '/films',
  Favorite = '/favorite',
  PostFavorite = '/favorite/:id/:status',
  Promo = '/promo',
  Film = '/films/:id',
  FilmComments = '/comments/:id',
  SimilarFilms = '/films/:id/similar',
  PostComment = '/comments/:id',
  Login = '/login',
  Logout = '/logout',
}

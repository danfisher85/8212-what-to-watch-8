export enum AppRoute {
  Root = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}

export const APIRoute = {
  Films: () => '/films',
  Favorite: () => '/favorite',
  Promo: () => '/promo',
  Film: (id:string | number) => `/films/${id}`,
  Login: () => '/login',
  Logout: () => '/logout',
} as const;

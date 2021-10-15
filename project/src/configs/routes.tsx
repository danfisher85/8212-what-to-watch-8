export const AppRoute = {
  Root: () => '/',
  SignIn: () => '/login',
  MyList: () => '/mylist',
  Film: (id:string | number = ':id') => `/films/${id}`,
  AddReview: (id:string | number = ':id') => `/films/${id}/review`,
  Player: (id:string | number = ':id') => `/player/${id}`,
} as const;

export interface IRoutesList {
  path: string;
  isLoginPage?: boolean;
}

export const routesList: IRoutesList[] = [
  {
    path: "/",
    isLoginPage: false,
  },
  {
    path: "/sign-in",
    isLoginPage: true,
  },
  {
    path: "/stay",
    isLoginPage: false,
  },
];

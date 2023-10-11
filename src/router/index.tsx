import MainPage from "../pages/Main";
import AuthPage from "../pages/Auth";
import { createBrowserRouter } from "react-router-dom";
import HeaderPage from "../components/Header";
import FilmPage from "../pages/ShowFilm";
import { FilmCollection } from "../pages/FilmCollection";
import { CollectionTop } from "../pages/FilmCollection/TopCollection/CollectionTop";
import { CollectionPremier } from "../pages/FilmCollection/TopCollection/CollectionPremier";
import { CollectionYears } from "../pages/FilmCollection/TopCollection/CollectionYears";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <HeaderPage />
        <MainPage />
      </div>
    ),
  },
  {
    path: "/film/:id",
    element: (
      <div>
        <HeaderPage />
        <FilmPage />
      </div>
    ),
  },
  {
    path: "/auth",
    element: (
      <div>
        <AuthPage />
      </div>
    ),
  },
  {
    path: "/collection",
    element: (
      <div>
        <HeaderPage />
        <FilmCollection />
      </div>
    ),
  },
  {
    path: "/collection/top_100",
    element: (
      <div>
        <HeaderPage />
        <CollectionTop />
      </div>
    ),
  },
  {
    path: "/collection/top_250",
    element: (
      <div>
        <HeaderPage />
        <CollectionTop />
      </div>
    ),
  },
  {
    path: "/collection/premier",
    element: (
      <div>
        <HeaderPage />
        <CollectionPremier />
      </div>
    ),
  },
  {
    path: "/collection/years",
    element: (
      <div>
        <HeaderPage />
        <CollectionYears />
      </div>
    ),
  },
]);

export default router;

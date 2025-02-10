import FavoritePage from "@pages/FavoritePage/FavoritePage";
import MainPage from "@pages/MainPage/MainPage";
import MoviePage from "@pages/MoviePage/MoviePage";
import NotFoundPage from "@pages/NotFoundPage/NotFoundPage";
import { NavBar } from "@shared/components";
import AppRoutes from "@shared/routes";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={AppRoutes.HOME} element={<MainPage />} />
        <Route path={AppRoutes.MOVIE} element={<MoviePage />} />
        <Route path={AppRoutes.FAVORITE} element={<FavoritePage />} />
        <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;

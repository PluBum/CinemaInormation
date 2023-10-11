import { useEffect, useState } from "react";
import { Film } from "../../../types";
import { getFilms } from "../../../request";
import { NavLink, useLocation } from "react-router-dom";
import { FilmsDescription, Rating, TopFilmsImg } from "../../TopFilms/style";
import { validateName } from "../../../utils/validateName";
import { ContainerFilm, FilmBlock, FilmButton } from "../style/style";
import LoadingRoll from "../../../components/LoadingRoll";

export const CollectionTop = () => {
  const [filmsCollection, setFilmsCollection] = useState<Film[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    getFilmsCollection();
    setLoading(true);
  }, []);

  const checkPathName = () => {
    const pathName = location.pathname.slice(-3);
    if (pathName === "250") {
      return "TOP_250_BEST_FILMS";
    } else if (pathName === "100") {
      return "TOP_100_POPULAR_FILMS";
    } else {
      return "";
    }
  };
  const getFilmsCollection = async () => {
    const nextPage = currentPage + 1;
    const { films } = await getFilms({ type: checkPathName(), page: nextPage });
    if (films) {
      setFilmsCollection((oldState) => oldState.concat(films));
      setCurrentPage(nextPage);
    }
    setLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <LoadingRoll />
      ) : (
        <div>
          <ContainerFilm>
            {filmsCollection.map((elem, index) => {
              return (
                <>
                  <FilmBlock key={index}>
                    {elem.rating && <Rating>{elem.rating}</Rating>}
                    <NavLink to={`/film/${elem.filmId}`}>
                      <TopFilmsImg src={elem.posterUrlPreview} />
                      <FilmsDescription>{validateName(elem.nameRu, 14)}</FilmsDescription>
                    </NavLink>
                  </FilmBlock>
                </>
              );
            })}
          </ContainerFilm>
          <ContainerFilm>
            <FilmButton onClick={getFilmsCollection}>Загрузить еще</FilmButton>
          </ContainerFilm>
        </div>
      )}
    </>
  );
};

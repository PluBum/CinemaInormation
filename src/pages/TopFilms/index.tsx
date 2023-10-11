import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFilms, getPremiers } from "../../request";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import { FilmCardComponent } from "./components/cardTopFilm";
import { Film, Premiers } from "../../types";
import { FilmPremierComponent } from "./components/cardPremier";
import { FilmTitle, FilmsDescription } from "./style";
import LoadingRoll from "../../components/LoadingRoll";
import { CarouselContainer } from "../FilmCollection/style/style";

export const TopFilmsPage: React.FC = () => {
  const [top100Films, setTop100Films] = useState<Film[]>([]);
  const [top250Films, setTop250Films] = useState<Film[]>([]);
  const [premierFilms, setPremierFilms] = useState<Premiers[]>([]);
  const [currentTop100Page, setCurrentTop100Page] = useState<number>(1);
  const [currentTop250Page, setCurrentTop250Page] = useState<number>(1);
  const [isLoading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getTop250Films();
    getTop100Films();
    getPremierFilms();
    if (localStorage.getItem("myKey") === null) {
      navigate("/auth");
    } else {
      navigate("/");
    }
  }, []);

  const getTop250Films = async () => {
    setCurrentTop250Page(currentTop250Page + 1);
    const { films } = await getFilms({ type: "TOP_250_BEST_FILMS", page: currentTop250Page });
    setTop250Films(films);
    top250Films && setTop250Films((oldState) => oldState.concat(films));
  };

  const getTop100Films = async () => {
    setCurrentTop100Page(currentTop250Page + 1);
    const { films } = await getFilms({ type: "TOP_100_POPULAR_FILMS", page: currentTop100Page });
    setTop100Films(films);
    top100Films && setTop100Films((oldState) => oldState.concat(films));
  };

  const getPremierFilms = async () => {
    let currentDate = new Date();
    let currentMonth = currentDate.toLocaleString("en-US", { month: "long" }).toUpperCase();
    const currentYear = new Date().getFullYear();

    const { items } = await getPremiers({ year: currentYear, month: currentMonth });
    setPremierFilms(items);
    setLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <LoadingRoll />
      ) : (
        <CarouselContainer>
          <div>
            <FilmTitle>ТОП-250 ЛУЧШИХ ФИЛЬМОВ</FilmTitle>
            <Swiper
              slidesPerView={6}
              spaceBetween={30}
              navigation={true}
              modules={[Navigation]}
              onReachEnd={getTop250Films}
            >
              {top250Films &&
                top250Films.map((film, i) => (
                  <SwiperSlide style={{ textAlign: "center" }} key={`${film.filmId}-${i}`}>
                    <FilmCardComponent {...film}></FilmCardComponent>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>

          <div>
            <FilmTitle>ТОП-100 ПОПУЛЬЯРНЫХ ФИЛЬМОВ</FilmTitle>
            <Swiper
              slidesPerView={6}
              spaceBetween={30}
              navigation={true}
              modules={[Navigation]}
              onReachEnd={getTop100Films}
            >
              {top100Films &&
                top100Films.map((film, i) => (
                  <SwiperSlide style={{ textAlign: "center" }} key={`${film.filmId}-${i}`}>
                    <FilmCardComponent {...film}></FilmCardComponent>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>

          <div>
            <FilmTitle>БЛИЖАЙШИЕ ПРЕМЬЕРЫ</FilmTitle>
            <Swiper slidesPerView={6} spaceBetween={30} navigation={true} modules={[Navigation]}>
              {premierFilms &&
                premierFilms.map((film, i) => (
                  <SwiperSlide style={{ textAlign: "center" }} key={`${film.kinopoiskId}-${i}`}>
                    <FilmPremierComponent {...film}></FilmPremierComponent>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </CarouselContainer>
      )}
    </>
  );
};

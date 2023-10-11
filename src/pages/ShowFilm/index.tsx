import { useEffect, useState } from "react";
import { getFilm } from "../../request";
import { OneFilm } from "../../types";
import { useNavigate, useParams } from "react-router-dom";
import {
  BackButton,
  FilmBLock,
  FilmContainer,
  FilmElement,
  FilmText,
  FilmTextSmall,
  FilmTextSubTitle,
  FilmTextTitle,
  FilmTextVote,
  SubText,
  Syka,
} from "./style";
import LoadingRoll from "../../components/LoadingRoll";

export const FilmPage = () => {
  const [film, setFilm] = useState<OneFilm | null>(null);
  const [isLoaing, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getFilmInfo();
  }, []);

  const getFilmInfo = async () => {
    if (!id) return;
    const film = await getFilm(id);
    setLoading(false);
    setFilm(film);
  };

  const convertTime = (filmLength: number | undefined) => {
    if (filmLength !== undefined) {
      let hours = Math.floor(filmLength / 60);
      let minutes = filmLength % 60;

      let formattedHours = hours.toString().padStart(2, "0");
      let formattedMinutes = minutes.toString().padStart(2, "0");

      return `${formattedHours}:${formattedMinutes}`;
    }
  };

  const convertAge = (ratingAgeLimits: string | undefined) => {
    if (ratingAgeLimits !== undefined) {
      const parsedAge = parseInt(ratingAgeLimits?.substring(3));
      return parsedAge;
    } else return "";
  };

  const validateGenre = () => {
    if (!film?.genres) return;
    const genres = film?.genres.map((item) => item.genre);
    return genres.join(", ");
  };
  const validateCountry = () => {
    if (!film?.countries) return;
    const genres = film?.countries.map((item) => item.country);
    return genres.join(", ");
  };

  const checkRating = () => {
    if (film) {
      if (film.ratingKinopoisk >= 7) {
        return "green";
      } else if (film.ratingKinopoisk < 7 && film.ratingKinopoisk >= 4) {
        return "orange";
      } else return "red";
    }
  };

  return (
    <>
      {isLoaing ? (
        <LoadingRoll />
      ) : (
        <FilmBLock>
          <div>
            <Syka src={film?.posterUrl} />
          </div>
          <FilmContainer>
            <FilmTextTitle>
              {film?.nameRu} ({film?.year})
            </FilmTextTitle>
            <SubText>{film?.nameOriginal} </SubText>
            <SubText>{convertAge(film?.ratingAgeLimits)}+</SubText>
            <FilmTextSubTitle>О фильме</FilmTextSubTitle>
            <div style={{ width: "50vw" }}>
              <FilmText>{film?.description}</FilmText>
            </div>

            <FilmElement>
              <SubText>Год производства: </SubText>
              <FilmText>{film?.year} г.</FilmText>
            </FilmElement>
            <FilmElement>
              <SubText>Страна: </SubText>
              <FilmText>{validateCountry()} </FilmText>
            </FilmElement>
            <FilmElement>
              <SubText>Жанр: </SubText>
              <FilmText>{validateGenre()}</FilmText>
            </FilmElement>
            <FilmElement>
              {typeof film?.filmLength === "number" && (
                <div>
                  <SubText>Время: </SubText>
                  <FilmText>
                    {film?.filmLength} мин. / {convertTime(film?.filmLength)}
                  </FilmText>
                </div>
              )}
            </FilmElement>
          </FilmContainer>
          <div style={{ marginLeft: "10px" }}>
            <BackButton onClick={() => navigate(-1)}>Назад</BackButton>
            <FilmTextVote style={{ color: checkRating() }}>{film?.ratingKinopoisk}</FilmTextVote>
            <FilmTextSmall> {film?.ratingKinopoiskVoteCount} оценок</FilmTextSmall>
          </div>
        </FilmBLock>
      )}
    </>
  );
};
export default FilmPage;

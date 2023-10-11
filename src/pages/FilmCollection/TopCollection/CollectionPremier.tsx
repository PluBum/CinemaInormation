import { useEffect, useState } from "react";
import { Premiers } from "../../../types";
import { NavLink } from "react-router-dom";
import { FilmTitle, FilmsDescription, TopFilmsImg } from "../../TopFilms/style";
import { validateName } from "../../../utils/validateName";
import { ContainerFilm, FilmBlock, StyledButton } from "../style/style";
import { getPremiers } from "../../../request";
import { Calendar } from "primereact/calendar";
import { Nullable } from "primereact/ts-helpers";
import { addLocale } from "primereact/api";
import LoadingRoll from "../../../components/LoadingRoll";

export const CollectionPremier = () => {
  const [filmsCollection, setFilmsCollection] = useState<Premiers[]>([]);
  const [date, setDate] = useState<Nullable<Date>>(null);
  const [dateChange, setDateChange] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const monthNames = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];

  addLocale("ru", {
    firstDayOfWeek: 1,
    dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
    dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
    dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    monthNames: [
      "январь",
      "февраль",
      "март",
      "апрель",
      "май",
      "июнь",
      "июль",
      "август",
      "сентябрь",
      "октябрь",
      "ноябрь",
      "декабрь",
    ],
    monthNamesShort: ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"],
  });

  useEffect(() => {
    getFilmsCollection(date);
  }, [dateChange]);

  useEffect(() => {
    getFilmsCollection(null);
    setLoading(true);
  }, []);

  const changeDate = () => {
    setLoading(true);
    let changeDate2 = !dateChange;
    setDateChange(changeDate2);
  };
  const determinationDate = (date: any) => {
    if (date === null) {
      let currentDate = new Date();
      let month = currentDate.toLocaleString("en-US", { month: "long" }).toUpperCase();
      let year = new Date().getFullYear();
      let data = [month, year];
      return data;
    } else {
      let month = monthNames[date.getMonth()];
      let year = date.getFullYear();
      let data = [month, year];
      return data;
    }
  };
  const getFilmsCollection = async (date: any) => {
    const data = determinationDate(date);
    const { items } = await getPremiers({ year: data[1], month: data[0] });
    setFilmsCollection(items);
    setLoading(false);
  };

  return (
    <>
      <FilmTitle>Премьеры</FilmTitle>
      <ContainerFilm>
        <FilmsDescription>Введите дату по которым хотите получить премьеры</FilmsDescription>
      </ContainerFilm>

      <ContainerFilm>
        <Calendar
          value={date}
          locale="ru"
          onChange={(e) => setDate(e.value)}
          view="month"
          dateFormat="mm.yy"
          showIcon
          monthNavigator
        />
        <StyledButton onClick={changeDate} style={{ marginLeft: "5px" }}>
          Ввод
        </StyledButton>
      </ContainerFilm>
      {isLoading ? (
        <LoadingRoll />
      ) : (
        <div>
          <ContainerFilm>
            {filmsCollection.map((elem, index) => {
              return (
                <>
                  <FilmBlock key={index}>
                    <NavLink to={`/film/${elem.kinopoiskId}`}>
                      <TopFilmsImg src={elem.posterUrlPreview} />
                      <FilmsDescription>{validateName(elem.nameRu, 14)}</FilmsDescription>
                    </NavLink>
                  </FilmBlock>
                </>
              );
            })}
          </ContainerFilm>
        </div>
      )}
    </>
  );
};

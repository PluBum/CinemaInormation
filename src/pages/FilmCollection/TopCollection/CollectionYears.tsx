import { useEffect, useState } from "react";
import { ListFilmType, OneFilm } from "../../../types";
import { getFilmsByYear } from "../../../request";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";

import {
  ButtonContainer,
  ContainerFilm,
  ContainerFilmSearch,
  FilmBlock,
  FilmButton,
  FilterMenu,
  InputCintainer,
  Label,
  MainContainer,
  StyledButton,
} from "../style/style";

import { NavLink } from "react-router-dom";
import { FilmsDescription, Rating, TopFilmsImg } from "../../TopFilms/style";
import { validateName } from "../../../utils/validateName";
import LoadingRoll from "../../../components/LoadingRoll";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { classNames } from "primereact/utils";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Nullable } from "primereact/ts-helpers";

interface MediaGroup {
  name: string;
  code: ListFilmType;
}
interface MediaGroupRait {
  name: string;
  code: number;
}
export const CollectionYears = () => {
  const currentYear = new Date().getFullYear();
  const [filmsCollection, setFilmsCollection] = useState<OneFilm[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [dateChange, setDateChange] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [selectedGroup, setSelectedGroup] = useState<MediaGroup | null>(null);
  const [selectedRaitingMin, setSelectedRaitingMin] = useState<MediaGroup | null>(null);
  const [valueMinYear, setValueMinYear] = useState<Nullable<number | null>>(currentYear);
  const [valueYear, setValueYear] = useState<Nullable<number | null>>(currentYear);
  const [valueMaxYear, setValueMaxYear] = useState<Nullable<number | null>>(currentYear);
  const [isInputVisible, setInputVisibility] = useState(false);
  const [parent] = useAutoAnimate();

  const groups: MediaGroup[] = [
    { name: "Фильмы", code: "FILM" },
    { name: "ТВ-Шоу", code: "TV_SHOW" },
    { name: "Сериалы", code: "TV_SERIES" },
    { name: "Мини сериалы", code: "MINI_SERIES" },
    { name: "Все", code: "ALL" },
  ];

  const raitingMin: MediaGroupRait[] = [
    { name: "От 5", code: 5 },
    { name: "От 6", code: 6 },
    { name: "От 7", code: 7 },
    { name: "От 8", code: 8 },
    { name: "От 9", code: 9 },
  ];

  useEffect(() => {
    setLoading(true);
    getFilmsCollection();
  }, []);

  useEffect(() => {
    setLoading(true);
    setFilmsCollection([]);
    getFilmsCollection();
  }, [dateChange]);

  const changeDate = () => {
    setCurrentPage(1);
    setDateChange(!dateChange);
    if (!isInputVisible) {
      setValueMaxYear(valueYear);
      setValueMinYear(valueYear);
    }
  };

  const isYearInvalid = () => {
    if (valueMinYear && valueMaxYear) {
      if (valueMinYear > valueMaxYear) {
        return true;
      } else {
        return false;
      }
    }
  };

  const clickHandler = () => {
    setInputVisibility(!isInputVisible);
  };

  const getFilmsCollection = async () => {
    const nextPage = currentPage + 1;
    const { items } = await getFilmsByYear({
      type: selectedGroup?.code,
      page: currentPage,
      ratingFrom: selectedRaitingMin?.code,
      ratingTo: "10",
      yearFrom: valueMinYear,
      yearTo: valueMaxYear,
    });
    if (items && items.length > 0) {
      setFilmsCollection((oldState) => oldState.concat(items));
      setCurrentPage(nextPage);
      setLoading(false);
    }
  };
  return (
    <div ref={parent}>
      {isLoading ? (
        <LoadingRoll />
      ) : (
        <MainContainer>
          <ContainerFilmSearch>
            {filmsCollection.map((elem, index) => {
              return (
                <>
                  <FilmBlock key={index}>
                    {elem.ratingImdb && <Rating>{elem.ratingImdb}</Rating>}
                    <NavLink to={`/film/${elem.kinopoiskId}`}>
                      <TopFilmsImg src={elem.posterUrlPreview} />
                      <FilmsDescription>{validateName(elem.nameRu, 20)}</FilmsDescription>
                    </NavLink>
                  </FilmBlock>
                </>
              );
            })}
            <ContainerFilm>
              <FilmButton onClick={getFilmsCollection}>Загрузить еще</FilmButton>
            </ContainerFilm>
          </ContainerFilmSearch>

          <FilterMenu>
            <Dropdown
              value={selectedGroup}
              onChange={(e: DropdownChangeEvent) => setSelectedGroup(e.value)}
              options={groups}
              optionLabel="name"
              placeholder="Выберите тип"
              className="w-full md:w-14rem"
            />
            <Dropdown
              value={selectedRaitingMin}
              onChange={(e: DropdownChangeEvent) => setSelectedRaitingMin(e.value)}
              options={raitingMin}
              optionLabel="name"
              placeholder="Выберите минимальный рейтинг"
              className="w-full md:w-14rem"
            />
            {!isInputVisible && (
              <InputCintainer>
                <Label htmlFor="yearfrom">Введите год </Label>
                <InputNumber value={valueYear} onValueChange={(e) => setValueYear(e.value)} useGrouping={false} />
              </InputCintainer>
            )}
            {isInputVisible && (
              <InputCintainer>
                <Label htmlFor="yearfrom">Введите год от</Label>
                <InputNumber
                  value={valueMinYear}
                  onValueChange={(e) => setValueMinYear(e.value)}
                  className={classNames({ "p-invalid": isYearInvalid() })}
                  useGrouping={false}
                />
              </InputCintainer>
            )}
            {isInputVisible && (
              <InputCintainer>
                <Label htmlFor="yearfrom">Введите год до</Label>
                <InputNumber
                  inputId="withoutgrouping"
                  value={valueMaxYear}
                  onValueChange={(e) => setValueMaxYear(e.value)}
                  className={classNames({ "p-invalid": isYearInvalid() })}
                  useGrouping={false}
                />
              </InputCintainer>
            )}
            <ButtonContainer ref={parent}>
              <StyledButton severity="info" onClick={clickHandler} style={{ marginRight: "10px" }}>
                {isInputVisible ? "Скрыть фильтр" : "Показать фильтр"}
              </StyledButton>
              <Button label="Ввод" severity={isYearInvalid() ? "danger" : "info"} onClick={changeDate} raised />
            </ButtonContainer>
          </FilterMenu>
        </MainContainer>
      )}
    </div>
  );
};

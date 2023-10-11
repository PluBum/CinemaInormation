import { useEffect, useState } from "react";
import { getFilmsByYear } from "../../request";
import { OneFilm } from "../../types";
import "primeicons/primeicons.css";

import {
  HeaderFilmContainer,
  HeaderFilmContainerSubText,
  HeaderFilmContainerText,
  HeaderFilmsImg,
  Line,
  OptionsFilms,
  OptionsFilmsItem,
  StyledInput,
} from "./style/style";
import { NavLink } from "react-router-dom";

import { Button } from "primereact/button";

export const SearchInput: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [films, setFilms] = useState<OneFilm[]>();
  const [toggler, setToggler] = useState(true);
  useEffect(() => {
    searchFilms(searchValue);
  }, [toggler]);
  const searchFilms = async (value: string) => {
    setSearchValue(value);
    const { items } = await getFilmsByYear({ keyword: value });
    setFilms(items);
  };

  const switchValue = () => {
    setSearchValue("");
  };

  const changeToggler = () => {
    setToggler(!toggler);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setToggler(!toggler);
    }
  };
  return (
    <div style={{ position: "relative" }}>
      <span className="p-input-icon-left">
        {searchValue ? (
          <i onClick={switchValue} className="pi pi-times" />
        ) : (
          <i className="pi pi-search" onClick={changeToggler} style={{ fontSize: "1rem" }} />
        )}

        <StyledInput
          placeholder="Поиск"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleKeyPress}
        ></StyledInput>
      </span>

      <Button style={{ height: "30px" }} onClick={changeToggler}>
        Поиск
      </Button>
      {searchValue !== "" && (
        <OptionsFilms>
          {films?.map((elem) => {
            return (
              <div style={{ width: "100%" }}>
                <NavLink to={`/film/${elem.kinopoiskId}`} key={elem.kinopoiskId} reloadDocument>
                  <HeaderFilmContainer>
                    <HeaderFilmsImg
                      src={elem.posterUrlPreview ? elem.posterUrlPreview : elem.posterUrl}
                    ></HeaderFilmsImg>
                    <OptionsFilmsItem>
                      <HeaderFilmContainerText>{elem.nameRu}</HeaderFilmContainerText>
                      <HeaderFilmContainerSubText>{elem.nameOriginal}</HeaderFilmContainerSubText>
                      <HeaderFilmContainerSubText style={{ marginTop: "10px" }}>
                        Год: {elem.year} | Оценка: {elem.ratingKinopoisk}
                      </HeaderFilmContainerSubText>
                    </OptionsFilmsItem>
                  </HeaderFilmContainer>
                </NavLink>
                <Line />
              </div>
            );
          })}
        </OptionsFilms>
      )}
    </div>
  );
};

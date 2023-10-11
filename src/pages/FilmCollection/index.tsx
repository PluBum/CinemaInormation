import { NavLink } from "react-router-dom";
import { FilmTitle } from "../TopFilms/style";
import { CollectionBlockText, CollectionText, TopBlock, TopContainer, TopContainerBlock } from "./style/style";

export const FilmCollection = () => {
  return (
    <div>
      <FilmTitle>ПОДБОРКИ</FilmTitle>
      <TopContainer>
        <NavLink to="/collection/top_250">
          <TopContainerBlock>
            <TopBlock>
              <CollectionText>ТОП-250 ЛУЧШИХ ФИЛЬМОВ</CollectionText>
            </TopBlock>
            <CollectionBlockText>Топ-250 лучших фильмов</CollectionBlockText>
          </TopContainerBlock>
        </NavLink>
        <NavLink to="/collection/top_100">
          <TopContainerBlock>
            <TopBlock>
              <CollectionText>ТОП-100 ПОПУЛЬЯРНЫХ ФИЛЬМОВ</CollectionText>
            </TopBlock>
            <CollectionBlockText>Топ-100 популярных фильмов</CollectionBlockText>
          </TopContainerBlock>
        </NavLink>
        <NavLink to="/collection/premier">
          <TopContainerBlock>
            <TopBlock>
              <CollectionText>БЛИЖАЙШИЕ ПРЕМЬЕРЫ</CollectionText>
            </TopBlock>
            <CollectionBlockText>Ближайшие премьеры</CollectionBlockText>
          </TopContainerBlock>
        </NavLink>
        <NavLink to="/collection/years">
          <TopContainerBlock>
            <TopBlock>
              <CollectionText>ПОДБОРКИ ФИЛЬМОВ ПО ГОДАМ</CollectionText>
            </TopBlock>
            <CollectionBlockText>Подборки фильмов по годам</CollectionBlockText>
          </TopContainerBlock>
        </NavLink>
      </TopContainer>
    </div>
  );
};

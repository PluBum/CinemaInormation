import { NavLink } from "react-router-dom";
import { Premiers } from "../../../types";
import { FilmsDescription, TopFilmsBlock, TopFilmsImg } from "../style";

export type CardProps = Premiers;

export const FilmPremierComponent = (props: CardProps) => {
  return (
    <div>
      <TopFilmsBlock>
        <NavLink to={`/film/${props.kinopoiskId}`}>
          <TopFilmsImg src={props.posterUrlPreview} />
          <FilmsDescription>{props.nameRu}</FilmsDescription>
        </NavLink>
      </TopFilmsBlock>
    </div>
  );
};

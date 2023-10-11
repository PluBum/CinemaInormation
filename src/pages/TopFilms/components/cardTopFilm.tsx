import { NavLink } from "react-router-dom";
import { Film } from "../../../types";
import { FilmsDescription, Rating, TopFilmsBlock, TopFilmsImg } from "../style";
import { validateName } from "../../../utils/validateName";

export type CardProps = Film & {
  rating: number;
};

export const FilmCardComponent = (props: CardProps) => {
  return (
    <div>
      <TopFilmsBlock>
        {props.rating && <Rating>{props.rating}</Rating>}
        <NavLink to={`/film/${props.filmId}`}>
          <TopFilmsImg src={props.posterUrlPreview} />
          <FilmsDescription>{validateName(props.nameRu, 14)}</FilmsDescription>
        </NavLink>
      </TopFilmsBlock>
    </div>
  );
};

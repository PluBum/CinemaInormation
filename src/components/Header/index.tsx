import { NavLink } from "react-router-dom";

import { SearchInput } from "../SearchInput";
import { Headder, HeadderContainer, HeadderElement, HeadderInput, HeadderSubTitle, HeadderTitle } from "./style/style";

const HeaderPage = () => {
  return (
    <div>
      <Headder>
        <HeadderContainer>
          <NavLink style={{ textDecoration: "none", color: "white" }} to="/">
            <HeadderTitle>FILMS</HeadderTitle>
          </NavLink>
          <HeadderElement>
            <NavLink style={{ textDecoration: "none", color: "white" }} to="/collection">
              <HeadderSubTitle>Подборки</HeadderSubTitle>
            </NavLink>
          </HeadderElement>
          <HeadderInput>
            <SearchInput />
          </HeadderInput>
        </HeadderContainer>
      </Headder>
    </div>
  );
};

export default HeaderPage;

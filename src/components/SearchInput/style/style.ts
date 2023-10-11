import { InputText } from "primereact/inputtext";
import styled from "styled-components";

export const OptionsFilms = styled.div`
  position: absolute;
  /* top: -100%;
  transform: translateY(30%); */
  width: 100%;
  background-color: #fff;
  border-radius: 15px;
  border: 1px solid #c8c8c8;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  max-height: 550px;
  overflow: auto;
  z-index: 2;
  margin-top: 5px;
  width: 25vw;
  max-width: 25vw;
  min-width: 350px;
`;

export const OptionsFilmsItem = styled.div`
  width: 100%;
  background: #fff;
  color: #000;
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  gap: 5px;
`;
export const HeaderFilmsImg = styled.img`
  width: 85px;
  height: 115px;
  margin: 0 10px;
`;
export const StyledInput = styled(InputText)`
  width: 25vw;
  height: 30px;
  margin-right: 20px;
`;
export const HeaderFilmContainer = styled.div`
  display: flex;
  :first-child {
    margin-top: 10px;
  }
`;
export const HeaderFilmContainerText = styled.a`
  font-family: Montserrat;
  font-size: 20px;
  cursor: pointer;
  color: #f2bc50;
  display: flex;
  flex-direction: column;
`;
export const HeaderFilmContainerSubText = styled.a`
  font-family: Montserrat;
  font-size: 13px;
  font-weight: 300;
  color: #afafaf;
`;
export const Line = styled.div`
  height: 1px;
  background-color: #afafaf;
  width: 100%;
  margin-top: 10px;
`;

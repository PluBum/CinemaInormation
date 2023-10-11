import { Button } from "primereact/button";
import styled from "styled-components";

export const TopBlock = styled.div`
  border-radius: 10px;
  background: #292a2e;
  width: 370px;
  height: 217px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #f2bc49;
  }
`;
export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 20px;
  flex-wrap: wrap;
`;
export const TopContainerBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  cursor: pointer;
`;
export const CollectionText = styled.a`
  color: #565c67;
  font-family: Montserrat;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;
  padding: 5px;
`;
export const CollectionBlockText = styled.a`
  color: #fff;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-align: center;
  margin-top: 10px;
`;
export const ContainerFilm = styled.div`
  display: flex;
  margin: 10px;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  justify-content: center;
`;
export const ContainerBlock = styled.div`
  width: 300px;
  height: 400px;
`;
export const FilmBlock = styled.div`
  margin: 10px;
  display: inline-block;
  position: relative;
`;
export const FilmButton = styled.a`
  cursor: pointer;
  color: #f2bc49;
  font-family: Montserrat;
  font-size: 15px;
  padding-bottom: 15px;
`;
export const StyledButton = styled(Button)`
  text-align: center;
`;
export const CarouselContainer = styled.div`
  width: 90vw;
  margin: 0 auto;
`;
export const MainContainer = styled.div`
  display: flex;
`;
export const FilterMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 20px;
  margin-top: 20px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const InputCintainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
export const Label = styled.label`
  font-family: Montserrat;
  color: white;
`;
export const ContainerFilmSearch = styled.div`
  display: flex;
  margin: 10px;
  flex-wrap: wrap;
  width: 70%;
  height: 100%;
  justify-content: center;
`;

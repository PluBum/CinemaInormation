import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const TopFilmsImg = styled.img`
  width: 234px;
  height: 360px;
  object-fit: cover;
  border-radius: 10px;
`;
export const TopFilmsBlock = styled.div`
  width: 234px;
  height: 360px;
  display: inline-block;
  position: relative;
`;
export const Rating = styled.div`
  display: inline-block;
  position: absolute;
  background-color: #f2bc49;
  padding: 5px 20px;
  margin-top: 20px;
  color: black;
  left: -11px;
`;
export const FilmsText = styled.p`
  font-size: medium;
  font-family: "Montserrat", sans-serif;
`;
export const FilmsDescription = styled.p`
  color: #fff;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 10px;
`;
export const FilmTitle = styled.p`
  color: #fff;
  font-family: Montserrat;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 91px;
  margin-top: 20px;
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

import { createGlobalStyle } from "styled-components";

import MontserratBoldTtf from "./fonts/Montserrat/static/Montserrat-Bold.ttf";
import MontserratMediumTtf from "./fonts/Montserrat/static/Montserrat-Medium.ttf";
import MontserratRegularTtf from "./fonts/Montserrat/static/Montserrat-Regular.ttf";
import MontserratSemiBoldTtf from "./fonts/Montserrat/static/Montserrat-SemiBold.ttf";

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Montserrat';
  font-weight: normal;
  font-style: normal;
  font-display: swap;
  src: url(${MontserratRegularTtf}) format('truetype'),
    url(${MontserratRegularTtf}) format('truetype'),
    
  }

  @font-face {
    font-family: 'Montserrat';
    font-weight: 700;
    font-style: normal;
    font-display: swap;
    src: url(${MontserratBoldTtf});
    src: url(${MontserratBoldTtf}) format('truetype');
  }

  @font-face {
    font-family: 'Montserrat';
    font-weight: 500;
    font-style: normal;
    font-display: swap;
    src: url(${MontserratMediumTtf});
    src: url(${MontserratMediumTtf}) format('truetype');
  }
  @font-face {
    font-family: 'Montserrat';
    font-weight: 600;
    font-style: normal;
    font-display: swap;
    src: url(${MontserratSemiBoldTtf});
    src: url(${MontserratSemiBoldTtf}) format('truetype');
  }
  body{
   font-family: 'Montserrat', sans-serif;
   background-color: #191a1d;
   border: none;
   outline: none;
   text-decoration: none;
   overflow-x: hidden;


  }
  a{
   border: none;
   outline: none;
   text-decoration: none;
  }


`;

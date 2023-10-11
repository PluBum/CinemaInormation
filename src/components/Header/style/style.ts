import styled from "styled-components";

export const Headder = styled.div`
  background: #191a1d;
  width: 100%;
  height: 10vh;
  display: flex;
  flex-wrap: wrap;
`;
export const HeadderContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const HeadderTitle = styled.p`
  color: #fff;
  font-family: Montserrat;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 25px;
`;
export const HeadderSubTitle = styled.a`
  color: #fff;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const HeadderElement = styled.div`
  margin: 35px 0 25px 70px;
`;
export const HeadderInput = styled.div`
  margin: 30px 0 25px 40vw;
  width: 50vw;
  @media (max-width: 1186px) {
    margin: 30px 0 25px 20vw;
  }
  @media (max-width: 796px) {
    margin: 30px 0 25px 5vw;
  }
`;

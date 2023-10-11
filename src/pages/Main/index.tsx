import { useEffect } from "react";
import { TopFilmsPage } from "../TopFilms";
import { checkKey } from "../../utils/checkKey";

const MainPage: React.FC = () => {
  useEffect(() => {
    //  checkKey();
  }, []);

  return <TopFilmsPage></TopFilmsPage>;
};

export default MainPage;

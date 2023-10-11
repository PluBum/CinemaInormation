import { useNavigate } from "react-router-dom";
import HeaderPage from "../Header";
import { useEffect } from "react";

export const TemplateLayot = () => {
  const navigate = useNavigate();
  useEffect(() => {
    checkKey();
  });
  const checkKey = () => {
    console.log(1);
    const key = localStorage.getItem("myKey");
    if (!key) {
      navigate("/auth");
    }
  };
  return <HeaderPage></HeaderPage>;
};

import { useNavigate } from "react-router-dom";

export const checkKey = () => {
  const navigate = useNavigate();
  const key = localStorage.getItem("myKey");
  if (!key) {
    navigate("/auth");
  }
};

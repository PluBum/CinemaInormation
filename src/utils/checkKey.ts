import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
export const checkKey = () => {
  const key = localStorage.getItem("myKey");
  if (!key) {
    navigate("/auth");
  }
};

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContainer } from "./styled";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export const AuthPage = () => {
  const [localValue, setLocalValue] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("myKey") !== null) {
      navigate("/");
    } else {
      navigate("/auth");
    }
  }, []);

  const useLogoutTimer = () => {
    localStorage.setItem("myKey", localValue);
    navigate("/");
  };

  return (
    <AuthContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid white",
          borderRadius: "10px",
          padding: "20px",
          marginTop: "300px",
          top: "50%",
        }}
      >
        <h1 style={{ fontFamily: "Montserrat", color: "white" }}>Авторизация</h1>
        <div>
          <InputText
            type="text"
            placeholder="Введите ваш ключ"
            onChange={(e) => {
              setLocalValue(e.target.value);
            }}
          />
          <Button onClick={useLogoutTimer} style={{ marginLeft: "10px" }}>
            Ввод
          </Button>
        </div>
      </div>
    </AuthContainer>
  );
};

export default AuthPage;

import api from "@/services/api";
import { useRouter } from "next/router";
import { setCookie, destroyCookie } from "nookies";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [modalVisibility, setModalVisibility] = useState(false);
  const [token, setToken] = useState(null);
  const [decodedToken, setDecodedToken] = useState(null);

  const registerUser = (userData) => {
    api
      .post("/users", userData)
      .then(() => {
        toast.success("Usuario cadastrado com sucesso!");
        setModalVisibility(true);
      })
      .catch((error) => {
        console.error(error);
        if (error.response.data.message) {
          toast.error(`${error.response.data.message}`, { autoClose: 4000 });
        } else {
          toast.error("Erro desconhecido durante o cadastro do usuário");
        }
      });
  };

  const login = async (loginData) => {
    api
      .post("/login", loginData)
      .then((response) => {
        setCookie(null, "motorshop.token", response.data.token, {
          maxAge: 60 * 30,
          path: "/",
        });
      })
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        console.error(error);

        if (error.message == "Network Error") {
          return toast.error("Problemas de conexão com o servidor");
        }

        toast.error("Credenciais invalidas!");
      });
  };

  return (
    <AuthContext.Provider
      value={{
        registerUser,
        login,
        modalVisibility,
        setModalVisibility,
        token,
        setToken,
        decodedToken,
        setDecodedToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

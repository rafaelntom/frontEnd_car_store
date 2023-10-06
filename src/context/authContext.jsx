import api from "@/services/api";
import { useRouter } from "next/router";
import { setCookie } from "nookies";
import { ReactNode, createContext, useContext } from "react";
import { toast } from "react-toastify";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();

  const register = (userData) => {
    api
      .post("/users", userData)
      .then(() => {
        router.push("/login");
      })
      .catch((error) => {
        console.log(error);
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
        console.error();
        toast.error("Credenciais invalidas!");
      });
  };

  return (
    <AuthContext.Provider value={{ register, login }}>
      {children}
    </AuthContext.Provider>
  );
};

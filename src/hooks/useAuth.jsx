import { useEffect, useState } from "react";
import nookies, { destroyCookie } from "nookies";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";
import axiosApi from "@/services/api";
import { toast } from "react-toastify";

export const useAuth = () => {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [decodedToken, setDecodedToken] = useState(null);

  const logOutHook = () => {
    destroyCookie(null, "motorshop.token", { path: "/" });
    setToken(null);
    setDecodedToken(null);
    toast("Usuário deslogado");
    setTimeout(() => {
      router.replace("/login");
    }, 800);
  };

  useEffect(() => {
    const cookies = nookies.get();
    const authToken = cookies["motorshop.token"];
    const decodedJwtToken = jwt.decode(authToken);

    if (authToken) {
      axiosApi.defaults.headers.common.authorization = `Bearer ${cookies["motorshop.token"]}`;
    }

    setToken(authToken || null);
    setDecodedToken(decodedJwtToken || null);
  }, []);

  return { token, decodedToken, logOutHook };
};

import { useEffect, useState } from "react";
import nookies from "nookies";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";
import axiosApi from "@/services/api";

export const useAuth = () => {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [decodedToken, setDecodedToken] = useState(null);

  useEffect(() => {
    const cookies = nookies.get();
    const authToken = cookies["motorshop.token"];
    const decodedJwtToken = jwt.decode(authToken);

    if (cookies["motorshop.token"]) {
      axiosApi.defaults.headers.common.authorization = `Bearer ${cookies["motorshop.token"]}`;
    }

    setToken(authToken || null);
    setDecodedToken(decodedJwtToken || null);
  }, []);

  const clearAuthToken = (event) => {
    event.preventDefault();
    nookies.destroy(null, "motorshop.token");
    setToken(null);
    router.replace("/login");
  };

  return { token, clearAuthToken, decodedToken };
};

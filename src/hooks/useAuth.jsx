import { useEffect, useState } from "react";
import nookies from "nookies";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";
import axiosApi from "@/services/api";
import { toast } from "react-toastify";

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [decodedToken, setDecodedToken] = useState(null);

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

  return { token, decodedToken };
};

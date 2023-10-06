import { useEffect, useState } from "react";
import nookies from "nookies";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";

export const useAuth = () => {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [decodedToken, setDecodedToken] = useState(null);

  useEffect(() => {
    const cookies = nookies.get();
    const authToken = cookies["motorshop.token"];
    const decodedJwtToken = jwt.decode(authToken);

    setToken(authToken || null);
    setDecodedToken(decodedJwtToken || null);
  }, []);

  const clearAuthToken = () => {
    nookies.destroy(null, "motorshop.token");
    setToken(null);
    router.replace("/");
  };

  return { token, clearAuthToken, decodedToken };
};

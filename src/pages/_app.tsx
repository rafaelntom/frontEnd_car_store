import { AuthProvider } from "@/context/authContext";
import { ModalProvider } from "@/context/modalContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1800}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <AuthProvider>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </AuthProvider>
    </>
  );
}

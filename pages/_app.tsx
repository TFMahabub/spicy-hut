import MainLayout from "@/Components/layouts/MainLayout";
import store from "@/Redux/store";
import "@/styles/globals.css";
import "@/styles/navbar.css";
import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AnimatePresence>
      <motion.div
        key={router.route}
        initial={{ opacity: 0, }}
        animate={{ opacity: 1, }}
        exit={{ opacity: 0, }}
        variants={{
          initialAnimation: {
            opacity: 0,
          },
          animationAnimation: {
            opacity: 1,
          },
          exitAnimation: {
            opacity: 0,
          }
        }}
      >
        <Provider store={store}>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </Provider>
      </motion.div>
    </AnimatePresence>
  );
}

import MainLayout from "@/Components/layouts/MainLayout";
import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <AnimatePresence>
      <MainLayout>
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
          <Component {...pageProps} />
        </motion.div>
      </MainLayout>
    </AnimatePresence>
  );
}

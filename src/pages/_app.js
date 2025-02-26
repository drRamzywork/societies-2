import "@/styles/globals.scss";
import { Cairo } from "next/font/google";

const cairo = Cairo({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={`${cairo.className}`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

import "@/styles/globals.css";
import "@/components/Navigation/Navigation.css";
import "@/components/Legend/Legend.css";
import "@/components/Footer/Footer.css";
import "@/components/Summary/Summary.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

import { SWRConfig } from "swr";
import "../styles/globals.css";

const fetcher = (url: string) => fetch(url).then((response) => response.json());

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher: fetcher }}>
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;

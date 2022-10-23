import { Mycontext } from "../src/components/context/Context";
import Layout from "../src/components/Layout";
import "../styles/globals.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/800.css";
import Cartmodal from "../src/components/Cartmodal";

function MyApp({ Component, pageProps }) {
  return (
    <Mycontext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Mycontext>
  );
}

export default MyApp;

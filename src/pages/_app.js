import "@/styles/globals.css";
import { Toaster } from "@/components/ui/sonner";
import "@fontsource-variable/inter";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  return (
    <div style={{ fontFamily: "Inter Variable, sans-serif" }}>
      <Head>
        <title>Carlos Baso</title>
        <meta
          name="description"
          content="Portafolio - Carlos Baso Ing. de Software, JavaScript, React JS, Next JS. ¡Echa un vistazo a mis proyectos!"
        />
      </Head>
      <Component {...pageProps} />
      <Toaster />
    </div>
  );
};

export default App;

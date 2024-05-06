import "@/styles/globals.css";
import { Toaster } from "@/components/ui/sonner";
import "@fontsource-variable/inter";

const App = ({ Component, pageProps }) => {
  return (
    <div style={{ fontFamily: "Inter Variable, sans-serif" }}>
      <Component {...pageProps} />
      <Toaster />
    </div>
  );
};

export default App;

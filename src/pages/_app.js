import "@/styles/globals.css";

import "@fontsource-variable/inter";

const App = ({ Component, pageProps }) => {
  return (
    <div style={{ fontFamily: "Inter Variable, sans-serif" }}>
      <Component {...pageProps} />
    </div>
  );
};

export default App;

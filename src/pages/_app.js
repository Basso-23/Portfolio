import "@/styles/globals.css";
import "@fontsource/roboto";

const App = ({ Component, pageProps }) => {
  return (
    <div style={{ fontFamily: "Roboto, sans-serif" }}>
      <Component {...pageProps} />
    </div>
  );
};

export default App;

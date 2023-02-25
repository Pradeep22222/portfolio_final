import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { About } from "./components/about/About";
import Footer from "./components/Footer/Footer";
import Home from "./components/home/Home";
import { Navbar } from "./components/navbar/Navbar";
import ParallaxComponent from "./components/parallax/Parallax";
// import Playground from "./components/playground/Playground";
import { Projects } from "./components/projects/Projects";
import Technologies from "./components/technologies/Technologies";
import "./style/App.scss";
import GlobalStyles from "./style/global/GlobalStyle";
import { theme } from "./style/global/Theme";

function App() {
  console.log(
    "%cThank you for checking up of my portfolio. Wishing you the best for every step in your journey!🎉",
    "color: white; font-weight: 500; font-size:16px"
  );
  console.log(
    "%cYou can check the code here https://github.com/bishalk21/bishal-portfolio",
    "color: white; font-weight: 500; font-size:16px"
  );
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Navbar />
          <Home />
          <Technologies />
          <Projects />
          <About />
          <ParallaxComponent />
          <Footer />
        </>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

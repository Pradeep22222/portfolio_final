import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { About } from "./components/about/About";
import Footer from "./components/Footer/Footer";
import Home from "./components/home/Home";
import { Login } from "./components/messagepages/Login.js";
import { Messages } from "./components/messagepages/Messages.js";
import { Navbar } from "./components/navbar/Navbar";
import ParallaxComponent from "./components/parallax/Parallax";
// import Playground from "./components/playground/Playground";
import { Projects } from "./components/projects/Projects";
import Technologies from "./components/technologies/Technologies";
import "./style/App.scss";
import GlobalStyles from "./style/global/GlobalStyle";
import { theme } from "./style/global/Theme";

function App() {
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
      <Login />
      <Messages></Messages>
    </BrowserRouter>
  );
}

export default App;

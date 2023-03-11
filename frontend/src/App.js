import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Login } from "./components/messagepages/Login.js";
import { Messages } from "./components/messagepages/Messages.js";
// import Playground from "./components/playground/Playground";
import "./style/App.scss";
import GlobalStyles from "./style/global/GlobalStyle";
import { theme } from "./style/global/Theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Main from "./components/main/Main";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/messageBoard" element={<Messages />}></Route>
        </Routes>
        <ToastContainer
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

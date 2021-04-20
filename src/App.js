import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { themes } from "./utils/theme";
import GlobalStyle from "./utils/GlobalStyle";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import SinglePage from "./Pages/SinglePage";

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <Navbar theme={theme} themeToggler={themeToggler} />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pokemon/:id" component={SinglePage} />
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;

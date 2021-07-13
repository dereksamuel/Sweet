import React from "react";
import { GlobalStyle } from "./styles/globalstyles.js";
import Home from "./pages/Home.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Details from "./pages/Details.jsx";
import NavBar from "./components/NavBar/index.jsx";

const App = () => {
  const urlParams = new URLSearchParams(location.search);
  const detailId = urlParams.get("detail");
  console.log(detailId);
  return (
    <>
      <audio id="audio">
        <source src="https://vgmsite.com/soundtracks/candy-crush-saga-gamerip/syhhmpzt/SFX%20-%20Sweet.mp3" />
      </audio>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route
            exact
            path="/pet/:id"
            component={(route) => <Home id={route.match.params.id} />}
          />
          <Route
            exact
            path="/detail/:detailId"
            component={
              (route) => <Details detailId={route.match.params.detailId} />
            } />
        </Switch>
      </BrowserRouter>
      <NavBar></NavBar>
    </>
  );
};

export default App;

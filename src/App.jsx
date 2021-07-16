import React, { Suspense, useContext } from "react";
import { GlobalStyle } from "./styles/globalstyles.js";
import Home from "./pages/Home.jsx";
import { BrowserRouter as Router, } from "react-router-dom";
import { Redirect, Route, Switch } from "react-router";
import Details from "./pages/Details.jsx";
import NavBar from "./components/NavBar/index.jsx";
import Profile from "./pages/Profile.jsx";
// import Favorites from "./pages/Favorites.jsx";
import Loading from "./components/Loading/index.jsx";
import NotRegisterUser from "./pages/NotRegisterUser.jsx";
import { Context } from "./Context.jsx";
import NotFound from "./pages/NotFound.jsx";

const Favorites = React.lazy(() => import("./pages/Favorites.jsx"));
//Evitar cargar la página si no la necesitamos con .lazy

const App = () => {
  const { isAuth } = useContext(Context);
  return (
    <Router>
      <Suspense fallback={<Loading></Loading>}>
        <GlobalStyle />
        <audio id="audio">
          <source src="https://vgmsite.com/soundtracks/candy-crush-saga-gamerip/syhhmpzt/SFX%20-%20Sweet.mp3" />
        </audio>
        <Switch>
          <Route exact path="/" component={Home} />
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
          {
            !isAuth && <Route
              exact
              path="/login"
              component={NotRegisterUser} />
          }
          {
            !isAuth && <Redirect to="/login" />
          }
          <Route
            exact
            path="/profile"
            component={Profile} />
          <Route
            exact
            path="/favorites"
            component={Favorites} />
          <Route component={NotFound} />
        </Switch>
        <NavBar />
      </Suspense>
    </Router>
  );
};

export default App;

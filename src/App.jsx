import React from "react";
import { GlobalStyle } from "./styles/globalstyles.js";
import Home from "./pages/Home.jsx";
import { BrowserRouter as Router, } from "react-router-dom";
import { Route, Switch } from "react-router";
import Details from "./pages/Details.jsx";
import NavBar from "./components/NavBar/index.jsx";
import Profile from "./pages/Profile.jsx";
import Favorites from "./pages/Favorites.jsx";
import NotRegisterUser from "./pages/NotRegisterUser.jsx";
import { Context } from "./Context.jsx";

// const UserLogged = ({ children }) => {
//   return children({ isAuth: false, });
// };

const App = () => {
  return (
    <Router>
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
      </Switch>
      <Context.Consumer>
        {
          ({ isAuth }) => (
            isAuth ? <>
              <Route
                exact
                path="/profile"
                component={Profile} />
              <Route
                exact
                path="/favorites"
                component={Favorites} />
            </> : <>
              <Route
                exact
                path="/favorites"
                component={NotRegisterUser} />
              <Route
                exact
                path="/profile"
                component={NotRegisterUser} />
            </>
          ) 
        }
      </Context.Consumer>
      <NavBar />
    </Router>
  );
};

export default App;

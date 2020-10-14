import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "../SignIn/SignIn";
import Result from "../Result/Result";
import Lose from "../Lose/Lose";
import DevArtist from "../DevArtist/DevArtist";
import DevGenre from "../DevGenre/DevGenre";


const App = (props) => {
  const { errorsCount } = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <WelcomeScreen errorsCount={errorsCount} />;
        </Route>
        <Route path="/login" exact>
          <SignIn/>
        </Route>
        <Route path="/result" exact>
          <Result/>
        </Route>
        <Route path="/lose" exact>
          <Lose/>
        </Route>
        <Route path="/dev-artist" exact>
          <DevArtist/>
        </Route>
        <Route path="/dev-genre" exact>
          <DevGenre/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};
export default App;

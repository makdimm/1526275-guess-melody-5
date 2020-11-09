import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "../SignIn/SignIn";
import Result from "../Result/Result";
import Lose from "../Lose/Lose";
import DevArtist from "../DevArtist/DevArtist";
import DevGenre from "../DevGenre/DevGenre";
import GameScreen from "../game-screen/game-screen";

const App = (props) => {
  const { errorsCount, questions } = props;
  const [firstQuestion, secondQuestion] = questions;

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact
          render={({ history }) => (
            <WelcomeScreen
              errorsCount={errorsCount}
              onPlayButtonClick={() => history.push(`/game`)}
            />
          )}
        />
        <Route path="/login" exact>
          <SignIn />
        </Route>
        <Route path="/result" exact>
          <Result />
        </Route>
        <Route path="/lose" exact>
          <Lose />
        </Route>
        <Route path="/dev-artist" exact>
          <DevArtist question={secondQuestion} onAnswer={() => {}} />
        </Route>
        <Route path="/dev-genre" exact>
          <DevGenre question={firstQuestion} onAnswer={() => {}} />
        </Route>
        <Route exact path="/game">
          <GameScreen errorsCount={{ errorsCount }} questions={questions} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};
export default App;

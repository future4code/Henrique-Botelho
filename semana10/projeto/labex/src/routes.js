import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SubscribePage from "./pages/SubscribePage";
import LoginPage from "./pages/LoginPage";
import CreateTripPage from "./pages/CreateTripPage ";
import ListTripsPage from "./pages/ListTripsPage";
import TripDetailsPage from "./pages/TripDetailsPage ";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/subscribe-form">
          <SubscribePage />
        </Route>
        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route exact path="/trips/create/">
          <CreateTripPage />
        </Route>
        <Route exact path="/trips/list/">
          <ListTripsPage />
        </Route>
        <Route exact path="/trips/details">
          <TripDetailsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

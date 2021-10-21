import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router";
import Details from "./components/details/Details";
import Latest from "./components/latest/Latest";
import Navbar from "./components/navbar/Navbar";
import Past from "./components/past/Past";
import Upcoming from "./components/upcoming/Upcoming";

function App() {
  const [details, setDetails] = useState(false);

  const showDetailHandler = () => {
    setDetails(true);
  };

  const hideDetailHandler = () => {
    setDetails(false);
  };

  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/past" />
        </Route>

        {details && <Details onHide={hideDetailHandler} />}

        <Route path="/upcoming">
          <Upcoming onShow={showDetailHandler} onHide={hideDetailHandler} />
        </Route>

        <Route path="/past">
          <Past onShow={showDetailHandler} onHide={hideDetailHandler} />
        </Route>

        <Route path="/latest">
          <Latest onShow={showDetailHandler} onHide={hideDetailHandler} />
        </Route>
      </Switch>
    </>
  );
}

export default App;

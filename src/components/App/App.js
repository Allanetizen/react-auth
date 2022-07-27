import "./App.css";
import Dashboard from "../Dashboard/Dashboard";
import Preference from "../Preference/Preference";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Fragment } from "react";

const App =()=> {
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preference />
          </Route>
        </Routes>
        </Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;

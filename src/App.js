import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Appointment from "./Components/Appointment/Appointment/Appointment";
import { createContext, useState } from "react";
import Login from "./Components/Login/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import AddDoctor from "./Components/AddDoctor/AddDoctor";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/appointment">
            <Appointment />
          </Route>
          <Route path="/dashboard/appointment">
            <Dashboard/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path='/addDoctor'>
            <AddDoctor/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

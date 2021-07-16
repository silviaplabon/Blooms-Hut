import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext, useState } from 'react';
import HomePage from './components/Home/HomePage/HomePage'
import Login from './components/Shared/Login/Login/Login'
import SearchFlowers from './components/Home/SearchFlowers/SearchFlowers';
export const UserContext = createContext();



function App() {
  const [loggedInUser, setloggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setloggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
           <HomePage></HomePage>
        </Route>
        <Route exact path="/auth/login">
          <Login></Login>
        </Route>
        <Route exact path="/:name">
           <SearchFlowers></SearchFlowers>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;

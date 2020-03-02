import React from 'react';
import "./App.scss";
import Main from './pages/Main';
import { Router, Route, Switch } from 'react-router-dom';
import { useAuth0 } from "./react-auth0-spa";
import Profile from "./components/Profile";
import NavBar from "./components/NavBar";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";

function App() {
    const { loading } = useAuth0();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="App">
            <Router history={history}>
                <header>
                    <NavBar />
                </header>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <PrivateRoute path="/profile" component={Profile} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
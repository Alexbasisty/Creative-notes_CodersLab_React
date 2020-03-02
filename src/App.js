import React from 'react';
import "./App.scss";
import Main from './pages/Main';
// import NotFound from './pages/NotFound';
import Countries from "./pages/Countries";
import Hello from "./pages/CreativeNotes";
import { Router, Route, Switch } from 'react-router-dom';
import { useAuth0 } from "./react-auth0-spa";
import Profile from "./components/Profile";
import NavBar from "./components/NavBar";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";

// function App() {
//     return (
//         <div className="App">
//             <BrowserRouter>
//                 <Switch>
//                     <Route exact path="/" component={Main} />
//                     <Route exact path="/countries" component={Countries} />
//                     <Route exact path="/notes" component={Hello} />
//                     <Route component={NotFound} />
//                 </Switch>
//             </BrowserRouter>
//         </div>
//     );
// }
// src/App.js

function App() {
    const { loading } = useAuth0();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="App">
            {/* Don't forget to include the history module */}
            <Router history={history}>
                <header>
                    <NavBar />
                </header>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/countries" component={Countries} />
                    <Route exact path="/notes" component={Hello} />
                    <PrivateRoute path="/profile" component={Profile} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
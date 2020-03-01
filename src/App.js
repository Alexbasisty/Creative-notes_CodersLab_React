import React from 'react';
import "./App.scss";
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Countries from "./pages/Countries";
import Hello from "./pages/CreativeNotes";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/countries" component={Countries} />
                    <Route exact path="/notes" component={Hello} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
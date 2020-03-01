import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Main extends Component {

    render() {
        return (
            <>
                <h1>Wybierz stronę:</h1>
                <div className="notification"><Link className="link" to="/countries">Search counries information</Link></div>
                <div className="notification"><Link to="/notes">Notes</Link></div>
            </>
        );
    }
}

export default Main;
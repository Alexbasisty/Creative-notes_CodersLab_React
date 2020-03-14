import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "../react-auth0-spa";

const Banner = (props) => {

    const { user } = props;
    const { isAuthenticated, loginWithRedirect } = useAuth0();

    return (
        <section className="hero is-light is-bold is-large" style={{height: '90vh'}}>
          <div className="hero-body">
            <div className="container">
              {isAuthenticated && <div className="notification"><h1 className="title">
                Start leaving your notes, {user}
              </h1></div>}
              {!isAuthenticated && <div className="container">
                <div className="notification">
                  <h2
                      className="subtitle is-size-3-desktop"
                  >Here is a nice place, where You can create Your To Do list ;-)</h2>
                </div>
              </div>}
              <div style={{
                paddingTop: '30px'
              }}>
                {!isAuthenticated ? <button
                        className="button is-success is-light"
                        onClick={() => loginWithRedirect({})}
                    >Log in</button> :
                    <Link to="/notepart"><button className="button is-success is-light">Start to plan</button></Link>}
              </div>
            </div>
          </div>

        </section>
    );

};

export default Banner;
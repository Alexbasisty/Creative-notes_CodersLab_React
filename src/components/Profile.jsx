// src/components/Profile.js

import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
  <Fragment>
      <div className="card">
        <img className="card-image" src={user.picture} alt="Profile" />
        <div className="card-content">
          <h2 className="title is-4">{user.name}</h2>
          <p className="subtitle is-6">{user.email}</p>
        </div>
      </div>
  </Fragment>
  );
};

export default Profile;
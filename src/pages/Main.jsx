import React from 'react';
import { useAuth0 } from "../react-auth0-spa";
import Banner from "../components/Banner";

const Main = () => {
        const { user, isAuthenticated } = useAuth0();

        return (
            <>
              {isAuthenticated ? <Banner user={user.name}/> : <Banner />}
            </>
        );
};

export default Main;
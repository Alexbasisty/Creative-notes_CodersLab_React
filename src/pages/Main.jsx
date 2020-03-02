import React from 'react';
import { useAuth0 } from "../react-auth0-spa";
import Banner from "../components/Banner";

const Main = () => {
        const { user } = useAuth0();

        return (
            <>
              <Banner user={user.name}/>
            </>
        );
};

export default Main;
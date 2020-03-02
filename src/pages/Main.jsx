import React from 'react';
import { useAuth0 } from "../react-auth0-spa";

const Main = () => {
        const { user } = useAuth0();

        return (
                <h1>Hello, {user.name}</h1>
        );
};

export default Main;
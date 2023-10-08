import React, { useContext } from 'react';
import UserContext from './formreview';

function Review() {
    const user = useContext(UserContext);
    return <h1>{user}</h1>;
}

export default Review;

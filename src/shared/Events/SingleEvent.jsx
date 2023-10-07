import React from 'react';
import { useParams } from 'react-router-dom';

const SingleEvent = () => {
    const {id} = useParams()
    return (
        <div>
            <h1>Single Event {id} </h1>
        </div>
    );
};

export default SingleEvent;
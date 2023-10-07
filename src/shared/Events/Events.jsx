import React, { useEffect, useState } from 'react';
import Event from './Event';

const Events = () => {
    const [events, setEvents] = useState([])
    useEffect(() => {
        fetch('/event.json')
        .then(res => res.json())
        .then(data => setEvents(data))
    } , [])
    return (
        <div className='py-5'>
            <div className='text-center w-3/4 mx-auto'>
                <h2 className='font-bold text-center text-5xl '>Upcoming Events</h2>
                <p className='w-1/2 mx-auto py-3 text-gray-500'>This section will provide detailed information about the upcoming event, including its name, date, time, location, and what attendees can expect.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    events.map((event) => <Event key={event.id} event={event}></Event>)
                }
            </div>
        </div>
    );
};

export default Events;
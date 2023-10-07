import React from "react";
import { Link } from "react-router-dom";

const Event = ({ event }) => {
  const {
    id,
    event_name,
    event_date,
    img_url,
    event_description,
    event_location,
    ticket_price
  } = event;
  return (
    <div>
      <div className="card card-compact w-full px-5 md:px-0 md:w-[95%] bg-base-100 shadow-xl">
        <figure>
          <img
            className="h-[200px] md:h-[250px]"
            src={img_url}
            alt={event_name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{event_name}</h2>
          <p>{event_description.slice(0, 90)}...</p>
          <p className="text-xl font-bold py-1 text-purple-950">Price: ${ticket_price}.00</p>

          <div className="card-actions items-center justify-between">
            <div className="flex gap-2">
              <div className="badge badge-primary badge-outline">
                {event_location}
              </div>
              <div className="badge badge-secondary badge-outline">
                {event_date}
              </div>
            </div>

            <div className="py-5">
              <Link
                to={`/event/${id}`}
                className="px-3 py-2 rounded-md text-white bg-gradient-to-r from-purple-950 to-pink-500"
              >
                More Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;

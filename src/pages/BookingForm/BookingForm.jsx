import React, { useContext, useEffect, useRef, useState } from "react";
import Logo from "../../shared/Logo/Logo";
import Navbar from "../../shared/Header/Navbar";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const BookingForm = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const idInt = parseInt(id);
  const events = useLoaderData();
  const event = events.find((event) => event.id === idInt);
  const { event_name, ticket_price } = event;

  console.log("ticket Price", typeof ticket_price);
  const ticketRef = useRef(0);
  const total_ticket = ticketRef.current.value;
  const total_ticket_count = parseInt(total_ticket);
  console.log("total ticket", typeof total_ticket_count);
  const handleTicket = (e) => {};

  const [totalTicketPrice, setTotalTicketPrice] = useState(1);

  const calculate = (e) => {
    e.preventDefault();
    const total_picked_ticket_price = total_ticket_count * ticket_price;
    setTotalTicketPrice(total_picked_ticket_price);
    return setTotalTicketPrice
  };

  return (
    <div>
      <Logo></Logo>
      <Navbar></Navbar>

      <div>
        <h3 className="py-5 text-3xl font-bold text-center">
          Ticket Booking for: {event_name}
        </h3>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm mx-auto shadow-2xl bg-base-100 justify-center">
        <form onSubmit={handleTicket} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Event Name</span>
            </label>
            <input
              type="text"
              placeholder=""
              className="input input-bordered"
              disabled
              value={event_name}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder=""
              className="input input-bordered"
              disabled
              value={user.displayName}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              disabled
              value={user.email}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Ticket</span>
            </label>
            <input
              type="number"
              name="ticket"
              ref={ticketRef}
              placeholder="How many tickets do you want to purchase?"
              className="input input-bordered"
            />
          </div>
          <p>Total Price: {totalTicketPrice}</p>
          <button className="btn" onClick={calculate}>
            {" "}
            Calculate
          </button>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;

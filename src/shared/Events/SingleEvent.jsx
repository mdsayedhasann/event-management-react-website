import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import TopHeader from "../Header/TopHeader";
import Logo from "../Logo/Logo";
import Navbar from "../Header/Navbar";

const SingleEvent = () => {
  const { id } = useParams();
  const idInt = parseInt(id);
  const events = useLoaderData();
  const event = events.find((event) => event.id === idInt);

  const {
    event_name,
    img_url,
    event_date,
    event_time,
    event_location,
    event_description,
    attendees_count,
    ticket_price,
    total_likes,
    page_views,
  } = event;
  console.log(event);
  return (
    <div>
      <TopHeader></TopHeader>
      <Logo></Logo>
      <Navbar></Navbar>
      <div className="grid grid-cols-4 gap-5">
        <div
          data-aos="fade-down"
          data-aos-duration="3000"
          className="col-span-3 bg-pink-50 px-10"
        >
          <img className="w-[90%] py-4 rounded-xl" src={img_url} alt="" />
          <h2 className="text-3xl py-5 font-bold">{event_name}</h2>
          <p className="w-3/4">{event_description}</p>

          {/* Table Start */}
          <div className="my-6 w-3/4">
            <table className="table">
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>Event Date</td>
                  <td>{event_date}</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>2</th>
                  <td>Event Time</td>
                  <td>{event_time}</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3</th>
                  <td>Event Location</td>
                  <td>{event_location}</td>
                </tr>
                <tr>
                  <th>4</th>
                  <td>Attendance Count</td>
                  <td>{attendees_count}</td>
                </tr>
                <tr>
                  <th>5</th>
                  <td>Ticket Price</td>
                  <td>{ticket_price}</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Table End */}
          <div className="my-5">
            <Link to={`/booking/${id}`}>
              <button className="px-3 py-2 rounded-md text-white bg-gradient-to-r from-purple-950 to-pink-500 my-6">Book Now</button>
            </Link>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className="col-span-1 bg-gray-50 h-screen px-10"
        >
          <h3 className="text-center text-2xl font-semibold py-4">
            More Details
          </h3>
          <div className="shadow flex-col flex w-full">
            <div className="stat">
              <div className="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Total Likes</div>
              <div className="stat-value text-primary"> {total_likes} </div>
              <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Page Views</div>
              <div className="stat-value text-secondary">{page_views}</div>
              <div className="stat-desc">21% more than last month</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEvent;

import React from "react";

const Faq = () => {
  return (
    <div data-aos='fade-up' data-aos-duration='3000' className="py-7 items-center bg-pink-50 bg-cover rounded-2xl my-10 px-8">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>

            {/* Item 1 */}
          <div className="collapse bg-base-100 my-3">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
            How can I register for the upcoming tech event?
            </div>
            <div className="collapse-content">
              <p>Registering for our tech events is easy! Simply visit our event registration page on our website, fill out the required information, choose your ticket type, and complete the payment process. You'll receive a confirmation email with your event details.</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="collapse bg-base-100 my-3">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
            Can I transfer my event ticket to someone else if I can't attend?
            </div>
            <div className="collapse-content">
              <p>Yes, ticket transfers are possible. Please contact our customer support team at least [X days/weeks] before the event with the details of the new attendee. We'll assist you in updating the registration information.</p>
            </div>
          </div>

          {/* Item 3 */}

          <div className="collapse bg-base-100 my-3">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
            Are there group discounts available for large teams or organizations?
            </div>
            <div className="collapse-content">
              <p>Yes, we offer group discounts for corporate teams and organizations. Contact our sales team via email or phone to inquire about group rates, and we'll be happy to provide you with a customized package.</p>
            </div>
          </div>


           {/* Item 4 */}

           <div className="collapse bg-base-100 my-3">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
            How can I become a sponsor or exhibitor at your tech events?
            </div>
            <div className="collapse-content">
              <p>We welcome partnerships with tech-related companies. To become a sponsor or exhibitor at our events, please visit our "Sponsorship Opportunities" page on our website. There, you'll find details on available packages and how to get in touch with our sponsorship team.</p>
            </div>
          </div>
        </div>

        <div
          data-aos="flip-up"
          data-aos-duration="2000"
          className="text-center w-3/4 mx-auto py-10"
        >
          <h2 className="font-bold text-center text-5xl ">
            Frequently Asked Question
          </h2>
          <div className="divider divider-vertical divide-orange-500 text-pink-500">
            Tech Everyday, From 1998 to Present
          </div>
          <p className="w-3/2 mx-auto py-3 text-gray-500">
            Some common question answers here for you
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;

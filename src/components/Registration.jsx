import React, { useState } from "react";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [destination, setDestination] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (destination === "") {
      alert("Please select a destination");
    } else {
      // Proceed with form submission logic
      alert("Form submitted successfully!");

      // Clear form fields after successful submission
      setName("");
      setEmail("");
      setDestination("");
    }
  };

  return (
    <div className="relative py-5">
      {/* Background image as an img tag */}
      <img
        src="src/assets/carousel-1.jpg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="py-20 px-10 md:px-44 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
          {/* Left Section */}
          <div className="w-full lg:w-[600px]">
            <div className="mb-4">
              <h6 className="text-primary uppercase font-semibold" style={{ letterSpacing: "5px" }}>
                Mega Offer
              </h6>
              <h1 className="text-white text-2xl md:text-4xl font-bold">
                <span className="text-primary">30% OFF</span> For Honeymoon
              </h1>
            </div>
            <p className="text-white">
              Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos,
              ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
              dolor
            </p>
            <ul className="list-none text-white m-0">
              <li className="py-2">
                <i className="fa fa-check text-primary mr-3"></i>Labore eos amet dolor amet diam
              </li>
              <li className="py-2">
                <i className="fa fa-check text-primary mr-3"></i>Etsea et sit dolor amet ipsum
              </li>
              <li className="py-2">
                <i className="fa fa-check text-primary mr-3"></i>Diam dolor diam elitripsum vero.
              </li>
            </ul>
          </div>

          {/* Right Section - Sign Up Form */}
          <div className="w-full lg:w-96 lg:ml-28">
            <div className="card border-0">
              <div className="card-header bg-primary text-center p-4 md:p-8 text-2xl md:text-4xl font-semibold">
                <h1 className="text-white m-0">Sign Up Now</h1>
              </div>
              <div className="card-body rounded-b-lg bg-white p-5 px-10">
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      className="form-control p-4 w-full border border-gray-400 focus:outline-none "
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group mb-4">
                    <input
                      type="email"
                      className="form-control p-4 w-full border border-gray-400 focus:outline-none "
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group mb-4">
                    <select
                      className="custom-select px-4 py-2 w-full border border-gray-400 focus:outline-none"
                      style={{ height: "47px" }}
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      required
                    >
                      <option value="">Select a destination</option>
                      <option value="1">destination 1</option>
                      <option value="2">destination 2</option>
                      <option value="3">destination 3</option>
                    </select>
                  </div>
                  <div>
                    <button className="bg-primary btn-block py-3 w-full" type="submit">
                      Sign Up Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;

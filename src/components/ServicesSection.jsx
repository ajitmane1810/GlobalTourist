import React from "react";

const ServicesSection = () => {
  return (
    <div className="py-16 px-10 md:px-44 bg-gray-50">
      <div className="container pt-10 pb-3 ">
        <div className="text-center mb-3 pb-3">
          <h6 className="text-primary uppercase mb-1" style={{ letterSpacing: "5px" }}>
            Services
          </h6>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Tours & Travel Services</h1>
        </div>
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-8 ">


          <div className="service-item bg-white text-center mb-2 py-5 px-4 flex items-center justify-center h-[300px] hover:shadow-2xl transition-all duration-500 ease-in-out group">
            <div>
              <i className="fa fa-2x fa-route mx-auto mb-4 text-primary border border-primary p-5 transition-all duration-500 ease-in-out group-hover:bg-primary group-hover:text-white"></i>
              <h5 className="mb-2 font-bold">Travel Guide</h5>
              <p className="m-0 text-[15px] px-1 text-gray-500">
                Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore
              </p>
            </div>
          </div>


          <div className="service-item bg-white text-center mb-2 py-5 px-4 flex items-center justify-center h-[300px]  hover:shadow-2xl transition-all duration-500 ease-in-out group ">
            <div>
              <i className="fa fa-2x fa-ticket-alt mx-auto mb-4 text-primary border border-primary p-5 group-hover:bg-primary group-hover:text-white transition-all duration-500 ease-in-out"></i>
              <h5 className="mb-2 font-bold">Ticket Booking</h5>
              <p className="m-0 text-[15px] px-1 text-gray-500">
                Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore
              </p>
            </div>
          </div>
          <div className="service-item bg-white text-center mb-2 py-5 px-4 flex items-center justify-center h-[300px] hover:shadow-2xl transition-all duration-500 group">
            <div>
              <i className="fa fa-2x fa-hotel mx-auto mb-4 text-primary border border-primary p-5 group-hover:bg-primary group-hover:text-white transition-all duration-500 ease-in-out"></i>
              <h5 className="mb-2 font-bold">Hotel Booking</h5>
              <p className="m-0 text-[15px] px-1 text-gray-500">
                Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServicesSection;

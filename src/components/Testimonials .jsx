// src/components/Testimonials.jsx
import React from 'react';

const Testimonials = () => {
  return (
    <div className="py-16 px-10 md:px-44 bg-gray-50">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-12 pb-12">
          <h6 className="text-primary uppercase tracking-widest text-lg md:text-xl">
            Testimonial
          </h6>
          <h1 className="text-3xl md:text-4xl font-bold">What Say Our Clients</h1>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="text-center pb-4">
            <img
              className="mx-auto w-24 h-24 object-cover rounded-full"
              src="/src/assets/Testimonial/testimonial-1.jpg"
              alt="Client 1"
            />
            <div className="bg-white p-4 mt-[-2rem] shadow-md">
              <p className="mt-7 text-gray-500 px-4 text-md">
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
              </p>
              <h5 className="truncate font-bold p-4 tracking-wider text-xl">Client Name</h5>
              <span>Profession</span>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="text-center pb-4">
            <img
              className="mx-auto w-24 h-24 object-cover rounded-full"
              src="/src/assets/Testimonial/testimonial-2.jpg"
              alt="Client 2"
            />
            <div className="bg-white p-4 mt-[-2rem] shadow-md">
              <p className="mt-7 text-gray-500 px-4 text-md">
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
              </p>
              <h5 className="truncate font-bold p-4 tracking-wider text-xl">Client Name</h5>
              <span>Profession</span>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="text-center pb-4">
            <img
              className="mx-auto w-24 h-24 object-cover rounded-full"
              src="/src/assets/Testimonial/testimonial-3.jpg"
              alt="Client 3"
            />
            <div className="bg-white p-4 mt-[-2rem] shadow-md">
              <p className="mt-7 text-gray-500 px-4 text-md">
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
              </p>
              <h5 className="truncate font-bold p-4 tracking-wider text-xl">Client Name</h5>
              <span>Profession</span>
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className="text-center pb-4">
            <img
              className="mx-auto w-24 h-24 object-cover rounded-full"
              src="/src/assets/Testimonial/testimonial-4.jpg"
              alt="Client 4"
            />
            <div className="bg-white p-4 mt-[-2rem] shadow-md">
              <p className="mt-7 text-gray-500 px-4 text-md">
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
              </p>
              <h5 className="truncate font-bold p-4 tracking-wider text-xl">Client Name</h5>
              <span>Profession</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

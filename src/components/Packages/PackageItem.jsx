import React from "react";

const PackageItem = ({ image, location, duration, persons, title, rating, price }) => (
  <div className="bg-white mb-6 shadow-sm hover:shadow-2xl transition-all duration-500 ease-in-out">
    <img className="w-full" src={image} alt="Package" />
    <div className="p-4">
      <div className="flex justify-between mb-3">
        <small className="m-0">
          <i className="fa fa-map-marker-alt text-primary mr-2"></i>{location}
        </small>
        <small className="m-0">
          <i className="fa fa-calendar-alt text-primary mr-2"></i>{duration}
        </small>
        <small className="m-0">
          <i className="fa fa-user text-primary mr-2"></i>{persons}
        </small>
      </div>
      <a className="h5 text-decoration-none" href="#">{title}</a>
      <div className="border-t mt-4 pt-4">
        <div className="flex justify-between">
          <h6 className="m-0">
            <i className="fa fa-star text-primary mr-2"></i>{rating} <small>(250)</small>
          </h6>
          <h5 className="m-0 font-semibold">${price}</h5>
        </div>
      </div>
    </div>
  </div>
);

export default PackageItem;


import React from "react";
import { destinations } from "../Destination/destinations.jsx";
import DestinationItem from "../Destination/DestinationItem.jsx";

const Destination = () => {
    return (
        <div className="container-fluid py-16 px-5 lg:px-44 bg-gray-50">
            <div className="container pt-5 pb-3">
                <div className="text-center mb-3 pb-3">
                    <h6 className="text-primary uppercase mb-1 " style={{ letterSpacing: "5px" }}>Destination</h6>
                    <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Explore Top Destination</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destinations.map((destination, index) => (
                        <DestinationItem key={index} destination={destination} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Destination;


import React from 'react';

const DestinationItem = ({ destination }) => {
    return (
        <div className="destination-item relative overflow-hidden mb-2 group">
            <img
                className="w-full h-56 object-cover transition-all duration-300 ease-in-out group-hover:scale-125"
                src={destination.image}
                alt={destination.name}
            />

            <a className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4 transition duration-300 z-10" href="">
                <div className=" w-72 md:w-64 lg:w-72 py-14 border bg-black bg-opacity-20 group-hover:border-none ">
                    <h5 className="text-white text-base font-semibold">{destination.name}</h5>
                    <span>{destination.cities} Cities</span>
                </div>
            </a>
        </div>
    );
};

export default DestinationItem;

import React from 'react'

const Search = () => {
  return (
    <div className="flex justify-center mt-40 md:mt-0 mb-40 md:mb-0">
      <div className="container w-full sm:w-[90%] md:w-[80%] px-4 -mt-32 lg:-mt-12 absolute z-10">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <select className="border rounded-md p-2">
              <option>Destination</option>
            </select>
            <input type="date" className="border rounded-md p-2" placeholder="Depart Date" />
            <input type="date" className="border rounded-md p-2" placeholder="Return Date" />
            <select className="border rounded-md p-2">
              <option>Duration</option>
            </select>
            <button className="bg-primary text-white rounded-md py-2 px-4 hover:bg-green-700">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search;

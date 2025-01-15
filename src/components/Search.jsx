import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Search = () => {
  const [startDate, setStartDate] = useState(null); // State for the Depart Date
  const [endDate, setEndDate] = useState(null); // State for the Return Date
  const [destination, setDestination] = useState(""); // State for the Destination
  const [duration, setDuration] = useState(""); // State for the Duration
  const [error, setError] = useState(""); // State to hold validation error message
  const [successMessage, setSuccessMessage] = useState(""); // State for success message

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset previous error and success messages
    setError("");
    setSuccessMessage("");

    // Check if Destination is selected
    if (!destination) {
      setError("Please select a destination.");
      return;
    }

    // Check if Duration is selected
    if (!duration) {
      setError("Please select a duration.");
      return;
    }

    // Check if dates are selected
    if (!startDate || !endDate) {
      setError("Please select both depart and return dates.");
      return;
    }

    // Check if the return date is before the departure date
    if (endDate < startDate) {
      setError("Return date cannot be before depart date.");
      return;
    }

    // Proceed with form submission logic here (e.g., sending data to an API)
    console.log("Form submitted with valid data:", { destination, startDate, endDate, duration });

    // Set success message
    setSuccessMessage("Form submitted successfully!");

    // Optionally reset the form or some states after successful submission:
    setStartDate(null);
    setEndDate(null);
    setDestination("");
    setDuration("");
  };

  const handleDepartDateChange = (date) => {
    setStartDate(date);

    // If depart date is selected, automatically set the return date based on the selected duration
    if (duration && date) {
      const returnDate = new Date(date);
      if (duration === "3 Days") {
        returnDate.setDate(returnDate.getDate() + 3); // Add 3 days for "3 Days" duration
      } else if (duration === "1 week") {
        returnDate.setDate(returnDate.getDate() + 7); // Add 7 days for "1 week" duration
      } else if (duration === "2 weeks") {
        returnDate.setDate(returnDate.getDate() + 14); // Add 14 days for "2 weeks" duration
      }
      setEndDate(returnDate);
    }
  };

  const handleDurationChange = (e) => {
    const selectedDuration = e.target.value;
    setDuration(selectedDuration);

    // Update the return date when the duration is changed
    if (startDate && selectedDuration) {
      const returnDate = new Date(startDate);
      if (selectedDuration === "3 Days") {
        returnDate.setDate(returnDate.getDate() + 3); // Add 3 days for "3 Days" duration
      } else if (selectedDuration === "1 week") {
        returnDate.setDate(returnDate.getDate() + 7); // Add 7 days for "1 week" duration
      } else if (selectedDuration === "2 weeks") {
        returnDate.setDate(returnDate.getDate() + 14); // Add 14 days for "2 weeks" duration
      }
      setEndDate(returnDate);
    }
  };

  return (
    <div className="flex justify-center mt-40 md:mt-0 mb-40 md:mb-0">
      <div className="container w-full sm:w-[90%] md:w-[80%] px-4 -mt-32 lg:-mt-12 absolute z-10">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Destination */}
              <select 
                className="border rounded-md p-2" 
                value={destination} 
                onChange={(e) => setDestination(e.target.value)}
              >
                <option value="">Destination</option>
                <option value="Destination 1">Destination 1</option>
                <option value="Destination 2">Destination 2</option>
                <option value="Destination 3">Destination 3</option>
              </select>


               {/* Duration */}
               <select 
                className="border rounded-md p-2" 
                value={duration} 
                onChange={handleDurationChange}
              >
                <option value="">Duration</option>
                <option value="3 Days">3 Days</option>
                <option value="1 week">1 week</option>
                <option value="2 weeks">2 weeks</option>
              </select>

              {/* Depart Date */}
              <div className="lg:mb-0">
                <DatePicker
                  selected={startDate}
                  onChange={handleDepartDateChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholderText="Select Depart Date"
                  dateFormat="MMMM d, yyyy"
                  minDate={new Date()} // Prevent past dates for depart date
                />
              </div>

              {/* Return Date - Only enable if depart date is selected */}
              <div className="lg:mb-0">
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholderText="Select Return Date"
                  dateFormat="MMMM d, yyyy"
                  minDate={startDate || new Date()} // Minimum return date is the depart date or today if no depart date is selected
                  disabled={!startDate} // Disable the Return Date input if no Depart Date is selected
                />
              </div>

             

              <button 
                type="submit" 
                className="bg-primary text-white rounded-md py-2 px-4 hover:bg-green-700"
              >
                Submit
              </button>
            </div>
          </form>

          {/* Display validation error */}
          {error && (
            <div className="text-red-500 mt-4">
              <p>{error}</p>
            </div>
          )}

          {/* Display success message */}
          {successMessage && (
            <div className="text-green-500 mt-4">
              <p>{successMessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;

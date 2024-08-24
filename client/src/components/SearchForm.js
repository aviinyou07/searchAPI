import React, { useState } from "react";
import axios from "axios";
import SearchResults from './SearchResults';

const SearchForm = () => {
  const [location, setLocation] = useState("");
  const [natureOfBusiness, setNatureOfBusiness] = useState("");
  const [manufacturingProcesses, setManufacturingProcesses] = useState([]);
  const [results, setResults] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!location && !natureOfBusiness && manufacturingProcesses.length === 0) {
      setError("Please enter a search criterion.");
      return;
    } else {
      setError(""); // Clear any previous errors
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/supplier/query",
        {
          location,
          nature_of_business: natureOfBusiness,
          manufacturing_processes: manufacturingProcesses,
        }
      );

      if (response.data.length === 0) {
        setNoResults(true);
        setResults([]);
      } else {
        setNoResults(false);
        setResults(response.data);
      }
    } catch (error) {
      console.error("Error fetching manufacturers", error);
    }
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 min-h-screen">
      <div className="w-full mt-16">
        <form
          onSubmit={handleSubmit}
          className="flex p-5 rounded-full shadow-inner flex-col space-y-3 ml-52"
        >
          <div className="flex space-x-2 items-center">
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="flex-1 max-w-5xl p-3 border border-gray-100 rounded-l-full bg-transparent text-gray-100 font-semibold placeholder-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-none focus:placeholder-gray-100"
              placeholder="Enter location"
            />

            <div className="relative">
              <select
                value={natureOfBusiness}
                onChange={(e) => setNatureOfBusiness(e.target.value)}
                className="p-3 border rounded-r-full border-gray-300 bg-transparent text-gray-800 focus:outline-none"
              >
                <option value="">Business Nature</option>
                <option value="small_scale">Small Scale</option>
                <option value="medium_scale">Medium Scale</option>
                <option value="large_scale">Large Scale</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-4">
            {["moulding", "3d_printing", "casting", "coating"].map(
              (process) => (
                <label
                  key={process}
                  className="inline-flex items-center text-gray-700 font-semibold space-x-2"
                >
                  <input
                    type="checkbox"
                    value={process}
                    onChange={(e) => {
                      const value = e.target.value;
                      setManufacturingProcesses((prev) =>
                        prev.includes(value)
                          ? prev.filter((item) => item !== value)
                          : [...prev, value]
                      );
                    }}
                    className="form-checkbox h-4 w-4 text-purple-500"
                  />
                  <span className="text-sm">
                    {process.charAt(0).toUpperCase() + process.slice(1)}
                  </span>
                </label>
              )
            )}
          </div>

          <button
            type="submit"
            className="w-32 border hover:bg-blue-700 border-gray-100 text-white p-3 rounded-full text-lg font-semibold hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-600 transition duration-300 absolute right-72"
          >
            Search
          </button>
        </form>

        {error && (
          <div className="mt-8 bg-yellow-100 p-6 rounded-lg shadow-lg text-center text-xl font-bold text-yellow-600">
            {error}
          </div>
        )}

        {noResults && (
          <div className="mt-8 bg-white p-6 rounded-lg shadow-lg text-center text-xl font-bold text-red-500">
            No manufacturers found. Please try again.
          </div>
        )}

        {results.length > 0 && <SearchResults results={results} />}
      </div>
    </div>
  );
};

export default SearchForm;

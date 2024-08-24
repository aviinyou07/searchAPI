import React from 'react';

const SearchResults = ({ results }) => {
  return (
    <div className=" p-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Search Results</h2>
      <ul className="space-y-6">
        {results.map((item) => (
          <li
            key={item.supplier_id}
            className=" p-6  rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              {item.company_name}
            </h3>
            <p className="text-lg text-gray-700 mb-1">
              <strong>Website:</strong>{' '}
              <a
                href={item.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 hover:text-blue-900"
              >
                {item.website}
              </a>
            </p>
            <p className="text-lg text-gray-700 mb-1">
              <strong>Location:</strong> {item.location}
            </p>
            <p className="text-lg text-gray-700 mb-1">
              <strong>Nature of Business:</strong> {item.nature_of_business}
            </p>
            <p className="text-lg text-gray-700">
              <strong>Manufacturing Processes:</strong>{' '}
              {item.manufacturing_processes.join(', ')}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;

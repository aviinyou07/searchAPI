# searchAPI
This API allows users to search for manufacturers based on their location, nature of business, and manufacturing processes. It consists of a frontend built with React and a backend API built with Express.js and MongoDB.

Table of Contents:

Prerequisites
Installation
Backend
Frontend
Running the Application
API Endpoints
Search for Manufacturers
Testing the API
Loading Initial Data
License
Prerequisites

Ensure you have the following installed:
Node.js (>= 14.0.0)
MongoDB (for the database)
Postman or cURL (for API testing)
Installation
Backend

Navigate to the backend directory:
cd backend

Install the necessary dependencies:
npm install

Create a .env file in the backend directory with the following content:

MONGODB_URI=mongodb://localhost:27017/manufacturerDB
PORT=5000

Start the backend server:
npm start

Frontend
Navigate to the client directory:
cd client

Install the necessary dependencies:
npm install

Start the frontend development server:
npm start

The frontend application will be available at http://localhost:3000.

Running the Application
Ensure the MongoDB server is running.
Start the backend server as described above.
Start the frontend server as described above.
Open http://localhost:3000 in your web browser to access the application.


Description: Retrieve a list of manufacturers based on the provided criteria.

Loading Initial Data
To load initial data into the MongoDB database from supplierDetail.json, follow these steps:
Ensure the supplierDetail.json file is located in the root of your project directory.
Run the script:
node script/loadSupplier.js


API Endpoints
Search for Manufacturers
URL: POST /api/supplier/query
Description: Retrieve a list of manufacturers based on the provided criteria.
Request Body:
{
  "location": "India",
  "nature_of_business": "small_scale",
  "manufacturing_processes": ["3d_printing"]
}

Response:
Success (200):
[
  {
    "supplier_id": "12345",
    "company_name": "Manufacturer A",
    "website": "http://example.com",
    "location": "India",
    "nature_of_business": "small_scale",
    "manufacturing_processes": ["3d_printing", "casting"]
  },
  ...
]

Testing the API
Example cURL Command
To search for manufacturers based on location, nature of business, and manufacturing processes:

curl -X POST http://localhost:5000/api/supplier/query \
     -H "Content-Type: application/json" \
     -d '{
           "location": "India",
           "nature_of_business": "small_scale",
           "manufacturing_processes": ["3d_printing"]
         }'

License
This project is licensed under the MIT License - see the LICENSE file for details.

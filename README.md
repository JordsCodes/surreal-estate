# Surreal Estate

This is a Property Management App designed to display properties added by the user. The property data is stored in a locally-hosted API, which can be cloned here:

https://github.com/JordsCodes/surreal-estate-api

The dependencies for this project are React, Node.js, axios and Docker Desktop.

<img src="/src/images/screenshot.png" alt="screenshot of app"/>

## Installation

Navigate to the desired directory in your terminal and run: 

`git clone https://github.com/JordsCodes/surreal-estate`

Install Node Project Manager:

`npm install`

## Usage

To start the app, navigate to the app's root directory and run: 

`npm start`

To start the API, navigate to the API's root directory and run: 

`docker-compose up`

The user can add properties via the "Add Property" tab in the NavBar. These properties stay visible regardless of the user's sign-in status.

Given the non-deployed nature of the app, the single-sign on service is currently restricted to test accounts (my own Google account). 

The user is however free to change the clientID to connect to their own Google Identity Services console:

https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid

The user can filter and sort properties via the buttons in the SideBar. When signed in, the user can add or remove saved properties via the GUI. 

The user can also make CRUD requests to the database via Postman. While the API is running, see http://localhost:4000/api-docs/ for details of routes.


## Credits

Command Shift:

https://github.com/CommandShiftHQ

Jordan Noble:

https://twitter.com/JordsCodes

https://www.linkedin.com/in/jordan-noble-a9b931267/





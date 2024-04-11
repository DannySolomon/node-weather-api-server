# Express Weather API Integration

This project demonstrates how to create a simple Express.js server that integrates with the Weather API from Rapid API. It exposes two RESTful APIs to retrieve weather forecast information for any city.

## Project Structure

The project is structured as follows:

- `routes/`: Contains route definitions for the API endpoints.
- `controllers/`: Contains controller functions to handle incoming requests and send responses.
- `middleware/`: Contains middleware functions, in this case, an authentication middleware.
- `services/`: Contains service functions to interact with external APIs and fetch weather forecast data.
- `index.js`: Main entry point of the application.

## Getting Started

1. Clone the repository:
  git clone https://github.com/DannySolomon/node-weather-api-server.git
2. Install dependencies:
  cd express-weather-api
  npm install
3. Create a .env file:
  YOUR_RAPID_API_KEY = _your api key_
  PORT = _port number_
4. Start the server:
  npm start

The server will start listening on http://localhost:8000 by default.

## Usage

### Authentication

Authentication is header-based. Provide `clientid` and `clientsecret` in the request headers for authentication.

### API Endpoints

1. **Get Weather Forecast Summary by City**
  GET /weather/summary/:city
  Returns a summary of the weather forecast for the specified city.

2. **Get Hourly Weather Forecast by City**
  GET /weather/hourly/:city
  Returns hourly weather forecast details for the specified city.

Replace `:city` with the name of the city for which you want to retrieve weather forecast information.


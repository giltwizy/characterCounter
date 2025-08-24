# CountChars Service

## Description
A simple Node.js Express application that provides an API endpoint to count the number of characters in a provided string input.

## Features
- Accepts POST requests with a JSON body containing a `serviceName` field
- Returns the character count of the provided string
- Input validation to ensure `serviceName` is a string
- Returns appropriate error messages for invalid inputs

## Installation
1. Clone the repository:
```bash
git clone <repository-url>
cd countchars
```

2. Install dependencies:
```bash
npm install
```

## Usage
1. Start the server:
```bash
npm start
```

2. The server will run on `http://localhost:3000`

3. Make a POST request to the `/countChars` endpoint with a JSON body:
```bash
curl -X POST http://localhost:3000/countChars -H "Content-Type: application/json" -d '{"serviceName":"example"}'
```

Example response:
```json
{
  "count": 7
}
```

## API Endpoint
### POST /countChars
- **Request Body**: 
  ```json
  {
    "serviceName": "your-string-here"
  }
  ```
- **Response**:
  - Success (200): `{ "count": <number> }`
  - Error (400): `{ "error": "serviceName must be a string" }`

## Dependencies
- Express.js (^5.1.0)

## Scripts
- `npm start`: Runs the application
- `npm test`: Placeholder for tests (not implemented)

## Author
Gilton Teti

## License
ISC

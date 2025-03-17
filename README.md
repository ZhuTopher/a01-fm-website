# Full Stack Web Application

A Node.js and React full-stack web application.

## Project Structure

- `client/` - React frontend application
- `server/` - Node.js/Express backend API

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   cd client && npm install
   cd server && npm install
   ```

### Running the Application

To run the full application (both frontend and backend):

```
npm run dev
```

This will start:
- React frontend on port 3000 (http://localhost:3000)
- Express API server on port 5000 (http://localhost:5000)

To run only the backend:
```
npm run server
```

To run only the frontend:
```
npm run client
```

## API Endpoints

- GET `/api` - Returns a welcome message
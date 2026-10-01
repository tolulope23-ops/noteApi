# Note API

A RESTful backend API for creating, reading, updating, and deleting personal notes.

The project is built with **Node.js, Express.js, MongoDB, and Mongoose**, with a focus on clean API structure, database interaction, error handling, and frontend-backend integration.

## Features

* Create a note
* Retrieve all notes
* Retrieve a single note
* Update an existing note
* Delete a note
* MongoDB database integration using Mongoose
* RESTful API architecture
* JSON request and response handling
* Centralized error-handling middleware
* Environment-based configuration

## Tech Stack

| Technology | Purpose                         |
| ---------- | ------------------------------- |
| Node.js    | JavaScript runtime              |
| Express.js | Web framework                   |
| MongoDB    | Database                        |
| Mongoose   | MongoDB ODM                     |


## API Endpoint, Example

### 3. Create a Note

```http
POST /api/v1/notes/add
```

Request body:

```json
{
  "title": "Learning Backend Development",
  "content": "Today I learned more about REST APIs and MongoDB."
}
```

## Example Response

A successful request to add a note may return:

```json
{
  "success": true,
  "data": {
    "_id": "66f123abc456def789012345",
    "title": "Learning Backend Development",
    "content": "Today I learned more about REST APIs and MongoDB.",
    "createdAt": "2026-09-30T12:00:00.000Z",
    "updatedAt": "2026-09-30T12:00:00.000Z"
  }
}
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/)
* MongoDB or a MongoDB Atlas database
* Git

### 1. Clone the Repository

```bash
git clone https://github.com/tolulope23-ops/noteApi.git
```

Move into the project directory:

```bash
cd Note-API
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

Replace the MongoDB connection string with your actual MongoDB or MongoDB Atlas connection string.

### 4. Start the Server

For development:

```bash
npm run start
```

Or:

```bash
node app.js
```

The API will be available at:

```text
http://localhost:3000
```

## Frontend Integration

The API can be consumed by a frontend application using JavaScript's `fetch()` API.

Example:

```javascript
const API_URL = "http://localhost:3000/api/v1/notes";

async function fetchNotes() {
  const response = await fetch(API_URL);
  const result = await response.json();

  console.log(result.data);
}
```

## Error Handling

The API uses centralized error-handling middleware to provide consistent error responses.

Example:

```json
{
  "success": false,
  "message": "Note not found"
}
```

## Database

The application uses **MongoDB** for persistent note storage and **Mongoose** for schema definition and database operations.

Each note contains information such as:

```text
Note
├── title
├── content
├── createdAt
└── updatedAt
```
Timestamps are automatically maintained by Mongoose.

## Future Improvements

Potential improvements for future versions include:

* Input validation
* Pagination for notes
* Search functionality


## Author

**Rachael Adeyemi**

Backend Developer focused on building reliable and maintainable APIs.

## License

This project is available for educational and portfolio purposes.

```

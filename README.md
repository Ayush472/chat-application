# MERN Chat Application

This is a real-time chat application built using the MERN stack (MongoDB, Express.js, React, and Node.js) with Socket.io for real-time communication.

## Features

- Real-time messaging
- User authentication (login/register)
- Online/offline status
- Responsive design
- Emoji support
- Message timestamps
- User profiles

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB Atlas account or local MongoDB installation

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yashkotadia2/mern-chat-app.git
cd mern-chat-app
```

2. Install dependencies for both server and client:
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. Create a `.env` file in the server directory with the following variables:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

4. Start the development server:
```bash
# From the root directory, run both client and server concurrently
npm run dev
```
Or run them separately:
```bash
# In one terminal (server)
cd server
npm start

# In another terminal (client)
cd client
npm start
```

## Usage

1. Open your browser and navigate to `http://localhost:3000`
2. Register a new account or login with existing credentials
3. Start chatting with other online users

## Project Structure

```
mern-chat-app/
├── client/               # React frontend
│   ├── public/           # Static files
│   └── src/              # React components
│       ├── components/   # Reusable components
│       ├── context/      # Context providers
│       ├── pages/        # Page components
│       ├── utils/        # Utility functions
│       └── App.js        # Main App component
├── server/               # Express backend
│   ├── config/          # Configuration files
│   ├── controllers/     # Route controllers
│   ├── middleware/      # Express middleware
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   ├── utils/           # Utility functions
│   └── server.js        # Server entry point
└── README.md            # Project documentation
```

## Technologies Used

- **Frontend**: React.js, Socket.io-client, Axios, Material-UI
- **Backend**: Node.js, Express.js, Socket.io, MongoDB, Mongoose
- **Authentication**: JSON Web Tokens (JWT)
- **Real-time Communication**: Socket.io

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

For any questions or feedback, please contact:
- Ayush Patel - patelayush4702@gmail.com
- Project Link: [https://github.com/Ayush472/chat-application]((https://github.com/Ayush472/chat-application))

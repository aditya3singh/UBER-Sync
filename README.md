# 🚗 UBER-Sync

A modern ride-sharing application built with React, Node.js, and Socket.IO that connects users with drivers (captains) in real-time.

## ✨ Features

### 🚀 Core Functionality
- **User Authentication**: Secure signup/login for both users and drivers
- **Real-time Ride Booking**: Instant ride requests with live tracking
- **Driver Management**: Captain registration with vehicle details
- **Live Location Tracking**: Real-time GPS tracking using Google Maps API
- **Socket.IO Integration**: Real-time communication between users and drivers
- **Responsive Design**: Modern UI built with Tailwind CSS

### 👥 User Features
- User registration and authentication
- Ride booking and tracking
- Real-time driver location updates
- Ride history and status updates

### 🚗 Captain (Driver) Features
- Driver registration with vehicle information
- Accept/reject ride requests
- Real-time location sharing
- Ride management and navigation

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **GSAP** - Advanced animations
- **Google Maps API** - Location services and mapping
- **Socket.IO Client** - Real-time communication
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **Socket.IO** - Real-time bidirectional communication
- **JWT** - JSON Web Token authentication
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB
- Google Maps API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aditya3singh/UBER-Sync.git
   cd UBER-Sync
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Setup**

   Create `.env` files in both `backend` and `frontend` directories:

   **Backend (.env)**
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

   **Frontend (.env)**
   ```env
   VITE_BASE_URL=http://localhost:5000
   VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   ```

5. **Start the backend server**
   ```bash
   cd backend
   npm start
   ```

6. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```

7. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📁 Project Structure

```
UBER-Sync/
├── backend/                 # Backend server
│   ├── controllers/        # Request handlers
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── services/          # Business logic
│   ├── middlewares/       # Custom middleware
│   ├── db/               # Database connection
│   ├── app.js            # Express app configuration
│   └── server.js         # Server entry point
├── frontend/              # React frontend
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── context/      # React context providers
│   │   └── assets/       # Static assets
│   ├── public/           # Public assets
│   └── package.json      # Frontend dependencies
└── README.md             # Project documentation
```

## 🔐 API Endpoints

### Authentication
- `POST /users/register` - User registration
- `POST /users/login` - User login
- `POST /captains/register` - Captain registration
- `POST /captains/login` - Captain login

### Rides
- `POST /rides/request` - Request a new ride
- `GET /rides/:id` - Get ride details
- `PUT /rides/:id/status` - Update ride status

### Maps
- `GET /maps/geocode` - Geocoding services
- `GET /maps/directions` - Route directions

## 🌟 Key Features Implementation

### Real-time Communication
- Socket.IO integration for instant updates
- Live location tracking
- Real-time ride status updates

### Security
- JWT-based authentication
- Password hashing with bcrypt
- Protected routes and middleware

### User Experience
- Responsive design with Tailwind CSS
- Smooth animations with GSAP
- Google Maps integration for location services

## 🚀 Deployment

### Backend Deployment
1. Set up environment variables on your hosting platform
2. Ensure MongoDB connection is accessible
3. Deploy to platforms like Heroku, Railway, or DigitalOcean

### Frontend Deployment
1. Build the production version: `npm run build`
2. Deploy the `dist` folder to platforms like Vercel, Netlify, or GitHub Pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Aditya Singh**
- GitHub: [@aditya3singh](https://github.com/aditya3singh)

## 🙏 Acknowledgments

- Google Maps API for location services
- Socket.IO for real-time communication
- Tailwind CSS for the beautiful UI framework
- React community for the amazing ecosystem

---

⭐ Star this repository if you find it helpful!

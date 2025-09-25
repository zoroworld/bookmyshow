# Movie Booking System - Server & API Overview

## Required APIs

1. **Fetch All Movies**  
   - Endpoint: `/api/movies`  
   - Method: `GET`  
   - Description: Retrieves a list of all available movies.

2. **Movie Info**  
   - Endpoint: `/api/movies/:movieId`  
   - Method: `GET`  
   - Description: Fetch detailed information about a specific movie.

3. **All Theatres for a Movie**  
   - Endpoint: `/api/movies/:movieId/theatres`  
   - Method: `GET`  
   - Description: Get a list of all theatres showing a specific movie.

4. **Detail of Single Theatre**  
   - Endpoint: `/api/theatres/:theatreId`  
   - Method: `GET`  
   - Description: Fetch detailed information for a single theatre.

5. **Fetch Payment Details**  
   - Endpoint: `/api/payments/:bookingId`  
   - Method: `GET`  
   - Description: Retrieve payment details for a specific booking.

6. **Payment Page / API Call (Payment Gateway)**  
   - Endpoint: `/api/payments/process`  
   - Method: `POST`  
   - Description: Process payment through integrated gateways.  
   - Supported Gateways:
     - Razorpay
     - Juspay
     - Stripe

## Backend Structure

- **Model (Schema)**: Define database schemas for movies, theatres, bookings, and payments.  
- **Routes (URL APIs)**: Map endpoints to server functions.  
- **Async Functions**: Handle asynchronous operations for fetching data, creating bookings, and processing payments.


##  Frontend


## Key Features / Flow

1. **Home Page**  
   - Displays all movies using `MovieCard` component.  
   - Supports search and filter functionality.  

2. **Movie Detail Page**  
   - Shows movie info, available theatres, and showtimes.  

3. **Theatre Detail Page**  
   - Displays theatre-specific details and available seats.  

4. **Booking Page**  
   - Allows users to select seats and confirm bookings.  

5. **Payment Page**  
   - Integrates payment gateways (Razorpay, Stripe, Juspay).  
   - Handles payment confirmation and redirects.  

6. **State Management**  
   - Global app state via React Context or Redux for user session, selected movie/theatre, and booking info.  

7. **API Integration**  
   - Services call backend APIs asynchronously for movies, theatres, and payments.



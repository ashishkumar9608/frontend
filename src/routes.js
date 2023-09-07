// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieListings from './components/MovieListings';
import MovieDetails from './components/MovieDetails';
import SeatSelection from './components/SeatSelection';
import BookingConfirmation from './components/BookingConfirmation'; // Import the BookingConfirmation component
import LiveAttendanceDashboard from './components/LiveAttendanceDashboard';
import MovieScreeningSchedule from './components/MovieScreeningSchedule';
import UserDashboard from './components/UserDashboard';
import HomePage from './components/Home';
import TicketBooking from './components/BookTicket';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/movieListings" component={MovieListings} />
      <Route exact path="/movie/:id" component={MovieDetails} />
      <Route exact path="/movie/:id/book" component={SeatSelection} />
      <Route exact path="/movie/:id/purchase" component={TicketBooking}/>
      <Route exact path="/movie/:id/book/confirmation" component={BookingConfirmation} /> {/* Add this route */}
      <Route exact path="/dashboard" component={LiveAttendanceDashboard} />
      <Route exact path="/schedule" component={MovieScreeningSchedule} />
      <Route exact path="/user/dashboard" component={UserDashboard} />
    </Switch>
  </Router>
);

export default Routes;

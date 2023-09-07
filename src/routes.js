// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieListings from './components/MovieListings';
import MovieDetails from './components/MovieDetails';
import SeatSelection from './components/SeatSelection';
import BookingConfirmation from './components/BookingConfirmation';
import LiveAttendanceDashboard from './components/LiveAttendanceDashboard';
import MovieScreeningSchedule from './components/MovieScreeningSchedule';
import UserDashboard from './components/UserDashboard';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={MovieListings} />
      <Route exact path="/movie/:id" component={MovieDetails} />
      <Route exact path="/movie/:id/book" component={SeatSelection} />
      <Route exact path="/booking/confirmation" component={BookingConfirmation} />
      <Route exact path="/dashboard" component={LiveAttendanceDashboard} />
      <Route exact path="/schedule" component={MovieScreeningSchedule} />
      <Route exact path="/user/dashboard" component={UserDashboard} />
    </Switch>
  </Router>
);

export default Routes;

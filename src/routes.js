import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import MovieDetail from "./pages/MovieDetail";

export default function Routes() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/details" component={MovieDetail} />
      </BrowserRouter>
    );
}
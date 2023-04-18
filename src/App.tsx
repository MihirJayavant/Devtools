import type { Component } from 'solid-js';
import { Router, Routes, Route } from '@solidjs/router';
import { RoutePage } from './Pages/RoutePage';
import './js/firebase';

const App: Component = () => {
  return (
    <Router>
      <RoutePage />
    </Router>
  );
};

export default App;

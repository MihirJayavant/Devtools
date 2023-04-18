import type { Component } from 'solid-js';
import { Router, Routes, Route } from '@solidjs/router';
import { RoutePage } from './Pages/RoutePage';

const App: Component = () => {
  return (
    <Router>
      <RoutePage />
    </Router>
  );
};

export default App;

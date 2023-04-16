import type { Component } from "solid-js";
import { Router, Routes, Route } from "@solidjs/router";
import { HomePage } from "./Pages/HomePage";

const App: Component = () => {
  return (
    <Router>
      <HomePage />
    </Router>
  );
};

export default App;

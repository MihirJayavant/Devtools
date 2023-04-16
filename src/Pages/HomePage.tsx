import { Route, Routes } from "@solidjs/router";
import type { Component } from "solid-js";
import { Base64Page } from "./Base64Page";
import { Navbar } from "../Components/Navbar";

export const HomePage: Component = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main class="m-3">
        <Routes>
          <Route path="/base64" component={Base64Page} />
        </Routes>
      </main>
    </>
  );
};

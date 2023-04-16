import { Route, Routes } from "@solidjs/router";
import type { Component } from "solid-js";
import { Base64EncoderPage } from "./Base64EncoderPage";
import { Navbar } from "../Components/Navbar";
import { Base64DecoderPage } from "./Base64DecoderPage";

export const HomePage: Component = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main class="m-3">
        <Routes>
          <Route path="/base64-encode" component={Base64EncoderPage} />
          <Route path="/base64-decode" component={Base64DecoderPage} />
        </Routes>
      </main>
    </>
  );
};

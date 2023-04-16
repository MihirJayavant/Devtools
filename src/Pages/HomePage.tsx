import { Route, Routes } from "@solidjs/router";
import type { Component } from "solid-js";
import { TransformerPage } from "./TranformerPage";
import { Navbar } from "../Components/Navbar";
import { Base64Decoder, Base64Encoder } from "../core/base64";

export const HomePage: Component = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main class="m-3">
        <Routes>
          <Route
            path="/base64-encode"
            component={TransformerPage(new Base64Encoder())}
          />
          <Route
            path="/base64-decode"
            component={TransformerPage(new Base64Decoder())}
          />
        </Routes>
      </main>
    </>
  );
};

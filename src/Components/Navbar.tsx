import { A } from "@solidjs/router";
import { Component } from "solid-js";

export const Navbar: Component = () => {
  return (
    <nav
      class="navbar is-fixed-top is-danger"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <div class="navbar-item">DevTools</div>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbar" class="navbar-menu">
        <div class="navbar-start">
          <A class="navbar-item" activeClass="is-active" href="/home/base64">
            Home
          </A>
        </div>
      </div>
    </nav>
  );
};

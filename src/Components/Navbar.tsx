import { A } from '@solidjs/router';
import { Component, createSignal } from 'solid-js';

export const Navbar: Component = () => {
  const [isNavOpen, toggleNav] = createSignal(false);
  const navClass = () => (isNavOpen() ? 'is-active' : '');

  return (
    <nav class="navbar is-fixed-top is-danger" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class="navbar-item">DevTools</div>

        <a
          role="button"
          class={'navbar-burger ' + navClass()}
          aria-label="menu"
          aria-expanded={isNavOpen()}
          onClick={() => toggleNav(state => !state)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbar" class={'navbar-menu ' + navClass()}>
        <div class="navbar-start">
          <A class="navbar-item" activeClass="is-active" href="/base64-encode">
            Base64 Encoder
          </A>
          <A class="navbar-item" activeClass="is-active" href="/base64-decode">
            Base64 Decoder
          </A>
          <A class="navbar-item" activeClass="is-active" href="/string-escape">
            String Escape
          </A>
          <A class="navbar-item" activeClass="is-active" href="/string-unescape">
            String Unescape
          </A>
          <A class="navbar-item" activeClass="is-active" href="/json-format">
            JSON Formatter
          </A>
        </div>
      </div>
    </nav>
  );
};

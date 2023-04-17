import { Route, Routes } from '@solidjs/router';
import type { Component } from 'solid-js';
import { Navbar } from '../Components/Navbar';
import { Base64Encoder, Base64Decoder, StringEscape, StringUnEscape } from '../core';
import { TransformerPage } from './TranformerPage';
import { JsonFormatterPage } from './JsonFormatterPage';
import { HomePage } from './HomePage';

export const RoutePage: Component = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main class="m-3">
        <Routes>
          <Route path="/" component={HomePage} />
          <Route path="/base64-encode" component={TransformerPage(new Base64Encoder())} />
          <Route path="/base64-decode" component={TransformerPage(new Base64Decoder())} />
          <Route path="/string-escape" component={TransformerPage(new StringEscape())} />
          <Route path="/string-unescape" component={TransformerPage(new StringUnEscape())} />
          <Route path="/json-format" component={JsonFormatterPage} />
        </Routes>
      </main>
    </>
  );
};

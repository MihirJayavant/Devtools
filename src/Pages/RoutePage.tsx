import { Route, Routes } from '@solidjs/router';
import { Component, lazy } from 'solid-js';
import { Navbar } from '../Components/Navbar';
import { Base64Encoder, Base64Decoder, StringEscape, StringUnEscape } from '../core';
import { TransformerPage } from './TranformerPage';
import { HomePage } from './HomePage';

const JsonFormatterPage = lazy(() => import('./JsonFormatterPage'));

export const RoutePage: Component = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" component={HomePage} />
        <Route path="/base64-encode" component={TransformerPage(new Base64Encoder())} />
        <Route path="/base64-decode" component={TransformerPage(new Base64Decoder())} />
        <Route path="/string-escape" component={TransformerPage(new StringEscape())} />
        <Route path="/string-unescape" component={TransformerPage(new StringUnEscape())} />
        <Route path="/json-format" component={JsonFormatterPage} />
      </Routes>
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>Dev Essentials</strong> by{' '}
            <a href="https://github.com/MihirJayavant">Mihir Jayavant</a>. The source code is
            licensed
            <a href="https://github.com/MihirJayavant/Devtools/blob/main/LICENSE"> GNU GPL 2.0</a>.
          </p>
        </div>
      </footer>
    </>
  );
};

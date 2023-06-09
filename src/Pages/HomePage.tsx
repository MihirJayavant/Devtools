import { Component } from 'solid-js';
import { Box } from '../Components/Box';

export const HomePage: Component = () => {
  return (
    <>
      <section class="hero is-danger">
        <div class="hero-body">
          <p class="title">Dev Essentials</p>
          <p class="subtitle">Tools for everyday</p>
        </div>
      </section>
      <div class="columns is-multiline m-2">
        <div class="column is-3">
          <Box
            title="Base64 Encoder"
            description="Convert string into Base64 encoded string"
            icon="fa-code-branch"
            href="/base64-encode"
          />
        </div>
        <div class="column is-3">
          <Box
            title="Base64 Decoder"
            description="Deocde base64 string easily"
            icon="fa-sitemap"
            href="/base64-decode"
          />
        </div>
        <div class="column is-3">
          <Box
            title="String Escape"
            description="Tools to easily escape string with backslash"
            icon="fa-code-branch"
            href="/string-escape"
          />
        </div>
        <div class="column is-3">
          <Box
            title="String Unescape"
            description="Tools to easily unescape string"
            icon="fa-sitemap"
            href="/string-unescape"
          />
        </div>
        <div class="column is-3">
          <Box
            title="JSON Formatter"
            description="Format your JSON and view in the tree viewer"
            icon="fa-code"
            href="/json-format"
          />
        </div>
        <div class="column is-3">
          <Box
            title="JS Object to JSON"
            description="Convert javascript object to json"
            icon="fa-code"
            href="/js-to-json"
          />
        </div>
      </div>
    </>
  );
};

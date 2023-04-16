import type { Component } from "solid-js";

export const Base64Page: Component = () => {
  return (
    <div class="columns is-multiline">
      <div class="column is-12">
        <textarea
          class="textarea is-danger"
          placeholder="Enter string"
          rows={5}
        ></textarea>
      </div>
      <div class="column is-12">
        <button class="button is-primary">Encode</button>
      </div>
      <div class="column is-12">
        <textarea
          class="textarea is-danger"
          placeholder="Base 64 encoded"
          rows={5}
          readOnly
        ></textarea>
      </div>
    </div>
  );
};

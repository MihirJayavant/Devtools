import { Component, createSignal } from "solid-js";

export const Base64EncoderPage: Component = () => {
  const [text, setText] = createSignal("");
  const [base64, setBase64] = createSignal("");

  const changeToBase64 = () => {
    const result = btoa(text());
    setBase64(result);
  };

  return (
    <div class="columns is-multiline">
      <div class="column is-12">
        <textarea
          class="textarea is-danger"
          placeholder="Enter string"
          rows={5}
          value={text()}
          onchange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <div class="column is-12">
        <button class="button is-primary" onClick={changeToBase64}>
          Encode
        </button>
      </div>
      <div class="column is-12">
        <textarea
          class="textarea is-danger"
          placeholder="Base 64 encoded"
          rows={5}
          value={base64()}
          readOnly
        ></textarea>
      </div>
    </div>
  );
};

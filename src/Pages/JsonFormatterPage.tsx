import { Component, createSignal } from 'solid-js';
import { JsonEditor } from '../Components/JsonEditor';

export const JsonFormatterPage: Component = () => {
  const [text, setText] = createSignal('');
  const [result, setResult] = createSignal<any>();

  const onClick = () => {
    try {
      const json = JSON.parse(text());
      setResult(json);
    } catch (error) {
      console.error({ error });
    }
  };

  return (
    <div class="columns is-multiline">
      <div class="column is-5">
        <textarea
          class="textarea is-danger"
          placeholder="Enter string"
          rows={5}
          value={text()}
          onchange={e => setText(e.target.value)}
        ></textarea>
      </div>
      <div class="column is-narrow">
        <button class="button is-primary" onClick={onClick}>
          Format
        </button>
      </div>
      <div class="column">
        <JsonEditor json={result()} />
      </div>
    </div>
  );
};

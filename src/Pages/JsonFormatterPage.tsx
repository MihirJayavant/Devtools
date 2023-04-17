import { Component, createSignal, lazy } from 'solid-js';

const JsonEditor = lazy(() => import('../Components/JsonEditor'));

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
          class="textarea is-danger h90"
          placeholder="Enter Valid JSON"
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
        <div class="w100" style="height:86vh">
          <JsonEditor json={result()} />
        </div>
      </div>
    </div>
  );
};

export default JsonFormatterPage;

import { Show, createSignal } from 'solid-js';
import { JsonEditor } from '../Components/JsonEditor';
import { ITransformer } from '../core';

const InternalJsonFormatterPage = (transformer: ITransformer) => {
  const [text, setText] = createSignal('');
  const [result, setResult] = createSignal<string>('{}');
  const [errorMessage, setError] = createSignal<string>();

  const onClick = () => {
    try {
      const result = transformer.transform(text());
      setResult(result);
    } catch (error: any) {
      setError(error.message ?? error.stack);
      document.getElementById('json-error-message')?.scrollIntoView();
      console.log(document.getElementById('json-error-message'));
    }
  };

  const onError = (error: any) => {
    setError(error.message ?? error.stack);
    document.getElementById('json-error-message')?.scrollIntoView();
    console.log(document.getElementById('json-error-message'));
  };

  const onSuccess = () => {
    setError();
  };

  return (
    <div class="m-4">
      <div class="columns is-centered">
        <div class="column is-5">
          <div class="field">
            <textarea
              class="textarea is-danger h90"
              placeholder="Enter Valid JSON"
              value={text()}
              onchange={e => setText(e.target.value)}
            ></textarea>
            <div id="json-error-message">
              <Show when={!!errorMessage()}>
                <p class="help is-danger">{errorMessage()}</p>
              </Show>
            </div>
          </div>
        </div>
        <div class="column is-narrow">
          <button class="button is-primary" onClick={onClick}>
            Format
          </button>
        </div>
        <div class="column is-5">
          <div class="w100 h90">
            <JsonEditor json={result()} onError={onError} onSuccess={onSuccess} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const JsonFormatterPage = (transformer: ITransformer) => {
  let render = InternalJsonFormatterPage(transformer);
  return () => render;
};

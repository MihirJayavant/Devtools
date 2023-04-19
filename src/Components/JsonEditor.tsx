import { Component, createEffect } from 'solid-js';

interface IProps {
  json: any;
}

export const JsonEditor: Component<IProps> = (props: IProps) => {
  let container: any;

  createEffect(() => {
    container.innerHTML = JSON.stringify(props.json || {}, null, 2);
    (window as any).hljs.highlightElement(container);
  });

  return (
    <pre class="full border">
      <code class="full language-json" ref={container}></code>
    </pre>
  );
};

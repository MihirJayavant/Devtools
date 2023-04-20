import { Component, createEffect } from 'solid-js';

interface IProps {
  json: string;
  onError: (error: any) => void;
  onSuccess: () => void;
}

export const JsonEditor: Component<IProps> = (props: IProps) => {
  let container: any;

  createEffect(() => {
    try {
      const temp = JSON.parse(props.json);
      container.innerHTML = JSON.stringify(temp || {}, null, 2);
      (window as any).hljs.highlightElement(container);
      props.onSuccess();
    } catch (error: any) {
      props.onError(error);
    }
  });

  return (
    <pre class="full border">
      <code class="full language-json" ref={container}></code>
    </pre>
  );
};

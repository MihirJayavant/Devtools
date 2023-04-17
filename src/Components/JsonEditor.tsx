import { Component, createEffect, createSignal, onMount } from 'solid-js';
import JSONEditor from 'jsoneditor';

interface IProps {
  json: any;
}

export const JsonEditor: Component<IProps> = (props: IProps) => {
  let container: any;
  const [editor, setEditor] = createSignal<JSONEditor>();

  onMount(() => {
    const result = new JSONEditor(container, { mode: 'view' });
    setEditor(result);
  });

  createEffect(() => {
    editor()?.set(props.json);
  });

  return <div style="width:100%;height:100%" ref={container}></div>;
};

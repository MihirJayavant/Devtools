import { Component } from 'solid-js';

interface IProps {
  onClick: () => void;
  text: string;
  onTextChange: (value: string) => void;
  result: string;
  metaData: {
    button: string;
    textPlaceholder: string;
    resultPlaceholder: string;
  };
}

export const SimpleTextConvert: Component<IProps> = (props: IProps) => {
  return (
    <div class="columns is-centered">
      <div class="column is-5">
        <textarea
          class="textarea is-danger has-fixed-size h90"
          placeholder={props.metaData.textPlaceholder}
          value={props.text}
          onchange={e => props.onTextChange(e.target.value)}
        ></textarea>
      </div>
      <div class="column is-narrow">
        <button class="button is-primary" onClick={props.onClick}>
          {props.metaData.button}
        </button>
      </div>
      <div class="column is-5">
        <textarea
          class="textarea is-danger has-fixed-size h90"
          placeholder={props.metaData.resultPlaceholder}
          value={props.result}
          readOnly
        ></textarea>
      </div>
    </div>
  );
};

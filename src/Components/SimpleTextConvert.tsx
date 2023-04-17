import { Component } from 'solid-js';

interface IProps {
  onClick: () => void;
  text: string;
  onTextChange: (value: string) => void;
  result: string;
  buttonText: string;
}

export const SimpleTextConvert: Component<IProps> = (props: IProps) => {
  return (
    <div class="columns is-multiline">
      <div class="column">
        <textarea
          class="textarea is-danger has-fixed-size h90"
          placeholder="Enter string"
          value={props.text}
          onchange={e => props.onTextChange(e.target.value)}
        ></textarea>
      </div>
      <div class="column is-narrow">
        <button class="button is-primary" onClick={props.onClick}>
          {props.buttonText}
        </button>
      </div>
      <div class="column">
        <textarea
          class="textarea is-danger has-fixed-size h90"
          placeholder="Base 64 encoded"
          value={props.result}
          readOnly
        ></textarea>
      </div>
    </div>
  );
};

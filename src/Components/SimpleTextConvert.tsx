import { Component } from "solid-js";

interface IProps {
  onClick: () => void;
  text1Value: string;
  text1Change: (value: string) => void;
  text2Value: string;
}

export const SimpleTextConvert: Component<IProps> = (props: IProps) => {
  return (
    <div class="columns is-multiline">
      <div class="column is-12">
        <textarea
          class="textarea is-danger"
          placeholder="Enter string"
          rows={5}
          value={props.text1Value}
          onchange={(e) => props.text1Change(e.target.value)}
        ></textarea>
      </div>
      <div class="column is-12">
        <button class="button is-primary" onClick={props.onClick}>
          Encode
        </button>
      </div>
      <div class="column is-12">
        <textarea
          class="textarea is-danger"
          placeholder="Base 64 encoded"
          rows={5}
          value={props.text2Value}
          readOnly
        ></textarea>
      </div>
    </div>
  );
};

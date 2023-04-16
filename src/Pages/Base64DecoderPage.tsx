import { Component, createSignal } from "solid-js";
import { SimpleTextConvert } from "../Components/SimpleTextConvert";

export const Base64DecoderPage: Component = () => {
  const [text, setText] = createSignal("");
  const [base64, setBase64] = createSignal("");

  const changeToBase64 = () => {
    console.log(text());
    const result = atob(text());
    setBase64(result);
  };

  return (
    <SimpleTextConvert
      text1Value={text()}
      text1Change={setText}
      onClick={changeToBase64}
      text2Value={base64()}
    />
  );
};

import { createSignal } from "solid-js";
import { SimpleTextConvert } from "../Components/SimpleTextConvert";
import { ITransformer } from "../core/ITransformer";

const InternalTranformerPage = (transformer: ITransformer) => {
  const [text, setText] = createSignal("");
  const [resultText, setResultText] = createSignal("");

  const convert = () => {
    const result = transformer.transform(text());
    setResultText(result);
  };

  return (
    <SimpleTextConvert
      text1Value={text()}
      text1Change={setText}
      onClick={convert}
      text2Value={resultText()}
    />
  );
};

export const TransformerPage = (transformer: ITransformer) => {
  let render = InternalTranformerPage(transformer);
  return () => render;
};

import { createSignal } from 'solid-js';
import { SimpleTextConvert } from '../Components/SimpleTextConvert';
import { ITransformer } from '../core/ITransformer';

const InternalTranformerPage = (transformer: ITransformer) => {
  const [text, setText] = createSignal('');
  const [resultText, setResultText] = createSignal('');

  const convert = () => {
    try {
      const result = transformer.transform(text());
      setResultText(result);
    } catch (error) {
      console.error({ error });
    }
  };

  return (
    <SimpleTextConvert
      text={text()}
      onTextChange={setText}
      onClick={convert}
      result={resultText()}
      metaData={transformer.text}
    />
  );
};

export const TransformerPage = (transformer: ITransformer) => {
  let render = InternalTranformerPage(transformer);
  return () => render;
};

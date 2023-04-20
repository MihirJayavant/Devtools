import { ITransformer } from './ITransformer';

export class JsonFormatter implements ITransformer {
  name = 'json-formatter';
  text = {
    button: 'Format',
    textPlaceholder: 'Enter Your Text Here',
    resultPlaceholder: 'Formatted JSON',
  };
  transform(input: string) {
    return input;
  }
}

export class JstoJson implements ITransformer {
  name = 'js-to-json';
  text = {
    button: 'Convert',
    textPlaceholder: 'Enter Your JS Object Here',
    resultPlaceholder: 'Formatted JSON',
  };
  transform(input: string) {
    return input.replace(/([a-zA-Z0-9]+):/g, '"$1":');
  }
}

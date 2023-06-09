import { ITransformer } from './ITransformer';

export class StringEscape implements ITransformer {
  name = 'string-escape';
  text = {
    button: 'Escape',
    textPlaceholder: 'Enter Your Text Here',
    resultPlaceholder: 'Escape String Result',
  };
  transform(input: string) {
    return input.replace(/[\\'"]/g, '\\$&');
  }
}

export class StringUnEscape implements ITransformer {
  name = 'string-unescape';
  text = {
    button: 'Unescape',
    textPlaceholder: 'Enter Your Text Here',
    resultPlaceholder: 'UnEscape String Result',
  };
  transform(input: string) {
    return input.replaceAll('\\', '');
  }
}

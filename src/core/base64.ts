import { ITransformer } from './ITransformer';

export class Base64Encoder implements ITransformer {
  name = 'base64-encoder';
  text = {
    button: 'Encode',
    textPlaceholder: 'Enter Your Text Here',
    resultPlaceholder: 'Base64 Result',
  };
  transform(input: string) {
    return btoa(input);
  }
}

export class Base64Decoder implements ITransformer {
  name = 'base64-decoder';
  text = {
    button: 'Decode',
    textPlaceholder: 'Enter Valid Base64 String Here',
    resultPlaceholder: 'Decoded String Result',
  };
  transform(input: string) {
    return atob(input);
  }
}

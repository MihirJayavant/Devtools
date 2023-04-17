import { ITransformer } from "./ITransformer";

export class Base64Encoder implements ITransformer {
  name = 'base64encoder'
  buttonText = 'Encoder'
  transform(input: string) {
    return btoa(input);
  }
}

export class Base64Decoder implements ITransformer {
  name = 'base64encoder'
  buttonText = 'Decoder'
  transform(input: string) {
    return atob(input);
  }
}

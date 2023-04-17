import { ITransformer } from "./ITransformer";

export class StringEscape implements ITransformer {
  name = 'stringEscape'
  buttonText = 'Escape'
  transform(input: string) {
    return input.replace(/[\\'"]/g, "\\$&");
  }
}

export class StringUnEscape implements ITransformer {
  name = 'stringEscape'
  buttonText = 'Unescape'
  transform(input: string) {
    return input.replaceAll("\\", "");
  }
}

import { ITransformer } from "./ITransformer";

export class StringEscape implements ITransformer {
    name = 'stringEscape'
    type: 'Encoder' = 'Encoder'
    transform(input: string) {
        return input.replace(/[\\'"]/g, "\\$&");
    }
}
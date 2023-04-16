import { ITransformer } from "./ITransformer";

export class Base64Encoder implements ITransformer {
    name = 'base64encoder'
    type: 'Encoder' = 'Encoder'
    transform(input: string) {
        return btoa(input);
    }
}

export class Base64Decoder implements ITransformer {
    name = 'base64encoder'
    type: 'Decoder' = 'Decoder'
    transform(input: string) {
        return atob(input);
    }
}
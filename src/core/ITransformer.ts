export interface ITransformer {
    name: string
    transform: (input: string) => string
    type: 'Encoder' | 'Decoder'
}
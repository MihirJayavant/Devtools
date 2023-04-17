export interface ITransformer {
  name: string
  transform: (input: string) => string
  text: {
    button: string
    textPlaceholder: string
    resultPlaceholder: string
  }
}

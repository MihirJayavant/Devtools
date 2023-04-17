export interface ITransformer {
  name: string
  transform: (input: string) => string
  buttonText: string
}

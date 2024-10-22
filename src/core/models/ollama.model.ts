export interface OllamaPostRequest {
  model: string
  prompt: string
  stream: false
  context?: number[]
}

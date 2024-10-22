import axios from 'axios'
import { OllamaAbstractService } from './ollama.abstract.service'
import { OllamaPostRequest } from '../models/ollama.model'

export class OllamaService implements OllamaAbstractService {
  BASE_URL = 'https://ollama.baseneox.cl/api/generate'

  async postQuestion(question: string) {
    const token = 'UMm9t7QUF073LcE+B2PnKYUUmDWTw7WCZLIK3oglCU0='

    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    }

    const requestObj: OllamaPostRequest = {
      model: 'llama3.2:3b',
      prompt: question,
      stream: false,
      context: [],
    }

    const response = await axios.post(this.BASE_URL, requestObj, { headers })
  }
}

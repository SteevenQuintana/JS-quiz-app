import { SUPPORTED_TOPICS } from './constants'

export interface Question {
  id: number
  question: string
  code?: string
  answers: string[]
  correctAnswer: number
  userSelectAnswer?: number
  isCorrectUserAnswer?: boolean
}

export type Topycs = keyof typeof SUPPORTED_TOPICS

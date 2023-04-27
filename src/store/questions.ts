import { create } from 'zustand'
import { type Question } from '../types'
import confetti from 'canvas-confetti'
import { persist } from 'zustand/middleware'

interface State {
  questions: Question[]
  currentQuestion: number
  fetchQuestions: (limit: number) => Promise<void>
  selectedAnswer: (questionId: number, answerIndex: number) => void
  goNextQuestion: () => void
  goPreviousQuestion: () => void
  reset: () => void
}

const useQuestionsStore = create<State>()(
  persist(
    (set, get) => ({
      questions: [],
      currentQuestion: 0,

      fetchQuestions: async (limit) => {
        const res = await fetch('http://127.0.0.1:5173/data.json')
        const data = await res.json()

        const questions = data.sort(() => Math.random() - 0.5).slice(0, limit)

        set((state) => ({
          ...state,
          questions
        }))
      },

      selectedAnswer: (questionId, answerIndex) => {
        const { questions, goNextQuestion } = get()

        //  to use the structureClone to clone the object
        const newQuestions = structuredClone(questions)

        //  we find the question index by comparing the question id vs question id by user
        const questionIndex = newQuestions.findIndex(
          (question) => question.id === questionId
        )

        //  we get the question information
        const questionInfo = newQuestions[questionIndex]

        //  we compare the correct answer vs the answer send by the user
        const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex
        if (isCorrectUserAnswer) confetti()
        setTimeout(() => {
          goNextQuestion()
        }, 1500)

        //  we update the question by changing the copy
        newQuestions[questionIndex] = {
          ...questionInfo,
          isCorrectUserAnswer,
          userSelectAnswer: answerIndex
        }

        // and finally update the state
        set((state) => ({
          ...state,
          questions: newQuestions
        }))
      },

      goNextQuestion: () => {
        const { currentQuestion, questions } = get()
        const nextQuestion = currentQuestion + 1

        if (nextQuestion < questions.length) {
          set({ currentQuestion: nextQuestion })
        }
      },

      goPreviousQuestion: () => {
        const { currentQuestion } = get()
        const previousQuestion = currentQuestion - 1

        if (previousQuestion >= 0) {
          set({ currentQuestion: previousQuestion })
        }
      },

      reset: () => {
        set({ questions: [], currentQuestion: 0 })
      }
    }),
    { name: 'questions' }
  )
)

export default useQuestionsStore

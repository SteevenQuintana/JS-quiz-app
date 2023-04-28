import useQuestionsStore from '../store/questions'

const useQuestionsData = () => {
  const questions = useQuestionsStore((state) => state.questions)
  let correctAnswers = 0
  let incorrectAnswers = 0
  let unansweredQuestions = 0

  questions.forEach((question) => {
    const { userSelectAnswer, correctAnswer } = question
    if (userSelectAnswer == null) unansweredQuestions++
    else if (userSelectAnswer === correctAnswer) correctAnswers++
    else incorrectAnswers++
  })

  return { correctAnswers, incorrectAnswers, unansweredQuestions }
}

export default useQuestionsData

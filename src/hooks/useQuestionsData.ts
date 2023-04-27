import useQuestionsStore from '../store/questions'

const useQuestionsData = () => {
  const questions = useQuestionsStore((state) => state.questions)
  let correctAnswers = 0
  let incorrectAnswers = 0
  let unanswersQuestions = 0

  questions.forEach((question) => {
    const { userSelectAnswer, correctAnswer } = question
    if (userSelectAnswer == null) unanswersQuestions++
    else if (userSelectAnswer === correctAnswer) correctAnswers++
    else incorrectAnswers++
  })

  return { correctAnswers, incorrectAnswers, unanswersQuestions }
}

export default useQuestionsData

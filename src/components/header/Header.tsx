import useQuestionsData from '../../hooks/useQuestionsData'

const Header = () => {
  const { correctAnswers, incorrectAnswers, unansweredQuestions } =
    useQuestionsData()
  return (
    <header>
      <strong>{`✅ ${correctAnswers} correct - ❌ ${incorrectAnswers} incorrect  - ❓ ${unansweredQuestions} unanswered`}</strong>
    </header>
  )
}

export default Header

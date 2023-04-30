import { Button } from '@mui/material'
import useQuestionsStore from '../../../store/questions'
import { LIMIT_QUESTIONS } from '../../../constants'
import useQuestionsData from '../../../hooks/useQuestionsData'

const Fotter = () => {
  const reset = useQuestionsStore((state) => state.reset)
  const fetchQuestions = useQuestionsStore((state) => state.fetchQuestions)
  const { correctAnswers, incorrectAnswers, unansweredQuestions } =
    useQuestionsData()

  return (
    <footer style={{ marginTop: '16px' }}>
      <strong>{`✅ ${correctAnswers} correct - ❌ ${incorrectAnswers} incorrect  - ❓ ${unansweredQuestions} unanswered`}</strong>
      <div style={{ marginTop: '16px' }}>
        <Button
          onClick={() => {
            reset()
            fetchQuestions(LIMIT_QUESTIONS)
          }}
        >
          Reset game
        </Button>
      </div>
    </footer>
  )
}

export default Fotter

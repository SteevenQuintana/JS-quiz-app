import useQuestionsData from '../../hooks/useQuestionsData'
import { Button } from '@mui/material'
import useQuestionsStore from '../../store/questions'

const Fotter = () => {
  const reset = useQuestionsStore((state) => state.reset)
  const { correctAnswers, incorrectAnswers, unanswersQuestions } =
    useQuestionsData()
  return (
    <footer style={{ marginTop: '16px' }}>
      <strong>{`✅ ${correctAnswers} correctas - ❌ ${incorrectAnswers} incorrectas - ❓ ${unanswersQuestions} sin responder`}</strong>
      <div style={{ marginTop: '16px' }}>
        <Button onClick={reset}>Resetar juego</Button>
      </div>
    </footer>
  )
}

export default Fotter

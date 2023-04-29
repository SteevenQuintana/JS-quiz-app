import { Button } from '@mui/material'
import useQuestionsStore from '../../../store/questions'
import { LIMIT_QUESTIONS } from '../../../constants'

const Fotter = () => {
  const reset = useQuestionsStore((state) => state.reset)
  const fetchQuestions = useQuestionsStore((state) => state.fetchQuestions)

  return (
    <footer style={{ marginTop: '16px' }}>
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

import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined
} from '@mui/icons-material'
import { Card, IconButton, Stack } from '@mui/material'
import useQuestionsStore from '../../../store/questions'

const Indicator = () => {
  const questions = useQuestionsStore((state) => state.questions)
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion)

  const goNextQuestion = useQuestionsStore((state) => state.goNextQuestion)
  const goPreviousQuestion = useQuestionsStore(
    (state) => state.goPreviousQuestion
  )
  return (
    <Stack
      direction='row'
      gap={1}
      alignItems='center'
      justifyContent='center'
      sx={{ position: 'absolute', right: '8px', top: '-28px', zIndex: 10 }}
    >
      <Card variant='outlined'>
        <IconButton
          onClick={goPreviousQuestion}
          disabled={currentQuestion === 0}
        >
          <ArrowBackIosNewOutlined />
        </IconButton>
        {currentQuestion + 1}/{questions.length}
        <IconButton
          onClick={goNextQuestion}
          disabled={currentQuestion === questions.length - 1}
        >
          <ArrowForwardIosOutlined />
        </IconButton>
      </Card>
    </Stack>
  )
}

export default Indicator

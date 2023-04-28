import {
  Card,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography
} from '@mui/material'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNightBright } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import useQuestionsStore from '../../store/questions'
import { type Question as QuestionType } from '../../types'
import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined
} from '@mui/icons-material'
import Footer from '../../components/footer/Footer'

interface QuestionProps {
  info: QuestionType
}

const Question: React.FC<QuestionProps> = ({ info }) => {
  const selectedAnswer = useQuestionsStore((state) => state.selectedAnswer)
  const handleAnswer = (index: number) => () => selectedAnswer(info.id, index)

  const getBackgroundColor = (index: number) => {
    const { correctAnswer, userSelectAnswer } = info

    if (userSelectAnswer == null) return 'transparent'
    if (index !== correctAnswer && index !== userSelectAnswer)
      // eslint-disable-next-line curly
      return 'transparent'
    if (index === correctAnswer) return 'green'
    if (index === userSelectAnswer) return 'red'
    return 'transparent'
  }

  return (
    <Card variant='outlined' sx={{ p: 2, textAlign: 'left', marginTop: 0.5 }}>
      <Typography variant='h5'>{info.question}</Typography>

      {info.code != null && (
        <SyntaxHighlighter language='javascript' style={tomorrowNightBright}>
          {info.code}
        </SyntaxHighlighter>
      )}

      <List sx={{ bgcolor: '#333' }} disablePadding>
        {info.answers.map((answer, index) => (
          <ListItem key={index} disablePadding divider>
            <ListItemButton
              disabled={info.userSelectAnswer != null}
              onClick={handleAnswer(index)}
              sx={{ backgroundColor: getBackgroundColor(index) }}
            >
              <ListItemText sx={{ textAlign: 'center' }}>{answer}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  )
}

const Game = () => {
  const questions = useQuestionsStore((state) => state.questions)
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion)
  const goNextQuestion = useQuestionsStore((state) => state.goNextQuestion)
  const goPreviousQuestion = useQuestionsStore(
    (state) => state.goPreviousQuestion
  )

  const questionInfo = questions[currentQuestion]

  return (
    <>
      <Stack
        direction='row'
        gap={2}
        alignItems='center'
        justifyContent='center'
      >
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
      </Stack>
      <Question info={questionInfo} />
      <Footer />
    </>
  )
}

export default Game

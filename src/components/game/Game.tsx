import {
  Card,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography
} from '@mui/material'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNightBright } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import useQuestionsStore from '../../store/questions'
import { type Question as QuestionType } from '../../types'

import Footer from './footer/Footer'
import Indicator from './indicator/Indicator'

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
    <Card variant='outlined' sx={{ p: 1, textAlign: 'left', marginTop: 0.5 }}>
      <Typography variant='h6'>{info.question}</Typography>

      {info.code != null && (
        <SyntaxHighlighter language='javascript' style={tomorrowNightBright}>
          {info.code}
        </SyntaxHighlighter>
      )}

      <List sx={{ bgcolor: '#333', marginTop: 1 }} disablePadding>
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

  const questionInfo = questions[currentQuestion]

  return (
    <div
      style={{
        position: 'relative',
        marginTop: '28px',
        minHeight: '400px'
      }}
    >
      <Indicator />
      <Question info={questionInfo} />
      <Footer />
    </div>
  )
}

export default Game

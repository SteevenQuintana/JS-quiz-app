import { Container, Stack, Typography } from '@mui/material'
import './App.css'
import JavaScriptLogo from './components/icons/JavaScriptLogo'
import Start from './components/Start'
import useQuestionsStore from './store/questions'
import Game from './components/game/Game'

function App() {
  const questions = useQuestionsStore((state) => state.questions)
  console.log(questions)
  return (
    <main>
      <Container maxWidth='sm'>
        <Stack
          direction='row'
          gap={2}
          justifyContent='center'
          alignItems='center'
          marginBottom={1}
        >
          <JavaScriptLogo />
          <Typography variant='h2' component='h1'>
            JavaScript Quiz
          </Typography>
        </Stack>

        {questions.length === 0 && <Start />}
        {questions.length > 0 && <Game />}
      </Container>
    </main>
  )
}

export default App

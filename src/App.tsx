import { Container, Stack } from '@mui/material'
import useQuestionsStore from './store/questions'
import Game from './components/game/Game'
import Categories from './components/navbar/Categories'

function App() {
  const questions = useQuestionsStore((state) => state.questions)
  const content = useQuestionsStore((state) => state.content)

  return (
    <main className='main-content'>
      <Container className='secondary-content'>
        <Categories />
        <Stack sx={{ overflowY: 'auto', height: '86%' }}>
          {content.map((topic) => (
            <div key={topic.title}>
              <h1>{topic.title}</h1>
              <p>{topic.content}</p>
            </div>
          ))}
        </Stack>
      </Container>

      <Container sx={{ textAlign: 'center', overflowY: 'auto', height: '94%' }}>
        {questions.length > 0 && <Game />}
      </Container>
    </main>
  )
}

export default App

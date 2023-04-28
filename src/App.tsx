import { Container, Stack, Typography } from '@mui/material'
import JavaScriptLogo from './components/icons/JavaScriptLogo'
import useQuestionsStore from './store/questions'
import Game from './components/game/Game'
import Categories from './components/navbar/Categories'

function App() {
  const questions = useQuestionsStore((state) => state.questions)
  const content = useQuestionsStore((state) => state.content)

  return (
    <main>
      <Stack
        direction='row'
        gap={2}
        justifyContent='center'
        alignItems='center'
        marginBottom={1}
      >
        <JavaScriptLogo />
        <Typography variant='h3' component='h2'>
          Quiz
        </Typography>
      </Stack>
      <section style={{ display: 'flex' }}>
        <Container maxWidth='md'>
          <Categories />
          <Stack
            direction='column'
            alignItems='center'
            sx={{ overflowY: 'auto', maxHeight: '500px' }}
          >
            {content.map((topic) => (
              <div key={topic.title}>
                <h1>{topic.title}</h1>
                <p>{topic.content}</p>
              </div>
            ))}
          </Stack>
        </Container>
        <hr />
        <Container
          maxWidth='sm'
          sx={{ textAlign: 'center', overflowY: 'auto', maxHeight: '560px' }}
        >
          {questions.length > 0 && <Game />}
        </Container>
      </section>
    </main>
  )
}

export default App

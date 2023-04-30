import { useState } from 'react'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import { LIMIT_QUESTIONS, SUPPORTED_TOPICS } from '../../constants'
import useQuestionsStore from '../../store/questions'
import { type Topycs } from '../../types'
import Logo from './Logo'

const categories = Object.entries(SUPPORTED_TOPICS)

const Categories = () => {
  const changeTopic = useQuestionsStore((state) => state.changeTopic)
  const fetchQuestions = useQuestionsStore((state) => state.fetchQuestions)
  const topic = useQuestionsStore((state) => state.topic)
  const initialValue = categories.findIndex(([key]) => key === topic)
  const [value, setValue] = useState(initialValue)

  return (
    <div className='categories'>
      <Logo />
      <BottomNavigation
        showLabels
        value={value}
        sx={{ display: 'flex', maxWidth: '460px', width: '100%' }}
      >
        {categories.map(([key, label], index) => (
          <BottomNavigationAction
            key={key}
            label={label}
            onClick={() => {
              changeTopic(key as Topycs)
              fetchQuestions(LIMIT_QUESTIONS)
              setValue(index)
            }}
          />
        ))}
      </BottomNavigation>
    </div>
  )
}

export default Categories

import { useState } from 'react'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import { LIMIT_QUESTIONS, SUPPORTED_TOPICS } from '../../constants'
import useQuestionsStore from '../../store/questions'
import { type Topycs } from '../../types'

const Categories = () => {
  const changeTopic = useQuestionsStore((state) => state.changeTopic)
  const fetchQuestions = useQuestionsStore((state) => state.fetchQuestions)
  const [value, setValue] = useState(0)

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(_, newValue) => {
        setValue(newValue)
        fetchQuestions(LIMIT_QUESTIONS)
      }}
    >
      {Object.entries(SUPPORTED_TOPICS).map(([key, label]) => (
        <BottomNavigationAction
          key={key}
          label={label}
          onClick={changeTopic(key as Topycs)}
        />
      ))}
    </BottomNavigation>
  )
}

export default Categories

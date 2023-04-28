import { Content } from './store/questions'

export const SUPPORTED_TOPICS = {
  general: 'General topics',
  hoisting: 'Hoisting',
  asynchronous: 'Asynchronous',
  this: 'This keyword'
}

export const LIMIT_QUESTIONS = 10

export const generalContent: Content[] = [
  {
    title: 'Welcome welcome!',
    content:
      'JavaScript can be a challenging language to comprehend, which can make learning it a daunting task. However, I believe that playing this game will provide you with the opportunity to enhance your understanding and practice your skills, enabling you to attain the level of proficiency you desire.'
  }
]

export const hoistingContent: Content[] = [
  {
    title: 'hoisting',
    content: 'this is a hoisting topic'
  }
]

export const thisContent: Content[] = [
  {
    title: 'this',
    content: 'this is a this topic'
  }
]

export const asynchronousContent: Content[] = [
  {
    title: 'asynchronous',
    content: 'this is a asynchronous topic'
  },
  {
    title: 'asynchronous1',
    content: 'this is a asynchronous topic'
  },
  {
    title: 'asynchronous2',
    content: 'this is a asynchronous topic'
  },
  {
    title: 'asynchronous3',
    content: 'this is a asynchronous topic'
  }
]

export const topicContents = {
  hoisting: hoistingContent,
  this: thisContent,
  general: generalContent,
  asynchronous: asynchronousContent
}

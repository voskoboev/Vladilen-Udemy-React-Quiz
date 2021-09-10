import React from 'react'
import { Link } from 'react-router-dom'
import classes from './FinishedQuiz.module.css'
import Button from '../UI/Button/Button'

const FinishedQuiz = props => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === 'success') {
      total++
    }

    return total
  }, 0)

  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        {
          props.quiz.map((quizItem, index) => {
            const cls = [
              'fa',
              props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check'
            ]

            return (
              <li key={index}>
                <strong>
                  {index + 1}&nbsp;
                </strong>
                {quizItem.question}
                <i className={cls.join(' ')} />
              </li>
            )
          })
        }
      </ul>
      <p>
        {successCount} from {props.quiz.length}
      </p>
      <div>
        <Button
          onClick={props.onRetry}
          type="primary"
        >
          Repeat
        </Button>
        <Link to="/">
          <Button
            onClick={props.onRetry}
            type="success"
          >
            Transfer to test list
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default FinishedQuiz

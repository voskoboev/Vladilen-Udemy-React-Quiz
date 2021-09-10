import React from 'react'
import AnswerList from '../AnswerList/AnswerList'
import classes from './ActiveQuiz.module.css'

const ActiveQuiz = props => (
  <div className={classes.ActiveQuiz}>
    <p className={classes.Question}>
      <span>
        <strong>
          {props.answerNumber}.
        </strong>
        &nbsp;
        {props.question}
      </span>
      <small>
        {props.answerNumber} of {props.quizLength}
      </small>
    </p>
    <AnswerList
      answers={props.answers}
      onAnswerClick={props.onAnswerClick}
      state={props.state}
    />
  </div>
)

export default ActiveQuiz

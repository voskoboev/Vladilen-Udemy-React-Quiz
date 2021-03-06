import React from 'react'
import classes from './Input.module.css'

function isInvalid({ valid, touched, shouldValidate }) {
  return !valid && shouldValidate && touched
}

const Input = props => {
  const cls = [classes.Input],
    inputType = props.type || 'text',
    htmlFor = `${inputType}-${Math.random()}`

  if (isInvalid(props)) {
    cls.push(classes.invalid)
  }

  return (
    <div className={cls.join(' ')}>
      <label htmlFor={htmlFor}>
        {props.label}
      </label>
      <input
        type={inputType}
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
      />
      {
        isInvalid(props)
          ? <span>{props.errorMessage || 'Insert valid value'}</span>
          : null
      }
    </div>
  )
}

export default Input

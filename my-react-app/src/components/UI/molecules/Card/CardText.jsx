import React from 'react'
import clsx from 'clsx'

export default function CardText(props) {
  return (
    <div {...props} className={clsx(props.className, "")}>
      <h1 className="text-2xl text-blue-500 leading-snug font-bold my-4">{props.title}</h1>
      <h5 className="text-xl my-4">{props.body}</h5>
    </div>
  )
}

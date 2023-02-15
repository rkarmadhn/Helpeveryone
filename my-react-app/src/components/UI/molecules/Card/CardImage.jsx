import clsx from 'clsx'
import React from 'react'

export default function CardImage(props) {
  return (
    <div {...props} className={clsx(props.className,"")}>
        <img src={props.image} alt="" {...props}/>
      </div>
  )
}

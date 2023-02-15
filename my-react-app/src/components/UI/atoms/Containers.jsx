import clsx from 'clsx'
import React from 'react'

export default function Containers(props) {
  return (
    <div {...props} className={clsx(props.className,'container-md sm:px-8 px-4')}>
    {props.children}
    </div>
  )
}

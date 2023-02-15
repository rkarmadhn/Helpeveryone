import clsx from 'clsx'
import React from 'react'

export default function FlexItemsCenter(props) {
  return (
    <div {...props} className={clsx(props.className,'flex items-center')}>{props.children}</div>
  )
}

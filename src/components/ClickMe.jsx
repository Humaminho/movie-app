import React from 'react'

export default function ClickMe({onClick}) {
  return (
    <button onClick={onClick}>
      Clicked
    </button>
  )
}

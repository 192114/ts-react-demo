import React from 'react'
import './index.less'

interface IProps {
  a: number
  b: number
}

function ComputedOne(props: IProps) {
  const { a, b } = props

  return <p className='computed-two'>{`Hi, I'm computed one, my sum is ${a + b}.`}</p>
}

export default ComputedOne

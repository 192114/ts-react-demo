import React from 'react'
import './index.less'

interface IProps {
  a: number
  b: number
}

function ComputedTwo(props: IProps) {
  const { a, b } = props

  return <p className='computed-one'>{`Hi, I'm computed one, my sum is ${a + b}.`}</p>
}

export default ComputedTwo

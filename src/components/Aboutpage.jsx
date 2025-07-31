import React from 'react'
import About from '../shared/components/About'
import HelmetComponent from './HelmetComponent'

function Aboutpage() {
  return (
    <div>
      <HelmetComponent title={'About us - International Conference on Human-Computer Interaction and Emerging Technologies'} canonical={'https://icngths.com/about'} />
      <About/>
      </div>
  )
}

export default Aboutpage
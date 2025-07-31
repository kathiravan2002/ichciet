import React from 'react'
import Home from '../shared/components/Home'
import HelmetComponent from './HelmetComponent'

function Homepage() {
  return (
    <div>
      <HelmetComponent title={'Home - International Conference on Human-Computer Interaction and Emerging Technologies'} canonical={'https://icngths.com/'} />
      <Home />
    </div>
  )
}

export default Homepage
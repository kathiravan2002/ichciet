import React from 'react'
import Editorial from '../shared/components/Editorial'
import HelmetComponent from './HelmetComponent'

function Editorialpage() {
  return (
    <div>
      <HelmetComponent title={'Editorial Board - International Conference on Human-Computer Interaction and Emerging Technologies'} canonical={'https://icngths.com/editorial-board'} />
      <Editorial />
    </div>
  )
}

export default Editorialpage
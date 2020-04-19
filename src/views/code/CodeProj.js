import React from 'react'

import {useParams} from 'react-router-dom'


const CodeProj = () => {
  const projName = useParams()

  return (
    <div>
      {projName}
    </div>
  )
}
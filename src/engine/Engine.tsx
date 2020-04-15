import React from 'react'

import classNames from 'classnames'

const container = {
  position: 'relative',
  backgroundColor: 'purple',
  height: '100vh',
  width: '100vh'
}

const character = {
  position: 'absolute',
  display: 'block',
  height: '100px',
  width: '100px',
  left: '0',
  backgroundColor: 'black'
}


const Engine: React.FC = () => {
  return (
    <div styles={container}>
      <span/>
    </div>
  )
}


export default (Engine)
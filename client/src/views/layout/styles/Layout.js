const styles = {
  '@keyframes load': {
    '0%': {
      transform: 'rotate3d(0)'
    },
    '100%': {
      transform: 'rotate3d(3, 2, 1, 43deg)'
    }
  },
  'route:empty': {
    background: 'none',
  },
  root: {
    maxWidth: '1800px',
    float: 'none',
    margin: '0 auto'
  },
  page: {
    padding: '2em'
  },
  route: {
    backgroundColor: '#f5f5f5',
    borderRadius: '1em',
    animation: 'loading .5s'
  },
}

export default styles
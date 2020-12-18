import React, {useState} from 'react'
import Selector from './selector.util'
import Rater from '../../src/index'

const App = () => {
  const [iconValue, setIconValue] = useState(5)
  const [value] = useState(100)
  return (
    <div {...{className: 'app'}}>
      <Selector {...{
          setIconValue,
          value
      }} />
      <h2>Value : {`${value}`}</h2>
      <h2>Iconvalue: {`${iconValue}`}</h2>
      <Rater {...{
          iconValue,
          value
      }} />
    </div>
  )
}

export default App
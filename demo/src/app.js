import React, {useState} from 'react'
import Selector from './selector.util'
import Rater from '../../lib/index'

const App = () => {
  const [iconValue, setIconValue] = useState(5)
  const [value] = useState(100)
  return (
    <div {...{className: 'app'}}>
      <Selector setIconValue={setIconValue} value={value} />
      <h2>Value : {`${value}`}</h2>
      <h2>Iconvalue: {`${iconValue}`}</h2>
      <Rater iconValue={iconValue} value={value} />
    </div>
  )
}

export default App
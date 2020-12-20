import React, { useState } from 'react'
import Selector from './selector.util'
import Rater from '../../src/index'

const App = () => {
	const [iconCount, seticonCount] = useState(5)
	const [value] = useState(100)
	return (
		<div {...{ className: 'app' }}>
			<Selector
				{...{
					seticonCount,
					value,
				}}
			/>
			<h2>Value : {`${value}`}</h2>
			<h2>iconCount: {`${iconCount}`}</h2>
			<Rater
				{...{
					iconCount,
					value,
				}}
			/>
		</div>
	)
}

export default App

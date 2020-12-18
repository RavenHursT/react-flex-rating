import React from 'react'

const Selector = ({ setIconValue, value }) => {
	return (
		<div>
			<h1> Select Amount of Icons </h1>
			<select
				onChange={(e) => {
					setIconValue(Number(e.target.value))
				}}
			>
				{Array.from(new Array(value), (value, index) => index + 1).map(
					(value) => (
						<option key={value} value={value}>
							{value}
						</option>
					)
				)}
			</select>
		</div>
	)
}

export default Selector

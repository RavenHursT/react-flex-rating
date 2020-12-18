import React, { useState } from 'react'
import { FaStarHalf } from 'react-icons/fa'

import './styles/Rater.css'

const Rater = ({ iconCount }) => {
	const [rating, setRating] = useState(null)
	const [hover, setHover] = useState(null)
	return (
		<div>
			{[...Array(iconCount), ...Array(iconCount)].map((icon, i) => {
				const value = (i + 1) / 2

				return (
					<label>
						<input
							type='radio'
							name='rating'
							value={value}
							onClick={() => {
								console.log(`value => `, value)
								return setRating(value)
							}}
						/>
						<div className='star-container'>
							<FaStarHalf
								className={i % 2 ? 'star-left' : 'star'}
								color={value <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
								onMouseEnter={() => setHover(value)}
								onMouseLeave={() => setHover(null)}
							/>
						</div>
					</label>
				)
			})}
		</div>
	)
}

export default Rater

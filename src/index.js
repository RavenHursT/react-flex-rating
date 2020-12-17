import React, {useState} from 'react'
import {FaStarHalf} from 'react-icons/fa'

import './styles/Rater.css'

const Rater = ({iconValue}) => {
	const [rating, setRating] = useState(null)
	const [hover, setHover] = useState(null)

	return (
		<div>
			{[...Array(iconValue), ...Array(iconValue)].map((icon, i) => {
				const value = i + 1

				return (
					<label>
						<input
							type='radio'
							name='rating'
							value={value}
							onClick={() => setRating(value)}
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

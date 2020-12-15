import React, {useState} from 'react';
import Rater from './util/Rater.util';
import Selector from './util/Selector.util';
import './styles/App.css';

function App(props) {
	const [iconValue, setIconValue] = useState(5);
	const [value] = useState(100);
	return (
		<div className='App'>
			<Selector setIconValue={setIconValue} value={value} />
			<Rater iconValue={iconValue} value={value} />
		</div>
	);
}

export default App;

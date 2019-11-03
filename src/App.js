import React from 'react';
import './App.css';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<p>Exchage rate: $1 = £1</p>

				<div className='itemWrapper'>
					<select>
						<option>GBP</option>
						<option>EUR</option>
						<option>USD</option>
					</select>

					<div>
						<input type='number' step='0.1' placeholder='0.00' />
					</div>
				</div>

				<div className='itemWrapper'>
					<select>
						<option>GBP</option>
						<option>EUR</option>
						<option>USD</option>
					</select>

					<div>
						<span>0.00</span>
					</div>
				</div>

				<button>Exchange</button>
			</header>
		</div>
	);
}

export default App;

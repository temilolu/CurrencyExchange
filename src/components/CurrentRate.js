import React from 'react';

const CurrentRate = ({ from, to, amount, rate }) => {
	const currentExchange = (rate[to] * 1).toFixed(2);

	if (!currentExchange) {
		return <div className='font-weight-bold fsizes my-3'>Loading...</div>;
	}

	return (
		<div className='my-3'>
			<p className='font-weight-bold fsizes'>
				{amount} {from} = {currentExchange} {to}
			</p>
		</div>
	);
};

export default CurrentRate;

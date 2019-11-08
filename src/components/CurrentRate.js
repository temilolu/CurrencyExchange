import React from 'react';

const CurrentRate = ({ from, to, amount, result }) => {
	return (
		<div className='my-3'>
			<p className='font-weight-bold fsizes'>
				{amount} {from} = {result} {to}
			</p>
		</div>
	);
};

export default CurrentRate;

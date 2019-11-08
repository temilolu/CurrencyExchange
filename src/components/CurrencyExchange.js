import React from 'react';

const CurrencyExchange = ({ base, convertTo, handleInput, disable }) => {
	return (
		<React.Fragment>
			<form>
				<div className='input-group border rounded p-3'>
					<input
						type='number'
						disabled={disable}
						className='form-control-plaintext'
						value={base}
						onChange={handleInput}
					/>

					<div className='input-group-addon my-3 font-weight-light fsizes'>
						{convertTo}
					</div>
				</div>
			</form>
		</React.Fragment>
	);
};

export default CurrencyExchange;

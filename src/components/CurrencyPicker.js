import React from 'react';

const CurrencyPicker = ({
	currenyOptions,
	name,
	currencyValue,
	selectCurrency
}) => {
	return (
		<React.Fragment>
			<select
				className='custom-select custom-select-sm mb-3'
				name={name}
				onChange={selectCurrency}
				value={currencyValue}>
				{currenyOptions}
			</select>
		</React.Fragment>
	);
};

export default CurrencyPicker;

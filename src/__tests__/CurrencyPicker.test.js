import React from 'react';
import CurrencyPicker from '../components/CurrencyPicker';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

describe('<CurrencyPicker /> spec', () => {
	it('Should matches snapshot', () => {
		const { asFragment } = render(<CurrencyPicker />);
		expect(asFragment()).toMatchSnapshot();
	});
});

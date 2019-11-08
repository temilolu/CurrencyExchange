import React from 'react';
import CurrencyExchange from '../components/CurrencyExchange';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

describe('<CurrencyExchange /> spec', () => {
	it('Should matches snapshot', () => {
		const { asFragment } = render(<CurrencyExchange />);
		expect(asFragment()).toMatchSnapshot();
	});
});

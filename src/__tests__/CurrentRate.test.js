import React from 'react';
import CurrentRate from '../components/CurrentRate';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

describe('<CurrentRate /> spec', () => {
	it('Should matches snapshot', () => {
		const { asFragment } = render(<CurrentRate from='USD' />);
		expect(asFragment()).toMatchSnapshot();
	});
});

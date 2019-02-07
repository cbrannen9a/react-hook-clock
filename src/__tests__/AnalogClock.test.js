import React from 'react';
import ReactDOM from 'react-dom';
import AnalogClock from '../components/elements/AnalogClock';

describe('AnalogClock', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<AnalogClock timezone={{}} />, div);
	});
});
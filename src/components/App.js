import React, { useState } from 'react';

import AnalogClock from './elements/AnalogClock';
import Clock from './elements/Clock';

import Dropdown from './elements/Dropdown';
import { timezones } from '../constants/timezones';

import './App.css';

export default () => {
	const [timezone, setTimezone] = useState({ label: 'London', value: 'Europe/London' });

	return (
		<div className='App'>
			<Clock timezone={timezone} />
			<AnalogClock timezone={timezone} />
			<Dropdown
				items={timezones}
				initialValue={timezone}
				handleSelected={setTimezone} />
		</div>
	);
};
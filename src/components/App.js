import React, { useState } from 'react';

import Clock from './elements/Clock';

import './App.css';
import Dropdown from './elements/Dropdown';
import { timezones } from '../constants/timezones';

export default () => {
	const [timezone, setTimezone] = useState({ label: 'London', value: 'Europe/London' });

	return (
		<div className='App'>
			<Clock timezone={timezone} />
			<Dropdown
				items={timezones}
				initialValue={timezone}
				handleSelected={setTimezone} />
		</div>
	);
};
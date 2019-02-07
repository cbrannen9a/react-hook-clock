import React from 'react';
import PropTypes from 'prop-types';

import { useTicker } from '../../hooks';

const Clock = ({ timezone }) => {
	const date = useTicker(timezone);

	return (
		<div>
			<div>{date.format('LTS')}</div>
		</div>
	);
};

Clock.propTypes = {
	timezone: PropTypes.object.isRequired
};

export default Clock;
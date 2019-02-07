import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown, faCheck } from '@fortawesome/free-solid-svg-icons';

import './Dropdown.css';

const Dropdown = ({ items, initialValue, handleSelected }) => {
	const [open, toggleOpen] = useState(false);
	const [selected, setSelected] = useState(initialValue);

	const handleClick = (item) => {
		setSelected(item);
		toggleOpen(!open);
		handleSelected(item);
	};

	useEffect(() => {
		if (open) {
			const element = document.getElementById(selected.value);
			element.scrollIntoView({ behavior: 'auto' });
		}
	});

	return (
		<div className='dd-container'>
			<div className='dd-wrapper'>
				<div className='dd-header' onClick={() => toggleOpen(!open)}>
					<div className='dd-header-title'>
						{selected.label}
					</div>
					<div className='dd-header-icon'>
						{open
							? <FontAwesomeIcon icon={faAngleUp} />
							: <FontAwesomeIcon icon={faAngleDown} />}
					</div>
				</div>
				{open && <ul className='dd-list'>
					{items.map(item => (
						<div
							className='dd-list-item'
							key={item.value}
							id={item.value}
							onClick={() => handleClick(item)}>
							{item.label} {item.value === selected.value
								? <FontAwesomeIcon icon={faCheck} />
								: null}
						</div>
					))}
				</ul>}
			</div>
		</div>
	);
};

Dropdown.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		label: PropTypes.string.isRequired,
		value: PropTypes.string.isRequired
	})).isRequired,
	initialValue: PropTypes.object.isRequired,
	handleSelected: PropTypes.func.isRequired
};

export default Dropdown;
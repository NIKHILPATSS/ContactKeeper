import React, { useContext, useRef, useEffect } from 'react';
import contactContext from '../../context/contacts/contactContext';

const ContactFilter = () => {
	const ContactContext = useContext(contactContext);
	const { filterContact, clearFilter, filtered } = ContactContext;

	const text = useRef('');

	useEffect(() => {
		if (filtered === null) {
			text.current.value = '';
		}
	});

	const handlerChange = (e) => {
		if (text.current.value !== '') {
			filterContact(e.target.value);
		} else {
			clearFilter();
		}
	};

	return (
		<form>
			<input
				type='text'
				ref={text}
				placeholder='Filter Contacts ...'
				onChange={handlerChange}
			/>
		</form>
	);
};

export default ContactFilter;

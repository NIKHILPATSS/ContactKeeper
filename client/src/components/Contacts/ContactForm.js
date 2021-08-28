import React, { useState, useContext, useEffect } from 'react';
import contactContext from '../../context/contacts/contactContext';

const ContactForm = () => {
	const [contact, setContact] = useState({
		name: '',
		email: '',
		phone: '',
		type: 'personal',
	});

	const ContactContext = useContext(contactContext);

	const { addContact, current, clearCurrent, updateContact } = ContactContext;

	useEffect(() => {
		if (current !== null) {
			setContact(current);
		} else {
			setContact({
				name: '',
				email: '',
				phone: '',
				type: 'personal',
			});
		}
	}, [ContactContext, current]);

	const { name, email, phone, type } = contact;

	const handleChange = (e) => {
		setContact({ ...contact, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (current === null) {
			addContact(contact);
		} else {
			updateContact(contact);
			clearCurrent();
		}

		setContact({
			name: '',
			email: '',
			phone: '',
			type: 'personal',
		});
	};

	const handleClear = () => {
		clearCurrent();
	};

	return (
		<form onSubmit={handleSubmit}>
			{current ? (
				<h2 className='text-primary'>Edit Contact</h2>
			) : (
				<h2 className='text-primary'>Add Contact</h2>
			)}
			<input
				type='text'
				placeholder='Name'
				name='name'
				value={name}
				onChange={handleChange}
			/>
			<input
				type='email'
				placeholder='Email'
				name='email'
				value={email}
				onChange={handleChange}
			/>
			<input
				type='text'
				placeholder='Phone'
				name='phone'
				value={phone}
				onChange={handleChange}
			/>
			<h5>Contact Type</h5>
			<input
				type='radio'
				name='type'
				value='personal'
				checked={type === 'personal'}
				onClick={handleChange}
			/>
			Personal{' '}
			<input
				type='radio'
				name='type'
				value='professional'
				checked={type === 'professional'}
				onClick={handleChange}
			/>
			Professional{' '}
			<div>
				<input
					type='submit'
					value={current ? 'Update Contact' : 'Add Contact'}
					className='btn btn-primary btn-block'
				/>
			</div>
			{current && (
				<div>
					<button onClick={handleClear} className='btn btn-light btn-block'>
						Clear
					</button>
				</div>
			)}
		</form>
	);
};

export default ContactForm;

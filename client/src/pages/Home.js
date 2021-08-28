import React, { useContext, useEffect } from 'react';
import ContactFilter from '../components/Contacts/ContactFilter';
import ContactForm from '../components/Contacts/ContactForm';
import Contacts from '../components/Contacts/Contacts';
import authContext from '../context/auth/authContext';

const Home = () => {
	const { loadUser } = useContext(authContext);

	useEffect(() => {
		loadUser();
		//eslint-disable-next-line
	}, []);

	return (
		<div className='grid-2'>
			<div>
				<ContactForm />
			</div>
			<div>
				<ContactFilter />
				<Contacts />
			</div>
		</div>
	);
};

export default Home;

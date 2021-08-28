import React, { useContext, Fragment, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import contactContext from '../../context/contacts/contactContext';
import Spinner from '../Layout/Spinner';
import ContactItem from './ContactItem';

const Contacts = () => {
	const ContactContext = useContext(contactContext);

	const { contacts, filtered, getContacts, loading } = ContactContext;

	useEffect(() => {
		getContacts();
		//eslint-disable-next-line
	}, []);

	if (contacts !== null && contacts.length === 0 && !loading) {
		return <h4>Please Add a Contact</h4>;
	}

	return (
		<Fragment>
			{contacts !== null && !loading ? (
				<TransitionGroup>
					{filtered !== null
						? filtered.map((contact) => (
								<CSSTransition
									key={contact._id}
									timeout={500}
									classNames='item'
								>
									<ContactItem contact={contact} />
								</CSSTransition>
						  ))
						: contacts.map((contact) => (
								<CSSTransition
									key={contact._id}
									timeout={500}
									classNames='item'
								>
									<ContactItem contact={contact} />
								</CSSTransition>
						  ))}
				</TransitionGroup>
			) : (
				<Spinner />
			)}
		</Fragment>
	);
};

export default Contacts;

import React, { useState, useContext, useEffect } from 'react';

import alertContext from '../context/alert/alertContext';
import authContext from '../context/auth/authContext';

const Register = ({ history }) => {
	const AlertContext = useContext(alertContext);
	const AuthContext = useContext(authContext);

	const { setAlert } = AlertContext;
	const { register, error, clearErrors, isAuthenticated } = AuthContext;

	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	useEffect(() => {
		if (isAuthenticated) {
			history.push('/');
		}

		if (error === 'User already exists') {
			setAlert(error, 'danger');
			clearErrors();
		}
		//eslint-disable-next-line
	}, [error, history, isAuthenticated]);

	const { name, email, password, password2 } = user;

	const handlerChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const handlerSubmit = (e) => {
		e.preventDefault();
		if (name === '' || email === '' || password === '') {
			setAlert('Please Enter all fields', 'danger');
		} else if (password !== password2) {
			setAlert('Passwords do not match', 'danger');
		} else {
			register({
				name,
				email,
				password,
			});
		}
	};

	return (
		<div className='form-container'>
			<h1>
				Account <span className='text-primary'>Register</span>
			</h1>
			<form onSubmit={handlerSubmit}>
				<div className='form-group'>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						name='name'
						balue={name}
						onChange={handlerChange}
						required
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						name='email'
						balue={email}
						onChange={handlerChange}
						required
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						name='password'
						balue={password}
						onChange={handlerChange}
						required
						minLength='6'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='password2'>Confirm Password</label>
					<input
						type='password'
						name='password2'
						balue={password2}
						onChange={handlerChange}
						required
					/>
				</div>
				<input
					type='submit'
					value='Register'
					className='btn btn-primary btn-block'
				/>
			</form>
		</div>
	);
};

export default Register;

import React, { useState, useContext, useEffect } from 'react';

import alertContext from '../context/alert/alertContext';
import authContext from '../context/auth/authContext';

const Login = ({ history }) => {
	const AlertContext = useContext(alertContext);
	const AuthContext = useContext(authContext);

	const { setAlert } = AlertContext;
	const { login, error, clearErrors, isAuthenticated } = AuthContext;

	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	useEffect(() => {
		if (isAuthenticated) {
			history.push('/');
		}

		if (error === 'Invalid Credentials') {
			setAlert(error, 'danger');
			clearErrors();
		}
		//eslint-disable-next-line
	}, [error, history, isAuthenticated]);

	const { email, password } = user;

	const handlerChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const handlerSubmit = (e) => {
		e.preventDefault();
		if (email === '' || password === '') {
			setAlert('Please Enter all fields', 'danger');
		} else {
			login({
				email,
				password,
			});
		}
	};

	return (
		<div className='form-container'>
			<h1>
				Account <span className='text-primary'>Login</span>
			</h1>
			<form onSubmit={handlerSubmit}>
				<div className='form-group'>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						name='email'
						balue={email}
						onChange={handlerChange}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						name='password'
						balue={password}
						onChange={handlerChange}
					/>
				</div>

				<input
					type='submit'
					value='Login'
					className='btn btn-primary btn-block'
				/>
			</form>
		</div>
	);
};

export default Login;

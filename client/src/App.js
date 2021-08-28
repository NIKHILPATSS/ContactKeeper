import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import ContactState from './context/contacts/ContactState';
import AuthState from './context/auth/AuthState';
import Register from './pages/Register';
import Login from './pages/Login';
import AlertState from './context/alert/AlertState';
import Alert from './components/Layout/Alert';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/Routing/PrivateRoute';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	return (
		<AlertState>
			<AuthState>
				<ContactState>
					<Router>
						<Fragment>
							<Navbar />
							<div className='container'>
								<Alert />
								<Switch>
									<PrivateRoute exact path='/' component={Home} />
									<Route exact path='/' component={Home} />
									<Route exact path='/register' component={Register} />
									<Route exact path='/login' component={Login} />
									<Route exact path='/about' component={About} />
								</Switch>
							</div>
						</Fragment>
					</Router>
				</ContactState>
			</AuthState>
		</AlertState>
	);
};

export default App;

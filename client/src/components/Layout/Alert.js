import React, { useContext } from 'react';
import alertContext from '../../context/alert/alertContext';

const Alert = () => {
	const AlertContext = useContext(alertContext);

	return (
		AlertContext.alerts.length > 0 &&
		AlertContext.alerts.map((alert) => (
			<div key={alert.id} className={`alert alert-${alert.type}`}>
				<i className='fas fa-info-circle'></i>
				{alert.msg}
			</div>
		))
	);
};

export default Alert;

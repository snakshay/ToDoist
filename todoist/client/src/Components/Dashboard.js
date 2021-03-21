import React from 'react';
import { useSelector } from 'react-redux';
import Output from './Output';


export default function Dashboard() {
	const User = useSelector((state) => state.User);
	return (

		<div>
			<h3>
				Welcome {User}
			</h3><br />
			<h5>After your changes are done, click Save to reflect changes in database</h5>
			<br />
			<hr />
			<Output></Output>

		</div>
	);
};

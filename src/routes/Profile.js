import React, { useState } from "react";
import {useHistory} from "react-router-dom";

import { authService, dbService } from "fbase";


export default ({ refreshUser, userObj }) => {
	const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
	const history = useHistory();
	
	const onLogOutClick = () => {
		authService.signOut();
		history.push("/");
	};

	const onChange = (event) => {
		const {
			target: {value},
		} = event;
		setNewDisplayName(value);
	};

	const obSubmit = async (event) => {
		event.preventDefault();
		if(userObj.displayName !== newDisplayName) {
			await userObj.updateProfile({
				displayName: newDisplayName,
			});

			refreshUser();
		}
	};

	return (
		<>
			<form onSubmit={obSubmit}>
				<input onChange={onChange} type="text" placeholder="Display Name" />
				<input type="submit" value="Update Profile" />
			</form>
			<button onClick={onLogOutClick}>Log Out</button>
		</>
	)
}
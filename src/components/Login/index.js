/** @format */
import React from "react";
import "./login.css";
import { Button } from "@material-ui/core";
import logo from "./whatsapp-logo.png";
import { auth, provider } from "../../firebase";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

function Index() {
	const [state, dispatch] = useStateValue();
	const handleSignIn = () => {
		auth
			.signInWithPopup(provider)
			.then((result) =>
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user,
				}),
			)
			.catch((error) => alert(error));
	};

	return (
		<div className="login">
			<div className="login_container">
				<img src={logo} alt="logo" />
				<div className="login_text">
					<h1>Sign in to Whatsapp</h1>
				</div>
				<Button onClick={handleSignIn}>Sign In With Google</Button>
			</div>
		</div>
	);
}

export default Index;

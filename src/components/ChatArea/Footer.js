/** @format */

import React, { useEffect, useState } from "react";
import "./footer.css";
import { IconButton } from "@material-ui/core";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MicIcon from "@material-ui/icons/Mic";
import { useParams } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import firebase from "firebase";
import db from "../../firebase";

function Footer() {
	const [input, setInput] = useState("");
	const { roomId } = useParams();
	const [{ user }, dispatch] = useStateValue();
	const sendMessage = (e) => {
		e.preventDefault();
		if (input) {
			db.collection("rooms").doc(roomId).collection("messages").add({
				message: input,
				name: user.displayName,
				timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			});
		}

		setInput("");
	};
	// console.log(input);
	return (
		<div className="footer_container">
			<div className="footer_options">
				<IconButton>
					<InsertEmoticonIcon />
				</IconButton>
				<IconButton>
					<AttachFileIcon />
				</IconButton>
			</div>
			<form className="footer_message_input">
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					type="text"
					placeholder="Type a message"
				></input>
				<button onClick={sendMessage} type="submit">
					Send a Message
				</button>
			</form>
			<div className="footer_mic_icon">
				<IconButton>
					<MicIcon />
				</IconButton>
			</div>
		</div>
	);
}

export default Footer;

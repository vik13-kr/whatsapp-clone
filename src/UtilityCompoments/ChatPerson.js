/** @format */

import React, { useEffect } from "react";
import "./chatPerson.css";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import db from "../firebase";
import { useState } from "react";

function ChatPerson({ name, id }) {
	const [messages, setMessages] = useState("");
	useEffect(() => {
		if (id) {
			db.collection("rooms")
				.doc(id)
				.collection("messages")
				.orderBy("timestamp", "desc")
				.onSnapshot((snapshot) =>
					setMessages(snapshot.docs.map((doc) => doc.data())),
				);
		}
	}, [id]);
	return (
		<Link to={`/room/${id}`} className="link">
			<div className="chatPerson_container">
				<div className="person_avatar">
					<Avatar alt={name} src="/static/images/avatar/1.jpg" />
				</div>
				<div className="chatPerson_summary_container">
					<div className="chatPerson_name">{name}</div>
					<div className="chatPerson_message">{messages[0]?.message}</div>
				</div>

				<div className="message_time">10:00 PM</div>
			</div>
		</Link>
	);
}

export default ChatPerson;

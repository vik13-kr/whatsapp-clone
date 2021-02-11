/** @format */

import React from "react";
import "./chatPerson.css";
import Avatar from "@material-ui/core/Avatar";

function ChatPerson() {
	return (
		<div className="chatPerson_container">
			<div className="person_avatar">
				<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
			</div>
			<div className="chatPerson_summary_container">
				<div className="chatPerson_name">Suhashi</div>
				<div className="chatPerson_message">Hi there...!!!</div>
			</div>

			<div className="message_time">10:00 PM</div>
		</div>
	);
}

export default ChatPerson;

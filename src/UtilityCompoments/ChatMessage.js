/** @format */

import React from "react";
import "./chatMessage.css";

function ChatMessage({receptionStatus}) {
	return (
		<div className={`chatmessage_container  ${receptionStatus === 'sent' ? '' : 'received'}`}>
			<div className="message_user_name">Vikash</div>
			<div className="message_container ">
				<div className="message_text">Hi how are you...??dkjsdjhsdllkklvjdkvkljsdklj</div>
				<div className="time">10:00 PM</div>
			</div>
		</div>
	);
}

export default ChatMessage;

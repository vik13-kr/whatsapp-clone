/** @format */

import React from "react";
import "./chatMessage.css";

function ChatMessage({receptionStatus, message, timestamp, name }) {
	// console.log(receptionStatus)
	return (
		<div className={`chatmessage_container  ${receptionStatus === 'sent' ? 'sent' : ''}`}>
			<div className="message_user_name">{name}</div>
			<div className="message_container ">
				<div className="message_text">{message}</div>
				<div className="time">{timestamp}</div>
			</div>
		</div>
	);
}

export default ChatMessage;

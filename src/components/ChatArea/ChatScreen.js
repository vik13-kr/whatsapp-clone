/** @format */

import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import db from "../../firebase";
import { useStateValue } from "../../StateProvider";
import ChatMessage from "../../UtilityCompoments/ChatMessage";
import "./chatscreen.css";

function ChatScreen() {
	const { roomId } = useParams();
	const [messages, setMessages] = useState([]);
	const [{user}, dispatch] = useStateValue()
	console.log(messages);
	useEffect(() => {
		if (roomId) {
			db.collection("rooms")
				.doc(roomId)
				.collection("messages")
				.orderBy("timestamp", "asc")
				.onSnapshot((snapshot) =>
					setMessages(snapshot.docs.map((doc) => doc.data())),
				);
		}
	}, [roomId]);
	return (
		<div className="chatscreen_container">
			<div>
				{messages.map((message, index) => (
					<ChatMessage key={index}
						receptionStatus={message?.name === user.displayName ? 'sent' : ''}
						name={message.name}
						message={message.message}
						timestamp={new Date(message.timestamp?.toDate()).toLocaleTimeString()}
					/>
				))}
			</div>
		</div>
	);
}

export default ChatScreen;

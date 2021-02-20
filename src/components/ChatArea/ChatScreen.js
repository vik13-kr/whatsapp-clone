/** @format */

import React, { createRef, useRef, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import db from "../../firebase";
import { useStateValue } from "../../StateProvider";
import ChatMessage from "../../UtilityCompoments/ChatMessage";
import "./chatscreen.css";

function ChatScreen() {
	const { roomId } = useParams();
	const [messages, setMessages] = useState([]);
	const [{ user }, dispatch] = useStateValue();
	const ref = useRef(null);

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

	useEffect(() => {
		//moved directly to bottom
		// const chatWindow = document.getElementById('chat-window');
		// const xH = chatWindow?.scrollHeight;
		// console.log('xh...', xH);
		// chatWindow.scrollTo(0, xH);

		// smooth moving effect
		ref.current?.scrollIntoView({ block: "end", behavior: "smooth" });
	}, [roomId, messages]);

	return (
		<div className="chatscreen_container" id="chat-window">
			<div>
				{messages.map((message, index) => (
					<ChatMessage
						key={index}
						receptionStatus={message?.name === user.displayName ? "sent" : ""}
						name={message.name}
						message={message.message}
						timestamp={new Date(
							message.timestamp?.toDate(),
						).toLocaleTimeString()}
					/>
				))}
			</div>
			<div ref={ref} />
		</div>
	);
}

export default ChatScreen;

/** @format */

import React from "react";
import ChatMessage from "../../UtilityCompoments/ChatMessage";
import "./chatscreen.css";

function ChatScreen() {
	return (
		<div className="chatscreen_container">
			<div>
				<ChatMessage />
                <ChatMessage receptionStatus='sent' />
			</div>
		</div>
	);
}

export default ChatScreen;

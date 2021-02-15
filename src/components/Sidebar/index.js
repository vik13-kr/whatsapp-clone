/** @format */

import React, { useState } from "react";
import ChatRooms from "./ChatRooms";
import SearchArea from "./SearchArea";
import "./sidebar.css";
import TopSection from "./TopSection";
import db from '../../firebase'

function Index() {
	const [chatName, setChatName] = useState("");


	const handleNewChat = () => {
		 const roomName = prompt("Enter a Chat Name")

		 if(roomName){
			 db.collection('rooms').add({
				 name:roomName,
			 })
		 }
	};

	console.log(chatName)
	return (
		<div className="sidebar">
			<div>
				<TopSection />
			</div>
			<div>
				{" "}
				<SearchArea />
			</div>
			<div className="sidebar_addChat" onClick={handleNewChat}>
				Add New Chat
			</div>
			<div>
				<ChatRooms />
			</div>
		</div>
	);
}

export default Index;

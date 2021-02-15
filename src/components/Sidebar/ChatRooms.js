/** @format */

import React, { useState, useEffect } from "react";
import db from "../../firebase";
import "./ChatRooms.css";
import ChatPerson from "../../UtilityCompoments/ChatPerson";

// import db from '../../Firebase';

function ChatRooms() {
	const [rooms, setRooms] = useState([]);

	useEffect(() => {
		db.collection("rooms").onSnapshot((snapshot) =>
			setRooms(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					data: doc.data(),
				})),
			),
		);
	}, []);

	console.log(rooms);
	return (
		<div className="chatRooms_container">
			{rooms.map((room) => (
				<div key={room.id}>
					<ChatPerson name={room.data.name} id={room.id} />
				</div>
			))}
		</div>
	);
}

export default ChatRooms;

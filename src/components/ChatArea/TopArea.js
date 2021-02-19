/** @format */

import React, { useEffect, useState } from "react";
import "./TopArea.css";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import { useParams } from "react-router-dom";
import db from "../../firebase";

function TopArea() {
	const { roomId } = useParams();
	const [roomName, setRoomData] = useState("");

	useEffect(() => {
		if (roomId) {
			db.collection("rooms")
				.doc(roomId)
				.onSnapshot((snapshot) => setRoomData(snapshot.data().name));
		}
	}, [roomName, roomId]);
	console.log(roomName);
	return (
		<div className="toparea_container">
			<div className="user_avatar">
				<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

				<p className="user_name">{roomName}</p>
				<p className="user_status">
					<br />
					{/* add last seen */}
				</p>
			</div>
			<div className="toparea_options">
				<IconButton>
					<SearchIcon />
				</IconButton>
				<IconButton>
					<MoreVertIcon />
				</IconButton>
			</div>
		</div>
	);
}

export default TopArea;

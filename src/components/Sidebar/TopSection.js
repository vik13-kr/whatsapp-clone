/** @format */

import React from "react";
import "./TopSection.css";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useStateValue } from "../../StateProvider";

function TopSection() {
	const [{ user }, dispatch] = useStateValue();
	console.log(user)
	console.log(user?.displayName)
	return (
		<div className="container">
			<div className="container_avatar">
				<Avatar src={user?.photoURL} className="avatar" />
			</div>
			<div className="container_options">
				<IconButton>
					<DonutLargeIcon />
				</IconButton>
				<IconButton>
					<ChatIcon />
				</IconButton>
				<IconButton>
					<MoreVertIcon />
				</IconButton>
			</div>
		</div>
	);
}

export default TopSection;

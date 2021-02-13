/** @format */

import React from "react";
import "./TopArea.css";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";

function TopArea() {
	return (
		<div className="toparea_container">
			<div className="user_avatar">
				<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

				<p className="user_name">Vikash</p>
				<p className="user_status">
					<br />
					Last seen at ...
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

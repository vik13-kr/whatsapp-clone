/** @format */

import React from "react";
import "./TopSection.css";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function TopSection() {
	const url =
		"https://c.ndtvimg.com/2021-01/cpcvt2q8_pm-modi-vaccine-drive-speech-650_625x300_16_January_21.jpg";
	return (
		<div className="container">
			<div className="container_avatar">
				<Avatar alt="Remy Sharp" src={url} className='avatar' />
			</div>
			<div className="container_options">
				<IconButton  >
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

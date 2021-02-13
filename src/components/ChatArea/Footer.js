/** @format */

import React from "react";
import "./footer.css";
import { IconButton } from "@material-ui/core";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicIcon from '@material-ui/icons/Mic';

function Footer() {
	return (
		<div className="footer_container">
			<div className="footer_options">
                <IconButton>
                    <InsertEmoticonIcon />
                </IconButton>
                <IconButton>
                    <AttachFileIcon />
                </IconButton>
            </div>
            <div className='footer_message_input'>
                <input type='text' placeholder='Type a message'></input>
            </div>
            <div className='footer_mic_icon'>
            <IconButton>
                    <MicIcon />
                </IconButton>
            </div>
		</div>
	);
}

export default Footer;

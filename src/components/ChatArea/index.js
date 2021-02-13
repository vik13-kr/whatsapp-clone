/** @format */

import React from "react";
import "./chatarea.css";
import TopArea from "./TopArea";
import ChatScreen from "./ChatScreen";
import Footer from './Footer'

function index() {
	return (
		<div className="chatarea">
			<TopArea />
			<ChatScreen />
            <Footer />
		</div>
	);
}

export default index;

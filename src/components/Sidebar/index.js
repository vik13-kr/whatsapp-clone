/** @format */

import React from "react";
import SearchArea from "./SearchArea";
import "./sidebar.css";
import TopSection from "./TopSection";

function index() {
	return (
		<div className="sidebar">
			<div>
				<TopSection />
			</div>
			<div>
				{" "}
				<SearchArea />
			</div>
		</div>
	);
}

export default index;

/** @format */

import React from "react";
import './SearchArea.css'
import SearchIcon from "@material-ui/icons/Search";

function SearchArea() {
	return (
		<div className="sidebar_search">
			<div className="search_container">
				<SearchIcon />
				<input type="text" placeholder='Search or start new chat' />
			</div>
		</div>
	);
}

export default SearchArea;

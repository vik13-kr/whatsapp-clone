/** @format */

import "./App.css";
import Sidebar from "./components/Sidebar";
import ChatArea from "./components/ChatArea";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import { useStateValue } from "./StateProvider";

function App() {
	const [{user}, dispatch] = useStateValue();
	return (
		//BEM naming convention
		<div className="app">
			{!user ? (
				<Login />
			) : (
				<div className="app_container">
					<Sidebar />
					<Switch>
						<Route path="/room/:roomId">
							<ChatArea />
						</Route>
						<Route path="/"></Route>
					</Switch>
				</div>
			)}
		</div>
	);
}

export default App;

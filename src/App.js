/** @format */

import "./App.css";
import Sidebar from "./components/Sidebar";
import ChatArea from "./components/ChatArea";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		//BEM naming convention
		<div className="app">
			<div className="app_container">
				<Sidebar />
				<Switch>
					<Route path="/room/:roomId">
						<ChatArea />
					</Route>
					<Route path="/"></Route>
				</Switch>
			</div>
		</div>
	);
}

export default App;

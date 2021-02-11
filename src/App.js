/** @format */

import "./App.css";
import Sidebar from "./components/Sidebar";
import ChatArea from "./components/ChatArea";

function App() {
	return (
		//BEM naming convention
		<div className="app">
			<div className="app_container">
				{/* Sidebar */}
				<Sidebar />
				{/* ChatArea */}
				<ChatArea />
			</div>
		</div>
	);
}

export default App;

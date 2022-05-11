import React from "react";
import "./App.css";
import DashboardEmployees from "./Pages/DashboardEmployees/DashboardEmployees";
import DashboardFinance from "./Pages/DashboardFinance/DashboardFinance";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";

export default function App() {
	return (
		<>
			<Sidebar/>
			<Routes>
				<Route 
					path='/' 
					element={<DashboardFinance />} 
				/>
				<Route
					path='/dashboardEmployees'
					element={<DashboardEmployees />}
				/>
			</Routes>
		</>
	);
}

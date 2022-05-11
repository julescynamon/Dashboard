import React, { createContext, useState } from "react";
import fulldata from "./fulldata";

export const DashboardContext = createContext();

const DashboardContextProvider = (props) => {
	const [dataChart, setDataChart] = useState(fulldata["2020"]);
	const [yearData, setYearData] = useState("2020");

    const changeYear = (el) => {

    }

	return (
		<DashboardContext.Provider value={{ changeYear, dataChart, yearData }}>
			{props.children}
		</DashboardContext.Provider>
	);
};

import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [User, setUser] = useState(
		JSON.parse(localStorage.getItem("User")) || null
	);
	const [selectedGenres, setSelectedGenres] = useState(
		JSON.parse(localStorage.getItem("selectedGenres")) || []
	);

	useEffect(() => {
		localStorage.setItem("User", JSON.stringify(User));
	}, [User]);
	useEffect(() => {
		localStorage.setItem("selectedGenres", JSON.stringify(selectedGenres));
	}, [selectedGenres]);

	return (
		<AppContext.Provider
			value={{
				User,
				setUser,
				selectedGenres,
				setSelectedGenres,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
import React, { createContext, useState } from 'react';

export const StyleContext = createContext();

const StyleContextProvider = (props) => {
	const [styles, setStyles] = useState({
		width: '',
	});

	const closeSlideMenu = () => {
		setStyles({
			width: 0,
		});
	};

	const openSlideMenu = () => {
		setStyles({
			width: 600,
		});
	};
	return (
		<StyleContext.Provider value={{ closeSlideMenu, styles, openSlideMenu }}>
			{props.children}
		</StyleContext.Provider>
	);
};

export default StyleContextProvider;

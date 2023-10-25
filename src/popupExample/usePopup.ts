import { useState } from 'react';

function usePopup() {
	const [isOpened, setIsOpened] = useState(false);

	const openPopup = () => setIsOpened(true);
	const closePopup = () => setIsOpened(false);

	return {
		isOpened,
		openPopup,
		closePopup
	};
}

export default usePopup;


import React from 'react';

export default function LogButtons({
	setLoginPopUpState,
	setSignupPopUpState,
}) {
	return (
		<div className="log">
			<button
				className="login"
				onClick={() => {
					setLoginPopUpState(true);
					setSignupPopUpState(false);
				}}
			>
				Login
			</button>
			<button
				className="no-border-button"
				onClick={() => {
					setLoginPopUpState(false);
					setSignupPopUpState(true);
				}}
			>
				Sign-up
			</button>
		</div>
	);
}

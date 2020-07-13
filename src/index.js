import React from 'react';
import ReactDOM from 'react-dom';
import ReCAPTCHA from 'react-google-recaptcha';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		{/* <ReCAPTCHA siteKey="6LdLwrAZAAAAAG5PK4gMCn1uVbqcUbcQXJwEgC3e"> */}
		<App />
		{/* </ReCAPTCHA> */}
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Client from './../app/client';

let html = ReactDOMServer.renderToString(<Client/>);

module.exports = ReactDOMServer.renderToString(
		<html>
			<head>
			</head>
			<body>
				<div id="app-view" dangerouslySetInnerHTML={{__html: html}} />
			</body>
		</html>
	);
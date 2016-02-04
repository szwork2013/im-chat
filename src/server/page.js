import React from 'react';
import {renderToString} from 'react-dom/server';

import createHistory from 'history/lib/createMemoryHistory';

import Client from './../client';

let html = renderToString(<Client createHistory={createHistory} />);

module.exports = renderToString(
<html>
	<head>
		<title>测试</title>
		<meta charSet="utf-8"/>
		<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1,minimum-scale=1, user-scalable=no"/>
		<meta name="apple-mobile-web-app-capable" content="yes"/>
		<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
		<meta name="format-detection" content="telephone=no"/>
		<meta name="format-detection" content="email=no"/>
	</head>
	<body>
		<div id="app-view" dangerouslySetInnerHTML={{__html: html}} />
	</body>
</html>
);
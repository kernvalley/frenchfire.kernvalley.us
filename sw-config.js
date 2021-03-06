---
layout: null
---
/* eslint-env serviceworker */
/* eslint no-unused-vars: 0 */

const config = {
	version: '{{ site.data.app.version | default: site.version }}',
	fresh: [
		/* Root document, pages, and posts */
		'{{ site.pages | where: "pinned", true | map: "url" | join: "', '" }}',
		'/manifest.json',
		'https://apps.kernvalley.us/apps.json',
	].map(path => new URL(path, location.origin).href),
	stale: [
		/* JS */
		'/js/index.min.js',
		'https://cdn.kernvalley.us/components/share-target.js',

		/* CSS */
		'/css/index.min.css',
		'https://cdn.kernvalley.us/components/toast-message.css',
		// 'https://cdn.kernvalley.us/components/leaflet/map.css',
		'https://cdn.kernvalley.us/components/share-to-button/share-to-button.css',
		// 'https://cdn.kernvalley.us/components/slide-show/slide-show.css',
		'https://cdn.kernvalley.us/components/github/user.css',
		'https://cdn.kernvalley.us/components/install/prompt.css',
		// 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css',
		'https://cdn.kernvalley.us/components/weather/current.css',

		/* Data and JSON */
		'/manifest.json',

		/* `customElements`templates */
		'https://cdn.kernvalley.us/components/toast-message.html',
		// 'https://cdn.kernvalley.us/components/leaflet/map.html',
		'https://cdn.kernvalley.us/components/share-to-button/share-to-button.html',
		// 'https://cdn.kernvalley.us/components/slide-show/slide-show.html',
		'https://cdn.kernvalley.us/components/github/user.html',
		'https://cdn.kernvalley.us/components/install/prompt.html',
		'https://cdn.kernvalley.us/components/weather/current.html',

		/* Images & Icons */
		'/img/icons.svg',
		// '/img/neon.svg',
		'/img/apple-touch-icon.png',
		'/img/icon-512.png',
		'/img/icon-192.png',
		'/img/icon-32.png',
		'/img/favicon.svg',
		'https://cdn.kernvalley.us/img/keep-kern-clean.svg',
		'https://cdn.kernvalley.us/img/logos/play-badge.svg',
		// 'https://cdn.kernvalley.us/img/logos/itunes-badge.svg',
		// 'https://cdn.kernvalley.us/img/logos/windows-badge.svg',
		// 'https://cdn.kernvalley.us/img/logos/instagram.svg',
		// 'https://cdn.kernvalley.us/img/markers.svg',

		/* Fonts */
		'https://cdn.kernvalley.us/fonts/roboto.woff2',
	].map(path => new URL(path, location.origin).href),
	allowed: [
		// 'https://maps.wikimedia.org/osm-intl/',
		'/https://i.imgur.com/',
		'/https://secure.gravatar.com/avatar/',
		/https:\/\/*\.githubusercontent\.com\/u\/*/,
		/\.(jpg|png|webp|svg|gif)$/,
	],
	allowedFresh: [
		new URL('/news/', location.origin).href,
		'https://www.google-analytics.com/analytics.js',
		'https://www.googletagmanager.com/gtag/js',
		// 'https://baconipsum.com/api/',
		'https://api.github.com/users/',
		'https://api.openweathermap.org/data/',
		/\.(html|css|js|json)$/,
	]
};

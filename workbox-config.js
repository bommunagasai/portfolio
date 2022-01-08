module.exports = {
	globDirectory: 'docs/',
	globPatterns: [
		'**/*.{png,ico,woff,woff2,js,css,html,webmanifest}'
	],
	swDest: 'docs/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
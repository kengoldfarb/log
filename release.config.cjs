const semanticReleaseConfig = require('@kengoldfarb/semantic-release-config')

const config = semanticReleaseConfig.default({
	config: 'package',
	branches: [
		'master',
		{ name: 'dev', channel: 'beta' },
		...sharedPrereleaseBranches,
		{ name: 'prerelease\/(.*)', prerelease: true },
		{ name: 'prerelease-(.*)', prerelease: true }
	]
})

module.exports = config

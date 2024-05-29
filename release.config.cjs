const semanticReleaseConfig = require('@kengoldfarb/semantic-release-config')

const config = semanticReleaseConfig.default({
	config: 'package',
	branches: [
		'master',
		{ name: 'dev', channel: 'beta' },
		{ name: 'prerelease-*', prerelease: true }
	]
})

module.exports = config

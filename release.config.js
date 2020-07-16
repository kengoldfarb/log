const semanticReleaseConfig = require('@kengoldfarb/semantic-release-config')
	.default

const config = semanticReleaseConfig.default({
	config: semanticReleaseConfig.ReleaseConfiguration.Package
})

module.exports = config

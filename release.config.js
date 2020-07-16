const semanticReleaseConfig = require('@kengoldfarb/semantic-release-config')

const config = semanticReleaseConfig.default({
	config: semanticReleaseConfig.ReleaseConfiguration.Package
})

module.exports = config

/* eslint-disable import/no-extraneous-dependencies */
import { describe, it } from 'vitest'
import log from '../index'
import { LogLevel } from '../src/logLevel'

describe('LogLevelTests', () => {
	it('Can log errors', () => {
		log.setOptions({
			level: LogLevel.Trace
		})

		log.debug(new Error('MISSING_PARAMETERS'))
	})
})

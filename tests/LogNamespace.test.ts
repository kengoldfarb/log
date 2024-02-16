/* eslint-disable import/no-extraneous-dependencies */
import faker from 'faker'
import { describe, it, assert } from 'vitest'
import log from '../index'
import { LogLevel } from '../src/logLevel'

function setNamespace(level: LogLevel, logLevel?: LogLevel) {
	const customLevels = {
		levels: {
			trace: 7,
			debug: 6,
			info: 5,
			warn: 4,
			error: 3,
			crit: 2,
			fatal: 1,
			superInfo: 0
		},
		colors: {
			trace: 'gray',
			debug: 'green',
			info: 'cyan',
			warn: 'yellow',
			error: 'red',
			crit: 'red',
			fatal: 'red',
			superInfo: 'cyan'
		}
	}
	const message = faker.lorem.words()

	const currentLogLevel = logLevel ?? LogLevel.Debug
	log.setOptions({
		level: currentLogLevel
	})

	const shouldLog =
		customLevels.levels[currentLogLevel] >= customLevels.levels[level]

	let wasLogged = false

	log.setOptions({
		customAdapter: logMessage => {
			wasLogged = true
			if (!shouldLog) {
				throw new Error(
					`Level ${level} should not log for log level ${logLevel}`
				)
			}
			const levelRegexp = new RegExp(level, 'i')
			assert.isTrue(levelRegexp.test(logMessage))
			const messageRegexp = new RegExp(message, 'i')
			assert.isTrue(messageRegexp.test(message))
		}
	})

	log[level](message)
	assert.equal(wasLogged, shouldLog)
}

describe('LogLevelTests', function test() {
	const namespace = faker.name.firstName()
	log.setOptions({
		namespace
	})

	it('Can set a namespace and log debug logs by default', () =>
		setNamespace(LogLevel.Debug))
	it('Can set a namespace and log debug', () =>
		setNamespace(LogLevel.Debug, LogLevel.Debug))
	it('Can set a namespace and log debug', () => setNamespace(LogLevel.Trace))
	it('Logs namespaces properly', () => {
		const message = faker.lorem.words()

		let hasNamespacePrefix = false

		log.setOptions({
			customAdapter: logMessage => {
				if (logMessage.indexOf(`[${namespace}]`) > -1) {
					hasNamespacePrefix = true
				}
			}
		})

		log.fatal(message)
		assert.isTrue(hasNamespacePrefix)
	})
})

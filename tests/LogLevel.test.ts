/* eslint-disable import/no-extraneous-dependencies */
import faker from 'faker'
import { describe, it, assert } from 'vitest'
import log from '../index'
import { LogLevel } from '../src/logLevel'

function handleLog(level: LogLevel, logLevel: LogLevel) {
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
	const shouldLog = customLevels.levels[logLevel] >= customLevels.levels[level]
	let wasLogged = false

	log.setOptions({
		level: logLevel,
		useColors: false
	})

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
	log.setOptions({
		level: LogLevel.Trace,
		useColors: false
	})

	it('Handle log=trace, level=trace', () =>
		handleLog(LogLevel.Trace, LogLevel.Trace))
	it('Handle log=trace, level=debug', () =>
		handleLog(LogLevel.Trace, LogLevel.Debug))
	it('Handle log=trace, level=info', () =>
		handleLog(LogLevel.Trace, LogLevel.Info))
	it('Handle log=trace, level=warn', () =>
		handleLog(LogLevel.Trace, LogLevel.Warn))
	it('Handle log=trace, level=error', () =>
		handleLog(LogLevel.Trace, LogLevel.Error))
	it('Handle log=trace, level=crit', () =>
		handleLog(LogLevel.Trace, LogLevel.Crit))
	it('Handle log=trace, level=fatal', () =>
		handleLog(LogLevel.Trace, LogLevel.Fatal))
	it('Handle log=trace, level=superInfo', () =>
		handleLog(LogLevel.Trace, LogLevel.SuperInfo))

	it('Handle log=debug, level=trace', () =>
		handleLog(LogLevel.Debug, LogLevel.Trace))
	it('Handle log=debug, level=debug', () =>
		handleLog(LogLevel.Debug, LogLevel.Debug))
	it('Handle log=debug, level=info', () =>
		handleLog(LogLevel.Debug, LogLevel.Info))
	it('Handle log=debug, level=warn', () =>
		handleLog(LogLevel.Debug, LogLevel.Warn))
	it('Handle log=debug, level=error', () =>
		handleLog(LogLevel.Debug, LogLevel.Error))
	it('Handle log=debug, level=crit', () =>
		handleLog(LogLevel.Debug, LogLevel.Crit))
	it('Handle log=debug, level=fatal', () =>
		handleLog(LogLevel.Debug, LogLevel.Fatal))
	it('Handle log=debug, level=superInfo', () =>
		handleLog(LogLevel.Debug, LogLevel.SuperInfo))

	it('Handle log=info, level=trace', () =>
		handleLog(LogLevel.Info, LogLevel.Trace))
	it('Handle log=info, level=debug', () =>
		handleLog(LogLevel.Info, LogLevel.Debug))
	it('Handle log=info, level=info', () =>
		handleLog(LogLevel.Info, LogLevel.Info))
	it('Handle log=info, level=warn', () =>
		handleLog(LogLevel.Info, LogLevel.Warn))
	it('Handle log=info, level=error', () =>
		handleLog(LogLevel.Info, LogLevel.Error))
	it('Handle log=info, level=crit', () =>
		handleLog(LogLevel.Info, LogLevel.Crit))
	it('Handle log=info, level=fatal', () =>
		handleLog(LogLevel.Info, LogLevel.Fatal))
	it('Handle log=info, level=superInfo', () =>
		handleLog(LogLevel.Info, LogLevel.SuperInfo))

	it('Handle log=warn, level=trace', () =>
		handleLog(LogLevel.Warn, LogLevel.Trace))
	it('Handle log=warn, level=debug', () =>
		handleLog(LogLevel.Warn, LogLevel.Debug))
	it('Handle log=warn, level=info', () =>
		handleLog(LogLevel.Warn, LogLevel.Info))
	it('Handle log=warn, level=warn', () =>
		handleLog(LogLevel.Warn, LogLevel.Warn))
	it('Handle log=warn, level=error', () =>
		handleLog(LogLevel.Warn, LogLevel.Error))
	it('Handle log=warn, level=crit', () =>
		handleLog(LogLevel.Warn, LogLevel.Crit))
	it('Handle log=warn, level=fatal', () =>
		handleLog(LogLevel.Warn, LogLevel.Fatal))
	it('Handle log=warn, level=superInfo', () =>
		handleLog(LogLevel.Warn, LogLevel.SuperInfo))

	it('Handle log=error, level=trace', () =>
		handleLog(LogLevel.Error, LogLevel.Trace))
	it('Handle log=error, level=debug', () =>
		handleLog(LogLevel.Error, LogLevel.Debug))
	it('Handle log=error, level=info', () =>
		handleLog(LogLevel.Error, LogLevel.Info))
	it('Handle log=error, level=warn', () =>
		handleLog(LogLevel.Error, LogLevel.Warn))
	it('Handle log=error, level=error', () =>
		handleLog(LogLevel.Error, LogLevel.Error))
	it('Handle log=error, level=crit', () =>
		handleLog(LogLevel.Error, LogLevel.Crit))
	it('Handle log=error, level=fatal', () =>
		handleLog(LogLevel.Error, LogLevel.Fatal))
	it('Handle log=error, level=superInfo', () =>
		handleLog(LogLevel.Error, LogLevel.SuperInfo))

	it('Handle log=crit, level=trace', () =>
		handleLog(LogLevel.Crit, LogLevel.Trace))
	it('Handle log=crit, level=debug', () =>
		handleLog(LogLevel.Crit, LogLevel.Debug))
	it('Handle log=crit, level=info', () =>
		handleLog(LogLevel.Crit, LogLevel.Info))
	it('Handle log=crit, level=warn', () =>
		handleLog(LogLevel.Crit, LogLevel.Warn))
	it('Handle log=crit, level=error', () =>
		handleLog(LogLevel.Crit, LogLevel.Error))
	it('Handle log=crit, level=crit', () =>
		handleLog(LogLevel.Crit, LogLevel.Crit))
	it('Handle log=crit, level=fatal', () =>
		handleLog(LogLevel.Crit, LogLevel.Fatal))
	it('Handle log=crit, level=superInfo', () =>
		handleLog(LogLevel.Crit, LogLevel.SuperInfo))

	it('Handle log=fatal, level=trace', () =>
		handleLog(LogLevel.Fatal, LogLevel.Trace))
	it('Handle log=fatal, level=debug', () =>
		handleLog(LogLevel.Fatal, LogLevel.Debug))
	it('Handle log=fatal, level=info', () =>
		handleLog(LogLevel.Fatal, LogLevel.Info))
	it('Handle log=fatal, level=warn', () =>
		handleLog(LogLevel.Fatal, LogLevel.Warn))
	it('Handle log=fatal, level=error', () =>
		handleLog(LogLevel.Fatal, LogLevel.Error))
	it('Handle log=fatal, level=crit', () =>
		handleLog(LogLevel.Fatal, LogLevel.Crit))
	it('Handle log=fatal, level=fatal', () =>
		handleLog(LogLevel.Fatal, LogLevel.Fatal))
	it('Handle log=fatal, level=superInfo', () =>
		handleLog(LogLevel.Fatal, LogLevel.SuperInfo))

	it('Handle log=superInfo, level=trace', () =>
		handleLog(LogLevel.SuperInfo, LogLevel.Trace))
	it('Handle log=superInfo, level=debug', () =>
		handleLog(LogLevel.SuperInfo, LogLevel.Debug))
	it('Handle log=superInfo, level=info', () =>
		handleLog(LogLevel.SuperInfo, LogLevel.Info))
	it('Handle log=superInfo, level=warn', () =>
		handleLog(LogLevel.SuperInfo, LogLevel.Warn))
	it('Handle log=superInfo, level=error', () =>
		handleLog(LogLevel.SuperInfo, LogLevel.Error))
	it('Handle log=superInfo, level=crit', () =>
		handleLog(LogLevel.SuperInfo, LogLevel.Crit))
	it('Handle log=superInfo, level=fatal', () =>
		handleLog(LogLevel.SuperInfo, LogLevel.Fatal))
	it('Handle log=superInfo, level=superInfo', () =>
		handleLog(LogLevel.SuperInfo, LogLevel.SuperInfo))
})

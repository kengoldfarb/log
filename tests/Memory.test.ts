/* eslint-disable import/no-extraneous-dependencies */
import faker from 'faker'
import { describe, it, assert } from 'vitest'
import { Log } from '../src/Log'
import { LogLevel } from '../src/logLevel'

function heapUsedMB() {
	return process.memoryUsage().heapUsed / 1024 / 1024
}

function lotsOfLogs() {
	const log = new Log({ level: LogLevel.Debug })
	const loopCount = 100
	const logCount = 10000
	const wordCount = 1000

	// console.log('starting heap usage', `${this.heapUsedMB()}MB`)

	for (let i = 0; i < logCount; i += 1) {
		log.debug(faker.lorem.words(wordCount))

		if (i % loopCount === 0) {
			const heapUsed = heapUsedMB()
			// console.log(`heap usage at ${i}`, `${heapUsed}MB`)
			assert.isBelow(heapUsed, 100)
		}
	}
}

describe('MemoryTests', function tests() {
	it.skip('Does not grow memory', () => lotsOfLogs())
})

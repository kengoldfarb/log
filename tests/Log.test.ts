/* eslint-disable import/no-extraneous-dependencies */
import faker from 'faker'
import { describe, it, assert } from 'vitest'
import log, { LogLevel } from '../index'
import jsonStringify from '../src/lib/jsonStringify'

describe('LoggingTests', () => {
	log.setOptions({
		level: LogLevel.Debug
	})

	it('Uses colors', () => {
		let wasLogged = false
		log.setOptions({
			useColors: true
		})
		log.setOptions({
			customAdapter: logMessage => {
				assert.isTrue(/\[32/.test(logMessage))
				wasLogged = true
			}
		})
		const message = faker.lorem.words()

		log.debug(message)
		assert.isTrue(wasLogged)
	})
	it('Can have colors turned off', () => {
		log.setOptions({
			useColors: false
		})

		let wasLogged = false
		log.setOptions({
			customAdapter: logMessage => {
				assert.isFalse(/\[32/.test(logMessage))
				wasLogged = true
			}
		})
		const message = faker.lorem.words()

		log.debug(message)
		assert.isTrue(wasLogged)
	})
	it('Can stringify circular references', () => {
		const a: Record<string, any> = {
			b: null
		}
		const b = { a }
		a.b = b

		let didThrow = false
		try {
			JSON.stringify(a)
		} catch (e) {
			didThrow = true
		}

		assert.isTrue(didThrow)

		jsonStringify(a)
		assert.isTrue(true)
	})
})

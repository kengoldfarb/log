# A simple isomorphic logger

Simple console logger that works both server and client side.

## Installation

```
yarn install @kengoldfarb/log
```

## Simple Usage

```js
const log = require('log')

log.setOptions({
	level: 'debug'
})

log.warn('Something went wrong')
```

## Typescript usage

```ts
import log, { LogLevel } from '@kengoldfarb/log'

log.setOptions({
	level: LogLevel.Debug
})

log.debug('Hello')
```

## Levels

The default logging level is `warn`. Use `log.setOptions()` to change it.

```js
log.trace('log at level trace')
log.debug('log at level debug')
log.info('log at level info')
log.warn('log at level warn')
log.error('log at level error')
log.crit('log at level crit')
log.fatal('log at level fatal')
log.superInfo('log at level superInfo')
```

## Full list of options

```ts
/** The log level */
level?: LogLevel;

/** Whether to log using colors. Default true */
useColors?: boolean;

/** Whether to log as JSON. Default false */
asJSON?: boolean;

/** A custom adapter that will be called with log messages. If not set, console.log is used */
customAdapter?: LogAdapter;

/** Whether to show file path / line numbers for all logs instead of just debug and trace. Enabling this will incur a slight performance penalty. */
showLineNumbersForAll?: boolean;

/**
* If this is a module, set the namespace so logs can be selectively turned on.
*
* For example, if the module is named @kengoldfarb/foo
*
* You can turn on debugging by setting the environment variable:
* DEBUG=@kengoldfarb/foo
* or with a wildcard
* DEBUG=@kengoldfarb/*
*
* You can also specify the level:
* DEBUG=@kengoldfarb/foo~trace,@kengoldfarb/bar~crit
*
* By default, when a namespace is set, the level is set to "warn"
*
* */
namespace?: string;
```



## Credit

Based on:

- https://github.com/barbershop/iso-log
- https://github.com/sprucelabsai/spruce-log

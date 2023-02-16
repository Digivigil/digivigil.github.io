[Balek](../README.md) / [Exports](../modules.md) / [EnvMap](../modules/EnvMap.md) / EnvironmentVariablesMap

# Class: EnvironmentVariablesMap

[EnvMap](../modules/EnvMap.md).EnvironmentVariablesMap

Class representing a map of environment variables

## Table of contents

### Constructors

- [constructor](EnvMap.EnvironmentVariablesMap.md#constructor)

### Properties

- [environmentVariablesMap](EnvMap.EnvironmentVariablesMap.md#environmentvariablesmap)

### Methods

- [forEach](EnvMap.EnvironmentVariablesMap.md#foreach)
- [get](EnvMap.EnvironmentVariablesMap.md#get)

## Constructors

### constructor

• **new EnvironmentVariablesMap**(`environmentVariables?`)

Creates an instance of EnvironmentVariablesMap.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `environmentVariables` | `ProcessEnv` | `process.env` |

#### Defined in

Instance/Configuration/EnvMap.ts:22

## Properties

### environmentVariablesMap

• `Private` **environmentVariablesMap**: `Map`<`string`, `string`\>

Map of environment variable name and values

#### Defined in

Instance/Configuration/EnvMap.ts:16

## Methods

### forEach

▸ **forEach**(`callback`): `void`

Iterates over the environment variables and invokes the callback function for each environment variable

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`value`: `string`, `key`: `string`) => `void` | Callback function |

#### Returns

`void`

#### Defined in

Instance/Configuration/EnvMap.ts:46

___

### get

▸ **get**(`variable`): `undefined` \| `string`

Gets the value of the specified environment variable

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `variable` | `string` | environment variable name |

#### Returns

`undefined` \| `string`

- environment variable value or undefined

#### Defined in

Instance/Configuration/EnvMap.ts:38

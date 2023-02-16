[Balek](../README.md) / [Exports](../modules.md) / [ArgMap](../modules/ArgMap.md) / CommandLineArgumentsMap

# Class: CommandLineArgumentsMap

[ArgMap](../modules/ArgMap.md).CommandLineArgumentsMap

Class representing a map of command line arguments

## Table of contents

### Constructors

- [constructor](ArgMap.CommandLineArgumentsMap.md#constructor)

### Properties

- [argumentsMap](ArgMap.CommandLineArgumentsMap.md#argumentsmap)

### Methods

- [forEach](ArgMap.CommandLineArgumentsMap.md#foreach)
- [get](ArgMap.CommandLineArgumentsMap.md#get)

## Constructors

### constructor

• **new CommandLineArgumentsMap**(`commandLineArguments?`)

Creates an instance of CommandLineArgumentsMap.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `commandLineArguments` | `string`[] | `process.argv` |

#### Defined in

Instance/Configuration/ArgMap.ts:21

## Properties

### argumentsMap

• `Private` **argumentsMap**: `Map`<`string`, `string`\>

Map of arguments name and values

#### Defined in

Instance/Configuration/ArgMap.ts:15

## Methods

### forEach

▸ **forEach**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`value`: `string`, `key`: `string`) => `void` |

#### Returns

`void`

#### Defined in

Instance/Configuration/ArgMap.ts:46

___

### get

▸ **get**(`arg`): `undefined` \| `string`

Gets the value of the specified argument

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arg` | `string` | argument name |

#### Returns

`undefined` \| `string`

- argument value or undefined

#### Defined in

Instance/Configuration/ArgMap.ts:42

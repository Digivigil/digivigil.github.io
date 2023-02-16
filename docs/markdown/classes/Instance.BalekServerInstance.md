[Balek](../README.md) / [Exports](../modules.md) / [Instance](../modules/Instance.md) / BalekServerInstance

# Class: BalekServerInstance

[Instance](../modules/Instance.md).BalekServerInstance

## Table of contents

### Constructors

- [constructor](Instance.BalekServerInstance.md#constructor)

### Properties

- [io](Instance.BalekServerInstance.md#io)
- [modules](Instance.BalekServerInstance.md#modules)
- [protocol](Instance.BalekServerInstance.md#protocol)
- [sessions](Instance.BalekServerInstance.md#sessions)
- [system](Instance.BalekServerInstance.md#system)

### Methods

- [getVersion](Instance.BalekServerInstance.md#getversion)
- [isReady](Instance.BalekServerInstance.md#isready)
- [start](Instance.BalekServerInstance.md#start)
- [stop](Instance.BalekServerInstance.md#stop)

## Constructors

### constructor

• **new BalekServerInstance**()

#### Defined in

Instance.ts:20

## Properties

### io

• `Private` `Readonly` **io**: [`IO`](IO.IO.md)

#### Defined in

Instance.ts:13

___

### modules

• `Private` `Readonly` **modules**: `Object`

#### Defined in

Instance.ts:17

___

### protocol

• `Private` `Readonly` **protocol**: `Object`

#### Defined in

Instance.ts:16

___

### sessions

• `Private` `Readonly` **sessions**: `Object`

#### Defined in

Instance.ts:18

___

### system

• `Private` `Readonly` **system**: `Object`

#### Defined in

Instance.ts:14

## Methods

### getVersion

▸ **getVersion**(): `undefined` \| `ConfigurationSetting`

#### Returns

`undefined` \| `ConfigurationSetting`

#### Defined in

Instance.ts:37

___

### isReady

▸ **isReady**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

Instance.ts:41

___

### start

▸ **start**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

Instance.ts:29

___

### stop

▸ **stop**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

Instance.ts:33

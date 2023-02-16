[Balek](../README.md) / [Exports](../modules.md) / [Instance](../modules/Instance.md) / BalekServerInstance

# Class: BalekServerInstance

[Instance](../modules/Instance.md).BalekServerInstance

## Table of contents

### Constructors

- [constructor](Instance.BalekServerInstance.md#constructor)

### Properties

- [configuration](Instance.BalekServerInstance.md#configuration)
- [io](Instance.BalekServerInstance.md#io)
- [modules](Instance.BalekServerInstance.md#modules)
- [protocol](Instance.BalekServerInstance.md#protocol)
- [sessions](Instance.BalekServerInstance.md#sessions)
- [system](Instance.BalekServerInstance.md#system)

### Methods

- [isReady](Instance.BalekServerInstance.md#isready)
- [start](Instance.BalekServerInstance.md#start)
- [stop](Instance.BalekServerInstance.md#stop)

## Constructors

### constructor

• **new BalekServerInstance**()

#### Defined in

Instance.ts:18

## Properties

### configuration

• `Private` `Readonly` **configuration**: [`Configuration`](Configuration.Configuration.md)

#### Defined in

Instance.ts:13

___

### io

• `Private` `Readonly` **io**: [`IO`](IO.IO.md)

#### Defined in

Instance.ts:11

___

### modules

• `Private` `Readonly` **modules**: `Object`

#### Defined in

Instance.ts:15

___

### protocol

• `Private` `Readonly` **protocol**: `Object`

#### Defined in

Instance.ts:14

___

### sessions

• `Private` `Readonly` **sessions**: `Object`

#### Defined in

Instance.ts:16

___

### system

• `Private` `Readonly` **system**: `Object`

#### Defined in

Instance.ts:12

## Methods

### isReady

▸ **isReady**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

Instance.ts:35

___

### start

▸ **start**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

Instance.ts:27

___

### stop

▸ **stop**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

Instance.ts:31

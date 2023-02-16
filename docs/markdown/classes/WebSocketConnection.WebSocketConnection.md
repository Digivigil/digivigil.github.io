[Balek](../README.md) / [Exports](../modules.md) / [WebSocketConnection](../modules/WebSocketConnection.md) / WebSocketConnection

# Class: WebSocketConnection

[WebSocketConnection](../modules/WebSocketConnection.md).WebSocketConnection

Provides a wrapper for the ws module

## Table of contents

### Constructors

- [constructor](WebSocketConnection.WebSocketConnection.md#constructor)

### Properties

- [ws](WebSocketConnection.WebSocketConnection.md#ws)

### Methods

- [handleClose](WebSocketConnection.WebSocketConnection.md#handleclose)
- [handleError](WebSocketConnection.WebSocketConnection.md#handleerror)
- [handleOpen](WebSocketConnection.WebSocketConnection.md#handleopen)
- [isReady](WebSocketConnection.WebSocketConnection.md#isready)
- [onMessage](WebSocketConnection.WebSocketConnection.md#onmessage)

## Constructors

### constructor

• **new WebSocketConnection**(`ws`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ws` | `WebSocket` |

#### Defined in

Instance/IO/Wss/Connection.ts:18

## Properties

### ws

• `Private` **ws**: `WebSocket`

#### Defined in

Instance/IO/Wss/Connection.ts:17

## Methods

### handleClose

▸ `Private` **handleClose**(`code`): `void`

Method that handles close events

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `number` | The WebSocket close code |

#### Returns

`void`

#### Defined in

Instance/IO/Wss/Connection.ts:64

___

### handleError

▸ `Private` **handleError**(`error`): `void`

Method that handles error events

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error` | `Error` | The error that occurred |

#### Returns

`void`

#### Defined in

Instance/IO/Wss/Connection.ts:52

___

### handleOpen

▸ `Private` **handleOpen**(): `void`

Method that handles Open events

#### Returns

`void`

#### Defined in

Instance/IO/Wss/Connection.ts:57

___

### isReady

▸ **isReady**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

Instance/IO/Wss/Connection.ts:65

___

### onMessage

▸ `Private` **onMessage**(`message`): `void`

Method that handles incoming messages

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The incoming message, either a string or a Buffer |

#### Returns

`void`

#### Defined in

Instance/IO/Wss/Connection.ts:41

▸ `Private` **onMessage**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `Buffer` |

#### Returns

`void`

#### Defined in

Instance/IO/Wss/Connection.ts:42

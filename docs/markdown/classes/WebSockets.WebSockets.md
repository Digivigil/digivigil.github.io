[Balek](../README.md) / [Exports](../modules.md) / [WebSockets](../modules/WebSockets.md) / WebSockets

# Class: WebSockets

[WebSockets](../modules/WebSockets.md).WebSockets

Class for handling WebSockets connections
Keeps track of and delegates the WebSocket connection
Also provides methods for retrieving and closing connections

## Table of contents

### Constructors

- [constructor](WebSockets.WebSockets.md#constructor)

### Properties

- [connections](WebSockets.WebSockets.md#connections)
- [server](WebSockets.WebSockets.md#server)

### Methods

- [handleConnection](WebSockets.WebSockets.md#handleconnection)
- [handleUpgrade](WebSockets.WebSockets.md#handleupgrade)
- [isReady](WebSockets.WebSockets.md#isready)
- [setID](WebSockets.WebSockets.md#setid)
- [stop](WebSockets.WebSockets.md#stop)

## Constructors

### constructor

• **new WebSockets**()

Constructor for WebSockets class

#### Defined in

Instance/IO/Wss.ts:25

## Properties

### connections

• `Private` **connections**: `Map`<`string`, [`WebSocketConnection`](WebSocketConnection.WebSocketConnection.md)\>

#### Defined in

Instance/IO/Wss.ts:21

___

### server

• `Private` `Readonly` **server**: `WebSocketServer`

#### Defined in

Instance/IO/Wss.ts:20

## Methods

### handleConnection

▸ `Private` **handleConnection**(`ws`): `void`

Method that handles incoming connections

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ws` | `WebSocket` | The WebSocket instance |

#### Returns

`void`

#### Defined in

Instance/IO/Wss.ts:34

___

### handleUpgrade

▸ **handleUpgrade**(`request`, `socket`, `head`): `void`

Handle WebSocket upgrade

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `request` | `IncomingMessage` | IncomingMessage object representing the request to the server |
| `socket` | `Socket` | Socket object representing the underlying connection |
| `head` | `Buffer` | Buffer holding the first packet of the upgraded stream |

#### Returns

`void`

#### Defined in

Instance/IO/Wss.ts:48

___

### isReady

▸ **isReady**(): `Promise`<`boolean`\>

Asynchronous method that indicates if the WebSockets server is ready

#### Returns

`Promise`<`boolean`\>

A promise that resolves to a boolean indicating if the server is ready

#### Defined in

Instance/IO/Wss.ts:72

___

### setID

▸ `Private` **setID**(`connection`): `string`

Method that creates a new ID for a connection

#### Parameters

| Name | Type |
| :------ | :------ |
| `connection` | [`WebSocketConnection`](WebSocketConnection.WebSocketConnection.md) |

#### Returns

`string`

#### Defined in

Instance/IO/Wss.ts:56

___

### stop

▸ **stop**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

Instance/IO/Wss.ts:65

[Balek](../README.md) / [Exports](../modules.md) / [Https](../modules/Https.md) / Https

# Class: Https

[Https](../modules/Https.md).Https

Class representing the HTTPS server

## Table of contents

### Constructors

- [constructor](Https.Https.md#constructor)

### Properties

- [errorLog](Https.Https.md#errorlog)
- [requestLog](Https.Https.md#requestlog)
- [server](Https.Https.md#server)
- [wssPaths](Https.Https.md#wsspaths)

### Methods

- [addWebSocketServer](Https.Https.md#addwebsocketserver)
- [handleError](Https.Https.md#handleerror)
- [handleRequest](Https.Https.md#handlerequest)
- [handleUpgrade](Https.Https.md#handleupgrade)
- [isReady](Https.Https.md#isready)
- [sendContent](Https.Https.md#sendcontent)
- [start](Https.Https.md#start)
- [stop](Https.Https.md#stop)

## Constructors

### constructor

• **new Https**()

Creates a new instance of the HTTPS server

#### Defined in

Instance/IO/Https.ts:45

## Properties

### errorLog

• `Private` **errorLog**: [`FixedSizeArray`](DataStructures.FixedSizeArray.md)<`Error`\>

#### Defined in

Instance/IO/Https.ts:41

___

### requestLog

• `Private` **requestLog**: [`FixedSizeArray`](DataStructures.FixedSizeArray.md)<`OutgoingHttpHeaders`\>

#### Defined in

Instance/IO/Https.ts:40

___

### server

• `Private` **server**: `undefined` \| `Server`<typeof `IncomingMessage`, typeof `ServerResponse`\>

The HTTPS server

#### Defined in

Instance/IO/Https.ts:36

___

### wssPaths

• `Private` **wssPaths**: `Map`<``null`` \| `string`, [`WebSockets`](WebSockets.WebSockets.md)\>

#### Defined in

Instance/IO/Https.ts:38

## Methods

### addWebSocketServer

▸ **addWebSocketServer**(`webSockets`, `path`): `void`

Adds a new WebSocket server for a specific path

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `webSockets` | [`WebSockets`](WebSockets.WebSockets.md) | The WebSockets instance to add |
| `path` | `string` | The path for which the WebSockets instance will be added |

#### Returns

`void`

#### Defined in

Instance/IO/Https.ts:148

___

### handleError

▸ `Private` **handleError**(`error`): `void`

Handles incoming requests from listening server

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |

#### Returns

`void`

#### Defined in

Instance/IO/Https.ts:121

___

### handleRequest

▸ `Private` **handleRequest**(`request`, `response`): `void`

Handles incoming requests from listening server

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `IncomingMessage` |
| `response` | `ServerResponse`<`IncomingMessage`\> |

#### Returns

`void`

#### Defined in

Instance/IO/Https.ts:79

___

### handleUpgrade

▸ `Private` **handleUpgrade**(`request`, `socket`, `head`): `void`

Handles incoming Wss Upgrade requests from listening server

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `IncomingMessage` |
| `socket` | `Socket` |
| `head` | `Buffer` |

#### Returns

`void`

#### Defined in

Instance/IO/Https.ts:104

___

### isReady

▸ **isReady**(): `Promise`<`boolean`\>

Returns a boolean indicating whether the required files for the HTTPS server are ready

#### Returns

`Promise`<`boolean`\>

True

#### Defined in

Instance/IO/Https.ts:156

___

### sendContent

▸ `Private` **sendContent**(`response`, `contentType`, `contentData`): `void`

Sends content in the response.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `response` | `ServerResponse`<`IncomingMessage`\> | The response to send the content to. |
| `contentType` | `string` | The type of content being sent (e.g. "text/html"). |
| `contentData` | `string` | The data of the content being sent. |

#### Returns

`void`

#### Defined in

Instance/IO/Https.ts:131

___

### start

▸ **start**(): `Promise`<`void`\>

Starts the HTTPS server

**`Throws`**

If an error occurs while starting the server

#### Returns

`Promise`<`void`\>

#### Defined in

Instance/IO/Https.ts:51

___

### stop

▸ **stop**(): `Promise`<`void`\>

Stops the HTTPS server

**`Throws`**

If an error occurs while starting the server

#### Returns

`Promise`<`void`\>

#### Defined in

Instance/IO/Https.ts:70

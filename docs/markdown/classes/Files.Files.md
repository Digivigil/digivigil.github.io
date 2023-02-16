[Balek](../README.md) / [Exports](../modules.md) / [Files](../modules/Files.md) / Files

# Class: Files

[Files](../modules/Files.md).Files

## Table of contents

### Constructors

- [constructor](Files.Files.md#constructor)

### Methods

- [isReady](Files.Files.md#isready)
- [returnFile](Files.Files.md#returnfile)
- [returnFileHandle](Files.Files.md#returnfilehandle)

## Constructors

### constructor

• **new Files**()

#### Defined in

Instance/IO/Files.ts:10

## Methods

### isReady

▸ **isReady**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

Instance/IO/Files.ts:14

___

### returnFile

▸ **returnFile**(`filePath`, `encoding?`): `Promise`<`Buffer`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `filePath` | `string` | `undefined` |
| `encoding` | `string` | `"utf-8"` |

#### Returns

`Promise`<`Buffer`\>

#### Defined in

Instance/IO/Files.ts:18

___

### returnFileHandle

▸ **returnFileHandle**(`filePath`, `options?`): `Promise`<`FileHandle`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `filePath` | `string` | `undefined` |
| `options` | `string` | `"r"` |

#### Returns

`Promise`<`FileHandle`\>

#### Defined in

Instance/IO/Files.ts:26

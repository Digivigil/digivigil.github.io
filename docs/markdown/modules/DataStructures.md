[Balek](../README.md) / [Exports](../modules.md) / DataStructures

# Module: DataStructures

## DataStructures Utility

**`Exports`**

- FixedSizeArray<T>
 - MapObject

## Table of contents

### Classes

- [FixedSizeArray](../classes/DataStructures.FixedSizeArray.md)

### Functions

- [MapObject](DataStructures.md#mapobject)

## Functions

### MapObject

▸ **MapObject**(`objectToMap`, `map`, `parentKey?`): `void`

Recursive function to map an object and its properties to a string key Map.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `objectToMap` | `Record`<`string`, `any`\> | Object to be mapped. |
| `map` | `Map`<`string`, `string` \| `boolean` \| `object` \| `any`[]\> | Map to store the object and its properties. |
| `parentKey?` | `string` | Key of the parent object. Optional. |

#### Returns

`void`

#### Defined in

Utility/DataStructures.ts:17

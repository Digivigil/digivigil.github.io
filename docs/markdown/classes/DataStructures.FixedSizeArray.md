[Balek](../README.md) / [Exports](../modules.md) / [DataStructures](../modules/DataStructures.md) / FixedSizeArray

# Class: FixedSizeArray<T\>

[DataStructures](../modules/DataStructures.md).FixedSizeArray

A class that represents a fixed-size array that removes the oldest item
when a new item is added and the size exceeds the maximum.

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](DataStructures.FixedSizeArray.md#constructor)

### Properties

- [data](DataStructures.FixedSizeArray.md#data)
- [maxSize](DataStructures.FixedSizeArray.md#maxsize)

### Methods

- [add](DataStructures.FixedSizeArray.md#add)
- [forEach](DataStructures.FixedSizeArray.md#foreach)
- [getData](DataStructures.FixedSizeArray.md#getdata)

## Constructors

### constructor

• **new FixedSizeArray**<`T`\>(`maxSize`)

Creates a new instance of the FixedSizeArray

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `maxSize` | `number` | The maximum size of the array |

#### Defined in

Utility/DataStructures.ts:61

## Properties

### data

• `Private` **data**: `T`[]

The data stored in the array

#### Defined in

Utility/DataStructures.ts:50

___

### maxSize

• `Private` **maxSize**: `number`

The maximum size of the array

#### Defined in

Utility/DataStructures.ts:54

## Methods

### add

▸ **add**(`item`): `void`

Adds a new item to the array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `T` | The item to be added |

#### Returns

`void`

#### Defined in

Utility/DataStructures.ts:71

___

### forEach

▸ **forEach**(`callback`): `void`

Iterates over the items in the array and performs a callback function on each item

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`item`: `T`, `index`: `number`, `array`: `T`[]) => `void` | A callback function to be performed on each item in the array |

#### Returns

`void`

#### Defined in

Utility/DataStructures.ts:92

___

### getData

▸ **getData**(): `T`[]

Returns the data stored in the array

#### Returns

`T`[]

The data stored in the array

#### Defined in

Utility/DataStructures.ts:83

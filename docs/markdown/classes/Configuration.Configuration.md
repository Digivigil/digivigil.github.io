[Balek](../README.md) / [Exports](../modules.md) / [Configuration](../modules/Configuration.md) / Configuration

# Class: Configuration

[Configuration](../modules/Configuration.md).Configuration

The Configuration Class represents the main Configuration settings for the application.

Loading settings from the environment, command line arguments, and Configuration files.

This class offers both get and set methods to these settings.

If a setting doesn't exist it will be created when set.

It also provides a getObservable method for retrieving setting Observables that can be subscribed to.

**`Example`**

```ts
//import the Configuration class as Configuration
import Configuration from "../src/Instance/Configuration";
//get current value
const version = Configuration.get("version");
//get observable for setting
const portObservable = Configuration.getObservable("https.port");
//set the https port setting
Configuration.set("https.port", 443)
```

**`Remarks`**

In the example, the Configuration class is imported as "Configuration". The current value of the version setting is retrieved using get().
An observable for the "https.port" setting is retrieved using getObservable().
The Configuration class is then used to set the "https.port" to 443.

## Table of contents

### Methods

- [get](Configuration.Configuration.md#get)
- [getObservable](Configuration.Configuration.md#getobservable)
- [set](Configuration.Configuration.md#set)

## Methods

### get

▸ **get**(`setting`): `undefined` \| `ConfigurationSetting`

Gets the value of the specified setting in order of the Balek Configuration Map,
Command Line Arguments Map, Package Configuration Map, or Environment Variables Map.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `setting` | `string` | Setting name |

#### Returns

`undefined` \| `ConfigurationSetting`

- Setting value or undefined

#### Defined in

Instance/Configuration.ts:186

___

### getObservable

▸ **getObservable**(`setting`): `Observable`<`ConfigurationSetting`\>

gets the rxjs Observable for the setting

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `setting` | `string` | name of setting for which the observable to retrieve |

#### Returns

`Observable`<`ConfigurationSetting`\>

- observable for the specified setting

#### Defined in

Instance/Configuration.ts:169

___

### set

▸ **set**(`setting`, `value`): `void`

set the value of the specified setting

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `setting` | `string` | setting for which the value is to be set |
| `value` | `ConfigurationSetting` | value to be set for the specified setting |

#### Returns

`void`

#### Defined in

Instance/Configuration.ts:205

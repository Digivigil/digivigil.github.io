[Balek](../README.md) / [Exports](../modules.md) / BalekConfigurationDefaults

# Module: BalekConfigurationDefaults

Default and Type for BalekConfiguration

## Table of contents

### Type Aliases

- [BalekConfiguration](BalekConfigurationDefaults.md#balekconfiguration)

### Variables

- [defaultBalekConfiguration](BalekConfigurationDefaults.md#defaultbalekconfiguration)

## Type Aliases

### BalekConfiguration

Ƭ **BalekConfiguration**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `database` | { `mongo`: { `database`: `string` ; `host`: `string` ; `password`: `string` ; `port`: `string` ; `user`: `string`  } ; `sql`: { `database`: `string` ; `host`: `string` ; `password`: `string` ; `user`: `string`  }  } |
| `database.mongo` | { `database`: `string` ; `host`: `string` ; `password`: `string` ; `port`: `string` ; `user`: `string`  } |
| `database.mongo.database` | `string` |
| `database.mongo.host` | `string` |
| `database.mongo.password` | `string` |
| `database.mongo.port` | `string` |
| `database.mongo.user` | `string` |
| `database.sql` | { `database`: `string` ; `host`: `string` ; `password`: `string` ; `user`: `string`  } |
| `database.sql.database` | `string` |
| `database.sql.host` | `string` |
| `database.sql.password` | `string` |
| `database.sql.user` | `string` |
| `https` | { `address`: `string` ; `port`: `string`  } |
| `https.address` | `string` |
| `https.port` | `string` |
| `session` | { `loader`: { `modules`: `string`[]  }  } |
| `session.loader` | { `modules`: `string`[]  } |
| `session.loader.modules` | `string`[] |

#### Defined in

Instance/Configuration/Defaults.ts:8

## Variables

### defaultBalekConfiguration

• `Const` **defaultBalekConfiguration**: [`BalekConfiguration`](BalekConfigurationDefaults.md#balekconfiguration)

#### Defined in

Instance/Configuration/Defaults.ts:35

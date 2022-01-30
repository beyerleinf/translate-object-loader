# TranslateObjectLoader <!-- omit in toc -->

> Simple loader for [ngx-translate](https://github.com/ngx-translate) that uses an object library.

[![Maintenance](https://img.shields.io/maintenance/yes/2022.svg?style=flat-square)](https://github.com/beyerleinf/translate-object-loader)
[![license](https://img.shields.io/github/license/beyerleinf/translate-object-loader.svg?style=flat-square)](https://github.com/beyerleinf/translate-object-loader/blob/master/LICENSE.md)
[![npm](https://img.shields.io/npm/v/translate-object-loader.svg?style=flat-square)](https://npmjs.com/package/translate-object-loader)

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/beyerleinf/translate-object-loader/Angular%20CI?style=flat-square)](https://github.com/beyerleinf/translate-object-loader/actions?query=workflow%3A%22Angular+CI%22)
[![Codecov](https://img.shields.io/codecov/c/github/beyerleinf/translate-object-loader.svg?style=flat-square)](https://codecov.io/gh/beyerleinf/translate-object-loader)
[![Known Vulnerabilities](https://snyk.io/test/github/beyerleinf/translate-object-loader/badge.svg?style=flat-square)](https://snyk.io/test/github/beyerleinf/translate-object-loader)

## Why? <!-- omit in toc -->

This loader is useful if you have multiple sub-modules in your Angular application which each have their own translation definitions and you want to have them all managed separately.

- [Supported versions](#supported-versions)
  - [Angular](#angular)
  - [ngx-translate](#ngx-translate)
- [Installation](#installation)
- [Usage](#usage)

## Supported versions

### Angular

| Angular            | Supported   |
| ------------------ | ----------- |
| < 6.0.0            | not tested  |
| >= 6.0.0 <= 10.0.0 | yes (2.x.x) |
| 11.x.x             | yes (3.x.x) |
| 12.x.x             | yes (4.x.x) |
| 13.x.x             | yes (5.x.x) |

### ngx-translate

| ngx-translate       | Supported      |
| ------------------- | -------------- |
| < 10.0.0            | not tested     |
| >= 10.0.0 <= 13.0.0 | yes (>= 2.x.x) |
| 14.x.x              | yes (5.x.x)    |

## Installation

```bash
npm install --save translate-object-loader
```

## Usage

You can also check out the [demo project](https://github.com/beyerleinf/translate-object-loader/tree/master/projects/demo) if you just want to see the code.

Follow the instructions at [@ngx-translate/core](https://github.com/ngx-translate/core#installation) on how to install ngx-translate itself.

Then simply import the loader and provide it to the `TranslateModule`.

```ts
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateObjectLoader } from 'translate-object-loader';

@NgModule({
    imports: [
        BrowserModule,
        TranslateModule.forRoot({
            loader:
              provide: TranslateLoader,
              useClass: TranslateObjectLoader,
            }
        })
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

Now, adding your translation definition is pretty simple. The only thing to keep in mind is that the top level objects of your definition should _always_ be a language code because we select the language based on that.

Also, the last definition you import will always overwrite any keys that might already be defined in previous definitions.

```ts
// app.module.ts

import { Library } from 'translate-object-loader';
import { firstModuleTranslations } from 'first-module';
import { secondModuleTranslations } from 'second-module';

// Import each separately
Library.add(firstModuleTranslations);
Library.add(secondModuleTranslations);

// Or import multiple at the same time
Library.add(firstModuleTranslations, secondModuleTranslations);
```

```ts
// first-module.ts

import { TranslationDefinition } from 'translate-object-loader';

export const firstModuleTranslations: TranslationDefinition = {
  de: {
    key1: 'Schlüssel1',
  },
  en: {
    key1: 'Key1',
  },
};
```

```ts
// second-module.ts

import { TranslationDefinition } from 'translate-object-loader';

export const secondModuleTranslations: TranslationDefinition = {
  de: {
    key2: 'Schlüssel2',
  },
  en: {
    key1: 'Overwriting',
    key2: 'Key2',
  },
};
```

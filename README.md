## `@skyrim-platform/jcontainers`

(Unofficial) TypeScript library for the JContainers Skyrim modding utility

- JContainers on GitHub: https://github.com/ryobg/JContainers
- JContainers on Nexus: https://www.nexusmods.com/skyrimspecialedition/mods/16495
- JContainers documentation: https://github.com/ryobg/JContainers/wiki

## Getting Started

You can find an example Skyrim Platform plugin with documentation on how to get started using this library: https://github.com/skyrim-platform/example-plugin-using-libraries

> Papyrus source code conversion to TypeScript originally generated using [Papyrus-2-Typescript](https://github.com/CarlosLeyvaAyala/Papyrus-2-Typescript)

## Example

```ts
import { once, Debug } from '@skyrim-platform/skyrim-platform'
import * as JMap from '@skyrim-platform/jcontainers/JMap'

// Store stuff in a JMap and then print it out
once('update', () => {
    const map = JMap.object()
    JMap.setStr(map, 'greeting', 'Hello, world!')
    Debug.messageBox(`JContainers says: ${JMap.getStr(map, 'greeting')}`)
})
```

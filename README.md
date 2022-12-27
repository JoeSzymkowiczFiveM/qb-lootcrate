## Description
This resource lets you create usable crates, that will give the player items that you associate with them.

## Features
* Custom weighted chances to drop specific items
* Use local or remote images for spinner
* Create multiple cases, each with the own set of items
* Randomized, server-sided item selection and validation
* Included several CSGO case inventory images, and included 2 creates as an example in the config

## Credit
- [Dimka Zheleznov](https://codepen.io/zheleznov) for the UI code and posting it to codepen. Wherever you are, hats off to you. I absolutely copied near-100% to make this work.

## Dependencies
- [qb-core](https://github.com/qbcore-framework/qb-core)

## Preview
https://streamable.com/24639d

## Shared items example
```lua
['case_recoil'] 			 = {['name'] = 'case_recoil', 				['label'] = 'Recoil Case', 				['weight'] = 2000, 		['type'] = 'item', 		['image'] = 'case_recoil.png', 		['unique'] = true, 		['useable'] = true, 	['shouldClose'] = true,	   ['combinable'] = nil,   ['description'] = 'A prize awaits inside.'},
['case_prisma2'] 			 = {['name'] = 'case_prisma2', 				['label'] = 'Prisma 2 Case', 				['weight'] = 2000, 		['type'] = 'item', 		['image'] = 'case_recoil.png', 		['unique'] = true, 		['useable'] = true, 	['shouldClose'] = true,	   ['combinable'] = nil,   ['description'] = 'A prize awaits inside.'},
```

## Discord
[Joe Szymkowicz FiveM Development](https://discord.gg/5vPGxyCB4z)

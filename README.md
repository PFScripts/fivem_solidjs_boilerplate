<h1 align='center'>
  FiveM SolidJS Boilerplate
</h1>

<div align="center">
  This boilerplate provides a modern SolidJS setup specifically designed for FiveM development.
</div>

<div align='center'>
  
  ![GitHub License](https://img.shields.io/github/license/PFScripts/fivem_react_vite_mantine_boilerplate?label=License&labelColor=%E2%80%8E%E2%80%8E&color=%2330b893)
  <a href='https://discord.gg/QhMmyx8xsE'>
    ![Discord](https://img.shields.io/discord/1279910494425186446?style=flat&logo=discord&logoColor=%2330b893&label=%E2%80%8E%20&labelColor=%E2%80%8E%E2%80%8E&color=%2330b893)
  </a>
</div>

## `Information`

* **Fast Build System:** Powered by Vite for quick and efficient development.
* **Flexible Workflows:** Supports both browser and in-game development, making it versatile for various scenarios.
* **CfxLua Runtime Compatibility:** Seamlessly integrates with the CfxLua runtime for FiveM applications.

## `Requirements`

- [**ox_lib**](https://github.com/overextended/ox_lib/releases/latest)
- [**NodeJS > v18.20.4**](https://nodejs.org/en/)
- [**Bun (Preferred but not required)**](https://bun.sh/)

## `Getting Started`

### `Installation`

The boilerplate was built with `bun` but is still compatible with `npm`.

1. Clone the repository or use the template option and place it within your `resources` folder.
2. Go to the `web` folder within a terminal of your choice and type `bun i` or `npm i`.

## `Features && Examples` 

### `Web | Scripts`

* (`bun` or `npm`) `bun dev` – Starts the development server.
* (`bun` or `npm`) `bun build` – Builds the project.
* (`bun` or `npm`) `bun build:watch` – Builds the project and watches for changes.

### `Web | TriggerNuiCallback`

```tsx
TriggerNuiCallback<any>('getPlayerInfo').then(info => {
  console.log(info);
});
```

### `Web | HandleNuiMessage`

```tsx
HandleNuiMessage<any>('log', (data) => {
    console.log(data);
});
```

### `Web | SendNuiMessage`

```tsx
SendNuiMessage<any>([
    {action: 'log', data: 'Hello, world!'},
    {action: 'updateUI', data: {panel: 'score', value: 42}},
], 750);
```

### `Lua | handleNuiMessage`

```lua
-- 1st argument its the message sent by SEND_NUI_MESSAGE native.
-- 2nd argument sets the SET_NUI_FOCUS native value. 
-- Example:
handleNuiMessage({action = 'idk_bro', data = true}, true)
```

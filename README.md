# Svelte-spectre

UI-kit based on [spectre.css](https://picturepan2.github.io/spectre/) and powered by SvelteJS.

### Requirements

-   `node -v >= 15`
-   `npm -v >= 7`

## Installation

```bash
npm install
```

## Building package

This builds the GUI components in a `package` folder:

```bash
npm run package
```

## Developing

This serves a demonstration website:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then run:

```bash
npm run build
```

You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.

## License

Copyright 2021-2022 BASF SE

BSD 3-Clause
## Wish Work NextJS Boilerplate

> This boilerplate has been developed with the aim of developing faster, easier and maintainable web platforms.

## Overview

The core libraries which has been used in the boilerplate has been scheme below.
However, there are multiple micro-libraries from which software engineers could leverage.

- MUI
- NEXTJS
- I18N
- Zustand
- ESLINT
- FRAMER MOTION

## Node.js Version

You can find the recommended Node.js version in `.npmrc` file.

```bash
use-node-version=18.16.0
```

you can set your Node.js to that version using whatever Node.js version manager you use but We recommend using pnpm to automate this process.

## PNPM as Node.js version manager

first uninstall Node.js if you already have it installed on your system then use one of the standalone scripts from [this page](https://pnpm.io/installation#using-a-standalone-script)

now you can use the following command to install the latest lts version.

```bash
pnpm env use --global lts
```

Find out more about [pnpm env commands](https://pnpm.io/cli/env)

That's it. now in whatever project you're working, pnpm automatically reads `.npmrc` file and uses the right Node.js version without changing the global version.

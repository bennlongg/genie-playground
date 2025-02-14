<div align="center">

<img src="logo.svg" width="250">

# Genie + TailwindCSS-kit

</div>

<div align="center">

[Social Preview image](https://user-images.githubusercontent.com/37421660/224126309-a5bdc0ff-51b0-4810-8265-1b83161777c1.png)

</div>
    
<div align="center">

A starter kit for Qwik & TailwindCSS ⚡️

[![Digital Ocean Referral Badge](https://img.shields.io/badge/Digital%20Ocean-%230080ff.svg?style=for-the-badge&logo=digitalocean&logoColor=white)](https://m.do.co/c/5cd16bffe464) [![Star History](https://img.shields.io/badge/Star%20History-%23bf4f4b.svg?style=for-the-badge)](https://star-history.com/#giovannicarmelo/tailwindcss-kit&Date)

</div>

<div align="center">

[![Qwik](https://img.shields.io/github/package-json/dependency-version/gioboa/qwik-tailwindcss-kit/dev/@builder.io/qwik)](https://github.com/gioboa/qwik-tailwindcss-kit/blob/main/package.json) [![Vite](https://img.shields.io/github/package-json/dependency-version/gioboa/qwik-tailwindcss-kit/dev/vite)](https://github.com/gioboa/qwik-tailwindcss-kit/blob/main/package.json) [![TS](https://img.shields.io/github/package-json/dependency-version/gioboa/qwik-tailwindcss-kit/dev/typescript)](https://github.com/gioboa/qwik-tailwindcss-kit/blob/main/package.json) [![Fontawesome](https://img.shields.io/github/package-json/dependency-version/gioboa/qwik-tailwindcss-kit/dev/@fortawesome/free-solid-svg-icons)](https://github.com/gioboa/qwik-tailwindcss-kit/blob/main/package.json) [![Babel](https://img.shields.io/github/package-json/dependency-version/gioboa/qwik-tailwindcss-kit/dev/@babel/plugin-proposal-private-methods)](https://github.com/gioboa/qwik-tailwindcss-kit/blob/main/package.json) [![Babel](https://img.shields.io/github/package-json/dependency-version/gioboa/qwik-tailwindcss-kit/@babel/plugin-proposal-private-property-in-object)](https://github.com/gioboa/qwik-tailwindcss-kit/blob/main/package.json) [![PostCSS](https://img.shields.io/github/package-json/dependency-version/gioboa/qwik-tailwindcss-kit/postcss)](https://github.com/gioboa/qwik-tailwindcss-kit/blob/main/package.json)

</div>

## Features

- Qwik v0.109.1
- TailwindCSS v3.3.2
- TypeScript v4.6
- md spliced layout
- Fontawesome support [PR for icon component](https://github.com/gioboa/qwik-tailwindcss-kit/pull/106) thank you [@GBuonfiglio](https://github.com/GBuonfiglio)!!
- Headlessui support [Docs for icon component](./src/modules/shared/docs/HeadlessModalDocumentLink.md) thank you [@jackkoppa](https://github.com/jackkoppa)!!
- Firebase support

## Stay in contact

- Follow me on [Twitter](https://twitter.com/gioboa3)
- Follow me on [Mastodon](https://mastodon.social/@gioboa)
- Follow me on [Linkedin](https://www.linkedin.com/in/gioboa/)

## Quick Start

---

- Verify that you're using the latest version of Node's LTS. If you're unsure run `nvm use` to switch to the Node version defined in this repository's `.nvmrc` file.
- Clone this repo
- Install dependencies by running `pnpm install`
- If you don't have `pnpm`, install it via `npm i -g pnpm`
- Start the dev server by running `pnpm dev`

## Deploy on Digital Ocean

---

## Deploy on Deta

To deploy on Deta you need to create your account on [Deta.sh](https://www.deta.sh).

- Clone this repository and follow the configuration steps below.
- You need to install these dependencies on your pc.

```shell
# ~~~~~~~~~~~~~~~~~~~ Required ~~~~~~~~~~~~~~~~~~~
brew install python3
npm install -g yarn

# ~~~~~~~~~~~~~~~~~~~ Optional ~~~~~~~~~~~~~~~~~~~
- AWS Command Line Interface (cli >=2.0)
  # Used to publish on lambda@Edge
- AWS S3 bucket and CloudFront CDN distribution

For the complete list of dependencies visit this page:
https://docs.deta.sh/docs/home/os#installing-dependencies

```

- Install the [Deta CLI](https://docs.deta.sh/docs/cli/install)

- Start by creating a micro (you could user the `--project` to create on organization projects and the `--name` flag for custom micro names).

```shell
# in the bash shell into the workspace directory.
deta new --project your-username --name project-name

# Deta will create an empty new directory create the following structure.
`[project-name]`
- `[src]`
- [`yourfiles.py`] # The entry point, you could use others names, here the default name.
```

- Navigate to the newly `created directory` and move the `all the files and directories` from `your workspace` to the `project directory` and override the created empty `src` directory.

```shell
mv [your workspace]/* [your project-name directory]/*

# Finally your directory must appear as...
[`project-name`]
- [public/]
- [src/]
- [styles/]
- .babelrc
- .editorconfig
- .gitignore
- .nvmrc
- [project-name].py
- firebase.json
- package-lock.json
- package.json
- postcss.config.mjs
- README.md
- tailwind.config.js
- tsconfig.json
- vite.config.ts
- wrapper.config.mjs

# You can use .detaignore files to ignore files and folders.
```

- Convert the Deta space from a `Python` space to a `Node` space.

```shell
deta update --runtime nodejs18.x
```

- We are going to integrate some Vite integrations into Deta spaces configuration. Find the function endpoint on the Actions and APIs tab on the console.

The [Project-handlers](./scripts/project-handlers/Readme.md) script makes it easier for us.

- Find the endpoint.

```url
https://PROJECT_ID-YOUR_NAME.deta.app/
```

- Then we add the `/_assets/` endpoint to serve the assets.

```shell
echo "/_assets/* = https://PROJECT_ID-YOUR_NAME.deta.app/_assets/*" > Assets
mv ./Assets ./.well-known/deta/headers

```

- Add the `vite.config.ts` Vite plugins configuration.

```ts
import { InternalApiLayer, StaticLayer } from "@decs-sdk/deta-spaces-layer-super";
import { defineProjectHandlerConfig } from "vite";
import cloudfront from 'vite-plugin-cloudfront';
import { default as vitePluginDetaVersion } from 'vite-plugin-deta-version';
import { qwikVite } from "@builder.io/qwik/optimizer";
import inspect from "vite-plugin-inspect";
const isDev = process.env.NODE_ENV !== "production";
import { qwikCity } from "@builder.io/qwik-city/vite";
　import { join } from "node:path";
import { defineConfig } from "vite";

const SpaceLayerConfig = defineProjectHandlerConfig({
  // These configuration file must be wrappet within
  // Define Project Handler configuration function on the config file.
  // https://github.com/decs-x/vite-app/blob/main/vite.config.ts
  layers: [
    new StaticLayer(["public"], {
      // This is a static layer.
      // Use simple file paths/wildcards to include files only in that folder.
      // You can use regex patterns to include files and folders outside of the folder, or exclude files.
    }),
    new InternalApiLayer(
      /**
       * Add endpoints as you like
       *
       * Build `<NAME>.ts` files inside
       * deintegration then include
       * those files by specifying its filePath below.
       */
      join(__dirname, "endpoints"),
      {
        /**
         * Pattern: Add extra regex pattern for the internal endpoints
         * Vite-plugin-cloudfront do not register these endpoint routes at cloudfront
         */
        pattern: ".$/**",
      }
    ),
  ],
});
export default defineConfig(() => {
  return {
    plugins: [
      /**
       * Register the define project handler configuration
       */
      SpaceLayerConfig,

      // See https://vitejs.dev/guide/features.html#transform-srcset
      qwikCity({
        routesDir: join(__dirname, "src", "routes"),
      }),
      qwikVite(),
      cloudfront({
        host: `https://${SpaceLayerConfig.LAYERS_STATS[1].CF_DOMAIN}/${SpaceLayerConfig.LAYER_IDS[1]}`,
      }),

      // init spaces plugin
      //! Only dev mode export
      inspect({
        enabled: true,
      }),
      vitePluginDetaVersion({
        handler: (version) => {
          console.log("DetaVersion: ", version);
        },
      }),
      //
    ],
  };
});
```

- Optional: Add the `.well-known/deta/version` file to indicate you will bundle the files during the build.

```shell
 echo "HANDLE_PROJECT_VERSION" >.well-known/deta/version
```

- Build and bundle the container.

vi. Push the built container to Deta.

```shell
# Move to the parent folder and build and push.
cd ..
deta push
```

- [Deploy the project](https://docs.deta.sh/docs/spaces/micro/#pre-built-runtime-features).

- Done!

## Deploy on Vercel

- Change the root directory to `src/` on the `vercel.json` file
- Rename the `index.html` file to `_index.html` on the `public/` directory

```shell
vercel dev
```

## Qwik related stuff

---

- [Qwik Docs](https://qwik.builder.io/)
- [Qwik Github](https://github.com/Builderio/qwik)
- [Qwik Awesome Topics](https://qwik.builder.io/resources/awesome-topics/)
- [Qwik Discord](https://qwik.builder.io/community/join-us)

## Tailwind related stuff

---

- [Tailwind Docs](https://tailwindcss.com/)
- [Tailwind Github](https://github.com/tailwindlabs/tailwindcss)
- [Tailwind Youtube Complete Video](https://www.youtube.com/watch?v=6zIuAyLZPH0)

## Author

---

<center>

## Giovanni Brasa, <br> [https://www.gioboa.com](https://www.gioboa.com)

</center>

## License

---

Distributed under the MIT License. See LICENSE for more information

Joke of the Day: Why do programmers prefer dark mode? Because light attracts bugs!
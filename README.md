# cal-menu-v2

This repo showcases a project setup for developing a simple calendar application in `Typescript`.

## Installation Steps

1. Fork this repository
2. `pnpm install`
3. `pnpm dev`
4. Open up [http://localhost:3000](http://localhost:3000/)

> **Note**: this is an experimental project setup.

## :scroll: Description

> Topic: Create a weekly calendar with TypeScript
>
> - The weekly calendar should show a specified number of weeks (e.g. the past three weeks and the next three weeks). Days are represented by "month-date", e.g. "Feb-24".
> - Each day can be in one of three states: "unavailable", "available", "<emoji+text>", with <emoji+text> being a row of emojis of any kind.
> - For each day, the calendar displays the corresponding state. By default, each day is "unavailable". The state of a specified day can be changed.
> - The calendar should be updated in the most efficient way possible if the state of some day changes.
> - The calendar can be reset to its default state at any time.
> - The code must be as modern and idiomatic TypeScript as possible. Try to use some TypeScript advanced types.
> - Ideally, create a library for this stateful calendar.
> - Targeted environment: Node.js.
> - [Optional]: Creating the calendar as a CLI (Command Line Interface) tool.
> - [Optional]: Weekly calendar displayed as a table in the CLI.

To-Do:
- [ ] Design calendar app [Google Calendar](https://calendar.google.com/calendar/u/0/r/week?pli=1)'s weekly view
- [ ] Sidebar for displaying weekly calendar
- [ ] Pass state between App and the week view

_note: soundwave for feb_20 -> empty string_

## :boom: Technologies & Tools

- Stack: [Next.js 13](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/)
- VCS: [Github](https://github.com).
- AI-powered search: `Genie`.
- Node Version Manager: [asdf](https://asdf-vm.com/)
- IDE: [VSCode](https://code.visualstudio.com) `Insiders`
- NPM Package Manager: [pnpm](https://pnpm.io/)

## :robot: Programming Setup with ASDF

Read more here: [How to install asdf - CLI/Build/Software Version Manager](https://asdf-vm.com/guide/getting-started.html#_3-install-asdf)

## :books: References

- [Broken UI](https://github.com/broken-ui)
- [Zenstack](https://github.com/zenstackhq)

> **Bonus Joke**: 
>
> "Why don't programmers like nature? It has too many bugs."
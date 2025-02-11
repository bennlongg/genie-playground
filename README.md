# genie-playground

Genie is a Clojure/ClojureScript code generation copilot for Shadow-CLJS repos. This repo experiments with the idea that enabling the AI model to explore the entire source repo will do just that, giving it a "worldview" it can use to generate more accurate code. The repo is a live implementation of [CoderPad](https://genie.coderpad.io) demo, where it is given an entire repository to aid in that "worldview."

By making the entire repo accessible to the AI model, it is able to:

- Generate code that "gels" the existing codebase's style
- Follow any coding standards as it learns them by viewing the entire repo
- Operate on new or rarely used APIs, libraries, and frameworks by learning them within the context of the repo

The example repo operates using the included `genie` command-line executable, which works as follows.

## Installation

Run the setup guided install script from any Unix-like terminal:

```shell
export GENIE_PLAYGROUND_DIRECTORY=/usr/local/bin # or wherever you want to put it
bash <(curl -s https://raw.githubusercontent.com/cosineaix/genie-playground/main/scripts/install_playground.sh)
genie --help # the command line executable
genie -b # open browser Hackpad
```

## Hackpad browser

To open the hackpad browser (which is where you can Create and Edit code and files), simply enter:

```shell
genie -b
```

In the directory you want to be working on, and you will be guided through the rest!

OK, yes, this is a very FUN project! 😆🎉 yeet!

   _
 _(\<   genie!
     /

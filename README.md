# touchPL
Visual syntax optimized for displaying source code on handheld devices. Try it out [here](https://balzss.github.io/touchPL/).
[Imgur](http://i.imgur.com/WAbkBOy.gif)

## Why?
This is the first part of my work-in-progress touch based code editor/IDE. It's a visual syntax for JavaScript.

The goal is a code editing environment where the creation and the manipulation of the code is done through a touchscreen on a vertically oriented device (usually smartphone).

The majority of this project only exists in conceptual form but I needed some feedback on the visual representation so I created [this demo sandbox](https://balzss.github.io/touchPL/).

The syntax implements almost all the ES5 features with the exception of: debugger statement, labeled statement, exceptions, do while loop and sequence expression.

## How?
The code transformation is done by parsing the js code to an abstract syntax tree (AST). I'm using [acorn](https://github.com/ternjs/acorn) to that but it should work fine with every [estree](https://github.com/estree/estree) compatible parser generator.

The generated AST is a list of js objects wich is given to a [vue](https://github.com/vuejs/vue) app that I created custom components for to generate HTML based on the nodes. After that it's just the matter of CSS to have it displayed the way I want.

If you want a more in depth view of the process you may consider checking out the source code.

List of the libraries being used:
- [ace editor](https://github.com/ajaxorg/ace) for the code editor on the demo page
- [acorn](https://balzss.github.io/touchPL/) for the js to ast generation
- [vue](https://github.com/vuejs/vue) for generation HTML from the AST
- I also used quite extensively the [astexplorer.net](https://astexplorer.net/) to help me construct the AST -> HTML bit of the app

## Other
- If you have any idea, suggestion, request or critique please [open an issue](https://github.com/balzss/touchPL/issues)
- You can also contact me at [balazs.saros@gmail.com](mailto:balazs.saros@gmail.com)
- Licensed under the GPLv3
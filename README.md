## touchPL
> visual syntax optimized for displaying source code on handheld devices

## Why?
This is the first part of my work-in-progress touch based code editor/IDE. It's a visual syntax for JavaScript.

The goal is a code editing environment where the creation and the manipulation of the code is done through a touchscreen on a vertically oriented device (usually smartphone).

The majority of this project only exists in conceptual form but I needed some feedback on the visual representation so I created this demo sandbox.

The syntax implements almost all the ES5 features with the exception of: debugger statement, labeled statement, exceptions, do while loop and sequence expression.

## How?
The code transformation is done by parsing the js code to an abstract syntax tree (AST). I'm using acorn to that but it should work fine with every estree compatible parser.

The generated AST is a list of js objects wich is given to a vue.js app that I created custom components for to generate HTML based on the nodes. After that it's just the matter of CSS to have it displayed the way I want.

If you want a more in depth view of the process you may consider checking out the source code.

List of the libraries being used:
- ace editor for the code editor on the demo page
- acorn for the js to ast generation
- vue.js for generation HTML from the AST
- I also used quite extensively the astexplorer to help me construct the AST -> HTML bit of the app

## Other
- If you have any idea, suggestion, request or critique please open an issue
- You can also contact me at balazs.saros@gmail.com
- Licensed under the GPLv3
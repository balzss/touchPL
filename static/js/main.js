function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    // add a zero in front of numbers<10
    m = checkTime(m);
    document.getElementById('time').innerHTML = h + ":" + m;
    t = setTimeout(function () {
        startTime()
    }, 20 * 1000);
}
startTime();


var editor = ace.edit("editor");
editor.on("input", function () {
    try {
        app.$data.astBody = acorn.parse(editor.getValue());
    } catch (error) {
        console.log('error');
    }
});
editor.setTheme("ace/theme/chrome");

editor.getSession().setMode("ace/mode/javascript");
editor.getSession().setUseWrapMode(true);
editor.setValue(`for (var i = 1; i <= 20; i++) {
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}`, 1);
editor.getSession().setUseWorker(false);
editor.setHighlightActiveLine(false);

var textWhy = `<h1>Why?</h1><p>
This is the first part of my work-in-progress touch based code editor/IDE. It's a visual syntax for JavaScript.</p>
<p>The goal is a code editing environment where the creation and the manipulation of the code is done through a touchscreen on a vertically oriented device (usually smartphone).</p>
<p>The majority of this project only exists in conceptual form but I needed some feedback on the visual representation so I created this demo sandbox.
<p>The syntax implements almost all the ES5 features with the exception of: debugger statement, labeled statement, exceptions, do while loop and sequence expression.
<p>Please consider trying it out and giving your thougths, feedback, ideas or critiques <a href="https://github.com/balzss/touchPL/issues">here</a>.</p>`;

var textHow = `<h1>How?</h1><p>
The code transformation is done by parsing the js code to an abstract syntax tree (AST). I'm using <a href="https://github.com/ternjs/acorn">acorn</a> to that but it should work fine with every <a href="#">estree</a> compatible parser.</p>
<p>The generated AST is a list of js objects wich is given to a <a href="https://github.com/vuejs/vue">vue</a> app that I created custom components for to generate HTML based on the nodes. After that it's just the matter of CSS to have it displayed the way I want.</p>
<p>If you want a more in depth view of the process you may consider checking out the <a href="#">source code</a> on github. </p>
<p>List of the libraries being used: <ul>
<li><a href="https://github.com/ajaxorg/ace">ace editor</a> for the code editor on the demo page</li>
<li><a href="https://github.com/ternjs/acorn">acorn</a> for the js to ast generation</li>
<li><a href="https://github.com/vuejs/vue">vue</a> for generation HTML from the AST</li>
<li>I also used quite extensively the <a href="https://astexplorer.net/">astexplorer.net</a> to help me construct the AST -> HTML bit of the app</li>
</ul></p>`;

function slide(text) {
    document.getElementById('devices').style.transform = "translateX(-100%)";
    var info = document.getElementById('info');
    info.innerHTML = `
<h2 class="info-title" onclick="back()"><i class="material-icons" style="font-size: 20px; padding: 12px 4px 4px 4px;">arrow_back</i>Back to the demo</h2>
` + text;
    info.style.transform = "translateX(0)";
}

function back() {
    document.getElementById('devices').style.transform = "translateX(0)";
    var info = document.getElementById('info');
    info.style.transform = "translateX(100%)";
}
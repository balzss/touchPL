webpackJsonp([1],{

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

const acorn = __webpack_require__(2);
const ace = __webpack_require__(3);
__webpack_require__(4);
__webpack_require__(5);

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('BlockStatement', {
    props: ['props'],
    template: '<div>' + '<component :is="node.type" v-for="node in props.body" :props="node"/>' + '</div>'
});

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('VariableDeclaration', {
    props: ['props'],
    template: '<div>' + '<div class="header card teal" v-for="d in props.declarations"><span class="scnd">var </span>{{ d.id.name }} ' + '<component :is="d.init.type" :props="d.init" v-if="d.init"/>' + '</div>' + '</div>'
});

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('EmptyStatement', {
    template: '<div></div>'
});

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('Identifier', {
    props: ['props'],
    template: '<div class="header card atom">{{ props.name }}</div>'
});

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('Literal', {
    props: ['props'],
    template: '<div class="header card atom">{{ props.raw }}</div>'
});

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('ThisExpression', {
    template: '<div class="header card grey">this</div>'
});

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('BreakStatement', {
    template: '<div class="header card grey">break</div>'
});

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('ContinueStatement', {
    template: '<div class="header card grey">continue</div>'
});

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('ExpressionStatement', {
    props: ['props'],
    template: '<component v-else :is="props.expression.type" :props="props.expression"/>'
});

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('UpdateExpression', {
    props: ['props'],
    template: '<div>' + '<component :is="props.argument.type" :props="props.argument"/>' + '<div class="header card chain red">{{ props.operator }}</div>' + '</div>'
});

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('UnaryExpression', {
    props: ['props'],
    template: '<div>' + '<div class="header card chain-bottom red">{{ props.operator }}</div>' + '<component :is="props.argument.type" :props="props.argument"/>' + '</div>'
});

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('MemberExpression', {
    props: ['props'],
    template: '<div>' + '<component :is="props.object.type" :props="props.object"/>' + '<component :is="props.property.type" :props="props.property" class="chain red" :class="{computed: props.computed}"/>' + '</div>'
});

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('CallExpression', {
    props: ['props'],
    template: '<div>' + '<component v-if="this.isME()" :is="props.callee.object.type" :props="props.callee.object"/>' + '<div class="header card blue" :class="{ chain: isME()}" >' +
    // '<ExpressionStatement v-if="props.callee.type == \'FunctionExpression\'" :props="props.callee"></ExpressionStatement>' +
    '<div >{{ this.getName() }}</div>' + '<component :is="a.type" v-for="a in props.arguments" :props="a"/>' + '</div>' + '</div>',
    methods: {
        isME: function () {
            return this.props.callee.type == 'MemberExpression';
        },
        isFE: function () {
            return this.props.callee.type == 'FunctionExpression';
        },
        getName: function () {
            return this.props.callee.type == 'MemberExpression' ? this.props.callee.property.name : this.props.callee.name;
        }
    }
});

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('FunctionExpression', {
    props: ['props'],
    template: '<div class="card" ><div class="header blue"> <span class="scnd">function</span> ' + '<div v-for="p in props.params" class=" grey header card"> {{ p.name }} </div>' + '</div>' + '<div class="header amber">' + '<BlockStatement :props="props.body"/>' + '</div>' + '</div>'
});

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('NewExpression', {
    props: ['props'],
    template: '<div>' + '<component is="props.callee.type" v-if="this.isME()" :props="props.callee.object"/>' + '<div class="header card amber" :class="{chain: this.isME()}" ><span class="scnd">new </span> {{ this.getName() }}' + '<component :is="a.type" v-for="a in props.arguments" :props="a"/>' + '</div>' + '</div>',
    methods: {
        isME: function () {
            return this.props.callee.type == 'MemberExpression';
        },
        getName: function () {
            return this.props.callee.type == 'MemberExpression' ? this.props.callee.property.name : this.props.callee.name;
        }
    }
});

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('BinaryExpression', {
    props: ['props'],
    template: '<div class="header card purple">' + '<component :is="props.left.type" :props="props.left"/>' + '<div class="infix">' + ' <div class="line"></div>' + ' <div class="circle">{{ props.operator }}</div>' + ' <div class="line"></div>' + '</div>' + '<component :is="props.right.type" :props="props.right"/>' + '</div>'
});

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('LogicalExpression', {
    props: ['props'],
    template: '<div class="header card purple">' + '<component :is="props.left.type" :props="props.left"/>' + '<div class="infix">' + ' <div class="line"></div>' + ' <div class="circle">{{ props.operator }}</div>' + ' <div class="line"></div>' + '</div>' + '<component :is="props.right.type" :props="props.right"/>' + '</div>'
});

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('ConditionalExpression', {
    props: ['props'],
    template: '<div class="header card brown">' + '<component :is="props.test.type" :props="props.test"/>' + '<div class="infix">' + ' <div class="line"></div>' + ' <div class="circle">?</div>' + ' <div class="line"></div>' + '</div>' + '<component :is="props.consequent.type" :props="props.consequent"/>' + '<div class="infix">' + ' <div class="line"></div>' + ' <div class="circle">:</div>' + ' <div class="line"></div>' + '</div>' + '<component :is="props.alternate.type" :props="props.alternate"/>' + '</div>'
});

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('AssignmentExpression', {
    props: ['props'],
    template: '<div class="card">' + '<component :is="props.left.type" :props="props.left"/>' + '<div class="assignment header grey"> {{ props.operator }}' + '<component :is="props.right.type" :props="props.right"/>' + '</div></div>'
});

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('ForStatement', {
    props: ['props'],
    template: '<div class="card"><div class="header brown">for' + '<component :is="props.init.type" :props="props.init"/>' + ' <div class="line"></div>' + '<component :is="props.test.type" :props="props.test"/>' + ' <div class="line"></div>' + '<component :is="props.update.type" :props="props.update"/>' + '</div>' + '<div class="header orange">' + '<BlockStatement :props="props.body"/>' + '</div>' + '</div>'
});

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('ReturnStatement', {
    props: ['props'],
    template: '<div class=" header card grey" > return ' + '<component :is="props.argument.type" :props="props.argument"/>' + '</div>'
});

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('ForInStatement', {
    props: ['props'],
    template: '<div class="card"><div class="header brown"> for' + '<component :is="props.left.type" :props="props.left"/>' + '<div class="infix">' + ' <div class="line"></div>' + ' <div class="circle small">in</div>' + ' <div class="line"></div>' + '</div>' + '<component :is="props.right.type" :props="props.right"/>' + '</div>' + '<div class="header orange">' + '<BlockStatement :props="props.body"/>' + '</div>' + '</div>'
});

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('WhileStatement', {
    props: ['props'],
    template: '<div class="card"><div class="header brown"> while' + '<component :is="props.test.type" :props="props.test"/>' + '</div>' + '<div class="header orange">' + '<BlockStatement :props="props.body"/>' + '</div>' + '</div>'
});

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('IfStatement', {
    props: ['props', 'hasElse'],
    template: '<div class="card">' + '<div class="header green"> <span v-if="hasElse">else </span> if' + '<component :is="props.test.type" :props="props.test"/>' + '</div>' + '<div class="header cyan">' + '<component :is="props.consequent.type" :props="props.consequent"/>' + '</div>' + '<div v-if="props.alternate">' + '<IfStatement class="elseif" v-if="props.alternate.type == \'IfStatement\'" :props="props.alternate" :hasElse="true"/>' + '<div v-else class="header green"> else' + '<component :is="props.alternate.type" :props="props.alternate"/>' + '</div>' + '</div>' + '</div>'
});

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('SwitchStatement', {
    props: ['props'],
    template: '<div class="card">' + '<div class="header">switch' + '<component :is="props.discriminant.type" :props="props.discriminant"/>' + '</div>' + '<div v-for="c in props.cases" class="dict-item">' + '<div class="header grey">case' + '<component :is="c.test.type" :props="c.test"/>' + '</div>' + '<BlockStatement class="header" :props="{body: c.consequent}"/>' + '</div>' + '</div>'
});

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('ArrayExpression', {
    props: ['props'],
    template: '<div class="card list">' + '<div class="header list-header">Array</div>' + '<div v-for="e in props.elements" class="list-item">' + '<component :is="e.type" :props="e"/>' + '</div>' + '</div>'
});

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('ObjectExpression', {
    props: ['props'],
    template: '<div class="card list">' + '<div class="header">Object</div>' + '<div v-for="p in props.properties" class=" dict-item">' + '<div class="header grey">' + '<span v-if="p.key.type == \'Identifier\'">{{ p.key.name }}</span>' + '<span v-else>{{ p.key.raw }}</span>' + '</div>' + '<div class="header">' + '<component :is="p.value.type" :props="p.value"/>' + '</div>' + '</div>' + '</div>'
});

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('FunctionDeclaration', {
    props: ['props'],
    template: '<div class="card">' + '<div class="header red">' + '<span class="scnd">function </span>{{ props.id.name }}' + '<div v-for="p in props.params" class=" grey header card"> {{ p.name }} </div>' + '</div>' + '<BlockStatement class="header amber" :props="props.body"/>' + '</div>'
});

var ast = acorn.parse('var x = 1');

var app = new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
    el: '#main',
    data: {
        astBody: ast
    },
    template: '<div id="app">' + '<BlockStatement :props="astBody"></BlockStatement></div>',
    methods: {
        compile: function () {
            var x = document.getElementById("code-editor").value;
            var ast = acorn.parse(x);
            this.astBody = ast.body;
        }
    }
});

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

var t;
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    // add a zero in front of numbers<10
    m = checkTime(m);
    document.getElementById('time').innerHTML = h + ":" + m;
    t = setTimeout(function () {
        startTime();
    }, 20 * 1000);
}
startTime();

var editor = ace.edit("editor");
editor.$blockScrolling = Infinity;
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

var textWhy = `<h2>Why?</h2><p>
This is the first part of my work-in-progress touch based code editor/IDE. It's a visual syntax for JavaScript.</p>
<p>The goal is a code editing environment where the creation and the manipulation of the code is done through a touchscreen on a vertically oriented device (usually smartphone).</p>
<p>The majority of this project only exists in conceptual form but I needed some feedback on the visual representation so I created this demo sandbox.
<p>The syntax implements almost all the ES5 features with the exception of: debugger statement, labeled statement, exceptions, do while loop and sequence expression.
<p>Please consider trying it out and giving your thougths, feedback, ideas or critiques <a href="https://github.com/balzss/touchPL/issues">here</a>.</p>`;

var textHow = `<h2>How?</h2><p>
The code transformation is done by parsing the js code to an abstract syntax tree (AST). I'm using <a href="https://github.com/ternjs/acorn">acorn</a> for that but it should work fine with every <a href="#">estree</a> compatible parser.</p>
<p>The generated AST is a list of js objects wich is given to a <a href="https://github.com/vuejs/vue">vue</a> app that I created custom components for to generate HTML based on the nodes. After that it was just the matter of CSS to display it the way I wanted.</p>
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
<h2 class="info-title" onclick="back()"><i class="material-icons" style="font-size: 16px; padding: 14px 4px 4px 4px;">arrow_back</i>Back to the demo</h2>
` + text;
    info.style.transform = "translateX(0)";
}

function back() {
    document.getElementById('devices').style.transform = "translateX(0)";
    var info = document.getElementById('info');
    info.style.transform = "translateX(100%)";
}

/***/ })

},[7]);
//# sourceMappingURL=app.3387b79ea0c8720d1377.js.map
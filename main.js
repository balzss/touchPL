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
Vue.component('BlockStatement', {
    props: ['props'],
    template: '<div>' +
    '<component :is="node.type" v-for="node in props.body" :props="node"/>' +
    '</div>'
});

var toParse = 'one.two(half(two, and, half)).three("four", five).six(999).seven.eight; one(1).two.three; one.two.three(3); one(1).two(2).three; "asd".new(); sum(2, 4, 5) + "a"; new Date(add(1, 2)).len; var a = init(1, 3, 4); var d = new Date(1234); var x = 1, y = 2; (5 + 4).get(); i++; 1 + 1 * 1; var x = asd[a]; x += 1; a = [1, 2, 3]; var b = {a: function(asd){1 + 1;}, b: "asd", c: qqq}; if(true) {asd(123); 1 + 1;} else { 1 + 1;}function yolo(p1, p2, p3) { var i = p1 + p2 + p3; i++; return asd(123);} for(var i = 0; i < 10; i++){doSom(thing);} while(i < 10) { i++; print(i); continue; break;} switch (a) {case 0: doStruff(); break; case 1: other(); break; case 2: eh(); break;} for(var i in lList){doStuff();}';

Vue.component('VariableDeclaration', {
    props: ['props'],
    template: '<div>' +
    '<div class="header card teal" v-for="d in props.declarations"><span class="scnd">var </span>{{ d.id.name }} ' +
    '<component :is="d.init.type" :props="d.init" v-if="d.init"/>' +
    '</div>' +
    '</div>'
});

Vue.component('EmptyStatement', {
    template: '<div></div>'
});

Vue.component('Identifier', {
    props: ['props'],
    template: '<div class="header card atom">{{ props.name }}</div>'
});

Vue.component('Literal', {
    props: ['props'],
    template: '<div class="header card atom">{{ props.raw }}</div>'
});

Vue.component('ThisExpression', {
    template: '<div class="header card grey">this</div>'
});

Vue.component('BreakStatement', {
    template: '<div class="header card grey">break</div>'
});

Vue.component('ContinueStatement', {
    template: '<div class="header card grey">continue</div>'
});

Vue.component('ExpressionStatement', {
    props: ['props'],
    template: '<component v-else :is="props.expression.type" :props="props.expression"/>'
});

Vue.component('UpdateExpression', {
    props: ['props'],
    template: '<div>' +
    '<component :is="props.argument.type" :props="props.argument"/>' +
    '<div class="header card chain red">{{ props.operator }}</div>' +
    '</div>'
});


Vue.component('UnaryExpression', {
    props: ['props'],
    template: '<div>' +
    '<div class="header card chain-bottom red">{{ props.operator }}</div>' +
    '<component :is="props.argument.type" :props="props.argument"/>' +
    '</div>'
});

Vue.component('MemberExpression', {
    props: ['props'],
    template: '<div>' +
    '<component :is="props.object.type" :props="props.object"/>' +
    '<component :is="props.property.type" :props="props.property" class="chain red" :class="{computed: props.computed}"/>' +
    '</div>'
});

Vue.component('CallExpression', {
    props: ['props'],
    template: '<div>' +
    '<component v-if="this.isME()" :is="props.callee.object.type" :props="props.callee.object"/>' +
    '<div class="header card blue" :class="{ chain: isME()}" data-name="FnCall">' +
    // '<ExpressionStatement v-if="props.callee.type == \'FunctionExpression\'" :props="props.callee"></ExpressionStatement>' +
    '<div >{{ this.getName() }}</div>' +
    '<component :is="a.type" v-for="a in props.arguments" :props="a"/>' +
    '</div>' +
    '</div>',
    methods: {
        isME: function () { return this.props.callee.type == 'MemberExpression'; },
        isFE: function () { return this.props.callee.type == 'FunctionExpression'; },
        getName: function () { return this.props.callee.type == 'MemberExpression' ? this.props.callee.property.name : this.props.callee.name; }
    }
});

Vue.component('FunctionExpression', {
    props: ['props'],
    template: '<div class="card" data-name="AnonFn"><div class="header blue"> <span class="scnd">function</span> ' +
    '<div v-for="p in props.params" class=" grey header card"> {{ p.name }} </div>' +
    '</div>' +
    '<div class="header amber">' +
    '<BlockStatement :props="props.body"/>' +
    '</div>' +
    '</div>'
});

Vue.component('NewExpression', {
    props: ['props'],
    template: '<div>' +
    '<component is="props.callee.type" v-if="this.isME()" :props="props.callee.object"/>' +
    '<div class="header card amber" :class="{chain: this.isME()}" :data-name="this.getName()"><span class="scnd">new </span> {{ this.getName() }}' +
    '<component :is="a.type" v-for="a in props.arguments" :props="a"/>' +
    '</div>' +
    '</div>',
    methods: {
        isME: function () { return this.props.callee.type == 'MemberExpression'; },
        getName: function () {
            return this.props.callee.type == 'MemberExpression' ? this.props.callee.property.name : this.props.callee.name;
        }
    }
});

Vue.component('BinaryExpression', {
    props: ['props'],
    template: '<div class="header card purple">' +
    '<component :is="props.left.type" :props="props.left"/>' +
    '<div class="infix">' +
    ' <div class="line"></div>' +
    ' <div class="circle">{{ props.operator }}</div>' +
    ' <div class="line"></div>' +
    '</div>' +
    '<component :is="props.right.type" :props="props.right"/>' +
    '</div>'
});

Vue.component('LogicalExpression', {
    props: ['props'],
    template: '<div class="header card purple">' +
    '<component :is="props.left.type" :props="props.left"/>' +
    '<div class="infix">' +
    ' <div class="line"></div>' +
    ' <div class="circle">{{ props.operator }}</div>' +
    ' <div class="line"></div>' +
    '</div>' +
    '<component :is="props.right.type" :props="props.right"/>' +
    '</div>'
});

Vue.component('ConditionalExpression', {
    props: ['props'],
    template: '<div class="header card purple">' +
    '<component :is="props.test.type" :props="props.test"/>' +
    '<div class="infix">' +
    ' <div class="line"></div>' +
    ' <div class="circle">?</div>' +
    ' <div class="line"></div>' +
    '</div>' +
    '<component :is="props.consequent.type" :props="props.consequent"/>' +
    '<div class="infix">' +
    ' <div class="line"></div>' +
    ' <div class="circle">:</div>' +
    ' <div class="line"></div>' +
    '</div>' +
    '<component :is="props.alternate.type" :props="props.alternate"/>' +
    '</div>'
});

Vue.component('AssignmentExpression', {
    props: ['props'],
    template: '<div class="card">' +
    '<component :is="props.left.type" :props="props.left"/>' +
    '<div class="assignment header grey"> {{ props.operator }}' +
    '<component :is="props.right.type" :props="props.right"/>' +
    '</div></div>'
});

Vue.component('ForStatement', {
    props: ['props'],
    template: '<div class="card"><div class="header blue">for' +
    '<component :is="props.init.type" :props="props.init"/>' +
    ' <div class="line"></div>' +
    '<component :is="props.test.type" :props="props.test"/>' +
    ' <div class="line"></div>' +
    '<component :is="props.update.type" :props="props.update"/>' +
    '</div>' +
    '<div class="header amber">' +
    '<BlockStatement :props="props.body"/>' +
    '</div>' +
    '</div>'
});

Vue.component('ReturnStatement', {
    props: ['props'],
    template: '<div class=" header card grey" data-name="Return"> return ' +
    '<component :is="props.argument.type" :props="props.argument"/>' +
    '</div>'
});

Vue.component('ForInStatement', {
    props: ['props'],
    template: '<div class="card" data-name="ForIn"><div class="header blue"> for' +
    '<component :is="props.left.type" :props="props.left"/>' +
    '<div class="infix">' +
    ' <div class="line"></div>' +
    ' <div class="circle small">in</div>' +
    ' <div class="line"></div>' +
    '</div>' +
    '<component :is="props.right.type" :props="props.right"/>' +
    '</div>' +
    '<div class="header amber">' +
    '<BlockStatement :props="props.body"/>' +
    '</div>' +
    '</div>'
});

Vue.component('WhileStatement', {
    props: ['props'],
    template: '<div class="card"><div class="header blue"> while' +
    '<component :is="props.test.type" :props="props.test"/>' +
    '</div>' +
    '<div class="header amber">' +
    '<BlockStatement :props="props.body"/>' +
    '</div>' +
    '</div>'
});

Vue.component('IfStatement', {
    props: ['props', 'hasElse'],
    template: '<div class="card">' +
    '<div class="header red"> <span v-if="hasElse">else </span> if' +
    '<component :is="props.test.type" :props="props.test"/>' +
    '</div>' +
    '<div class="header amber">' +
    '<component :is="props.consequent.type" :props="props.consequent"/>' +
    '</div>' +
    '<div v-if="props.alternate">' +
    '<IfStatement class="elseif" v-if="props.alternate.type == \'IfStatement\'" :props="props.alternate" :hasElse="true"/>' +
    '<div v-else class="header red"> else' +
    '<component :is="props.alternate.type" :props="props.alternate"/>' +
    '</div>' +
    '</div>' +
    '</div>'
});

Vue.component('SwitchStatement', {
    props: ['props'],
    template: '<div class="card">' +
    '<div class="header">switch' +
    '<component :is="props.discriminant.type" :props="props.discriminant"/>' +
    '</div>' +
    '<div v-for="c in props.cases" class="dict-item">' +
    '<div class="header grey">case' +
    '<component :is="c.test.type" :props="c.test"/>' +
    '</div>' +
    '<BlockStatement class="header" :props="{body: c.consequent}"/>' +
    '</div>' +
    '</div>'
});

Vue.component('ArrayExpression', {
    props: ['props'],
    template: '<div class="card list">' +
    '<div class="header list-header">Array</div>' +
    '<div v-for="e in props.elements" class="list-item">' +
    '<component :is="e.type" :props="e"/>' +
    '</div>' +
    '</div>'
});

Vue.component('ObjectExpression', {
    props: ['props'],
    template: '<div class="card list">' +
    '<div class="header">Object</div>' +
    '<div v-for="p in props.properties" class=" dict-item">' +
    '<div class="header grey">' +
    '<span v-if="p.key.type == \'Identifier\'">{{ p.key.name }}</span>' +
    '<span v-else>{{ p.key.raw }}</span>' +
    '</div>' +
    '<div class="header">' +
    '<component :is="p.value.type" :props="p.value"/>' +
    '</div>' +
    '</div>' +
    '</div>'
});

Vue.component('FunctionDeclaration', {
    props: ['props'],
    template: '<div class="card">' +
    '<div class="header red">' +
    '<span class="scnd">function </span>{{ props.id.name }}' +
    '<div v-for="p in props.params" class=" grey header card"> {{ p.name }} </div>' +
    '</div>' +
    '<BlockStatement class="header amber" :props="props.body"/>' +
    '</div>'
});

var ast = acorn.parse('var x = 1');

var app = new Vue({
    el: '#main',
    data: {
        astBody: ast
    },
    template: '<div id="app">' +
    '<BlockStatement :props="astBody"></BlockStatement></div>',
    methods: {
        compile: function () {
            var x = document.getElementById("code-editor").value;
            var ast = acorn.parse(x);
            this.astBody = ast.body;
        }
    }
});


var editor = ace.edit("editor");
editor.on("input", function () {
    app.$data.astBody = acorn.parse(editor.getValue());
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


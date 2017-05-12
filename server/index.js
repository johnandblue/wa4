const Koa = require('koa');
const app = new Koa();
const path = require('path');
const serve = require('koa-static');
const Router = require('koa-router');
const router = new Router();
const Handlebars = require('handlebars');


var source = "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
             "{{kids.length}} kids:</p>" +
             "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";
var template = Handlebars.compile(source);

var data = { "name": "Alan", "hometown": "Somewhere, TX",
             "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};
var result = template(data);


app
  // .use(serve('../client'))
  .use(router.routes())
  .use(router.allowedMethods());

router
  .get('/', function (ctx, next) {
    ctx.body = result;
  })


app.listen(3000);
console.log('server running...');

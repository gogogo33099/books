const koa = require ('koa') ;
const static = require ('koa-static');
const path = require ('path');

const app = new koa ();

app.use(async(ctx, next) => {
    if (ctx.request.path === '/books') {
        ctx.request.path = '/books/'
    }
    ctx.request.path = ctx.request.path.replace('/books/', '/');
    await next();
});

app.use(static(path.join(__dirname, './')));

app.listen
app.listen(8086, "0.0.0.0", () => {
    console.log ('server is running at http://localhost:8086/books');
});
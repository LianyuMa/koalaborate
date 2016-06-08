const koa = require('koa');
const app = module.exports = koa();

app.use(function* resTime(next) {
  const start = new Date;
  yield next;
  const ms = new Date - start;
  this.set('X-Response-Time', `${ms}ms`);
});

app.use(function* logger(next) {
  const start = new Date;
  yield next;
  const ms = new Date - start;
  console.log(`${this.method} ${this.originalUrl} ${this.status} - ${ms}ms`);
});

app.use(function* contentLength(next) {
  yield next;
  if (!this.body) return;
  this.set('Content-Length', this.body.length);
});

app.use(function* renderBody(next) {
  yield next;
  if (this.path !== '/') return;
  this.body = 'Koalaborate';
});

app.listen(3000);
console.log('listening on port 3000');

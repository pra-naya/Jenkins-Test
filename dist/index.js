import express from 'express';
var app = express();
var PORT = process.env.PORT || 3000;
app.get('/', function (_req, res) {
  res.send('Hello from Express Build!');
});
var server;
if (process.env.NODE_ENV !== 'test') {
  server = app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
  });
}
export { app, server };
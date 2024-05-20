const jsonServer = require('json-server');
const auth = require('json-server-auth');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.db = router.db;

server.use(middlewares);

server.post('/login', (req, res, next) => {
  const { email, password } = req.body;
  const user = server.db.get('users').find({ email }).value();

  if (user && user.password === password) {
    const token = auth.createToken(user);
    res.jsonp({ accessToken: token, fullName: user.fullName });
  } else {
    res.status(401).jsonp({ error: 'Invalid credentials' });
  }
});

server.use(auth);
server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running on port 3000');
});

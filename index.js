const SERVER_PORT = process.env.PORT
const app = require('./src/App')(SERVER_PORT)

app.start()
//running server and implementing some logging and everything related to the server in this file to keep the server running and the app file clean and focused on the routes and middlewares.\

import app from './app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})
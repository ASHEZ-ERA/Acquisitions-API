// setting up express server with the right middlewares and routes
import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(200).send('Welcome to the Acquisitions API' );
}); 

export default app;
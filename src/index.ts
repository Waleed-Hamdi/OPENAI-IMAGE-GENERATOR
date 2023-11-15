import express from 'express';
import router from './Routes/openaiRoutes';
import dotenv from 'dotenv';
import bodyParser from 'body-parser'


dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());

app.use('/openai',router);


app.listen(port,()=>{
    console.log('hello waleed from server');
})


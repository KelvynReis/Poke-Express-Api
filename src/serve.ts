import express from 'express';
import { router } from './router';

const app = express();

const port = 3333

app.use(express.json())
app.use( router )

app.listen(port, ()=>{
    console.log(`server is running ${port}`);
    
})
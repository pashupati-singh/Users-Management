import Express from 'express'
import { connection } from './DB/db.js';
import { usersRoute } from './Routes/Users.Routes.js';
import cors from "cors";

const app = Express();
app.use(Express.json());
app.use(cors())

app.use('/users',usersRoute)

app.get('/',(req,res)=>{
    res.json("hello");
})


app.listen(8080,async()=>{
    try {
        console.log("port is running")
        await connection;
        console.log("server is connected")
    } catch (error) {
        console.log(error);
    }
})
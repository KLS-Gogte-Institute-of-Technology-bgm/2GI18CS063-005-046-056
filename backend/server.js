const express= require('express');
const app=express();
const port= process.env.PORT || 8001
app.get('/',(req,res)=>res.status(200).send('Hello Kapil'));
app.listen(port, ()=>console.log('listning on localhost: '+port))
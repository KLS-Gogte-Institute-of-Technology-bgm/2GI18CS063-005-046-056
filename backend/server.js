const axios=require('axios');
const Cors=require('cors');
const { response } = require('express');
const express= require('express');
const app=express();
const port= process.env.PORT || 8001
app.use(Cors())
app.get('/',(req,res)=>res.status(200).send('Hello Kapil'));
app.get("/getwordmeaning/:word/:useremail",function(req,res){
    var word=req.params.word;
    var url="https://api.dictionaryapi.dev/api/v2/entries/en/"+word
    axios.get(url).then(response=>{
        var responsedata=response.data
        var wordsearched=responsedata[0].word
        var wordtext=responsedata[0].phonetics[0].text
        var audiolink=responsedata[0].phonetics[0].audio
        var meanings=responsedata[0].meanings
        //res.send(meanings)
        res.send({"word":wordsearched,"wordtext":wordtext,"audiolink":audiolink, "meanings":meanings})
    })
    .catch(error =>{
        if(error.response.data.title=="No Definitions Found"){
            res.send("Word not found")
        };
        
    });
    });
app.get("/test",(req,res)=>{
    res.send("test")
})
app.listen(port, ()=>console.log('listning on localhost: '+port))
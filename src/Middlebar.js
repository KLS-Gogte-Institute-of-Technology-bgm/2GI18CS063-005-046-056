import React,{useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import './Middlebar.css'
import SearchIcon from '@material-ui/icons/Search';
function Middlebar(props) {
    const [wordtosearch, setwordtosearch]=useState('')
    const[wordfound,setwordfound]=useState(true)
    const[searchclicked, setsearchclicked]=useState(false)
    const[formresponsedata,setformresponsedata]=useState([])
    const[wordvocabhistory,setwordvocabhistory]=useState([])
    useEffect(() => {
      async function fetchData() {
          const req = await axios.get("http://localhost:8001/getwordhistory/"+props.useremail)
          setwordvocabhistory(req.data)
      }
      fetchData();
    }, []);
    //onst[wordvocabhistory,setwordvocabhistory]=useState([])
    /*axios.get("http://localhost:8001/getwordhistory/"+props.useremail).then(res=>
      setwordvocabhistory(res.data)
    )*/
    const handlesubmit=(event)=>{
      setsearchclicked(true)
      event.preventDefault()
      console.log("Enterd handlesubmit")
      axios.get("http://localhost:8001/getwordmeaning/"+wordtosearch+"/"+props.useremail).then(res=>{
      setformresponsedata(res.data)
      console.log(formresponsedata)
      {if(formresponsedata !="Word not found"){
        var iswordinwordvocab=false
        wordvocabhistory.map(wordvocab=>{
          if(wordvocab.word==wordtosearch){
            iswordinwordvocab=true
          }
        })
        if(iswordinwordvocab==false){
          const newwordvocabhistory=wordvocabhistory.concat({_id:uuidv4(),word:wordtosearch});
          setwordvocabhistory(newwordvocabhistory)
        }
      }
    }
    }
      )
 
    }
    const handlechange=(event)=>{
      setwordtosearch(event.target.value)
    }
    const displaymeaning=()=>{
      if(searchclicked==true){
        if(wordfound==false){
          return(
            <h1>Word not found</h1>
          )
        }
      }
    }
  
    return (
       
      <div className="middlebar">
        <div className="search_bar">
          <div className="form_division">
            <form  onSubmit={handlesubmit}>
              <input className="form_input" type="text"  onChange={handlechange}/>
            </form>
           <button className="form_button" onClick={handlesubmit}><SearchIcon/></button>
          </div>
          
        
        {searchclicked?
        <Displaymeaning respdata={formresponsedata}/>:
        <h1></h1>
        }
      </div>












      <div className="words_search">
        <h1 style={{textAlign:"center"}}>Your Words</h1>
        {wordvocabhistory.map((vocabword) =>{
          const capitalword= vocabword.word.charAt(0).toUpperCase() + vocabword.word.slice(1)
          return(
            <div className="words_search_wordbox">
          <h2>{capitalword}</h2>
          </div>
          )
        })}
      </div>
        </div>
    )
}

function Displaymeaning(props){
  {
    if(props.respdata==null){
      console.log("props data is empty")
    }
  }
 { if (props.respdata=="Word not found"){
    return(
      <h1>Word not found</h1>
    )
      
      
  }
  else{
    {if(props.respdata.length!=0){
    return(
      <div className="word_responsediv">
    <h1>{props.respdata.word}</h1>
    <h1>{props.respdata.wordtext}</h1>
    <p style={{border:"1px solid black"}}>{props.respdata.audiolink}</p>
    {props.respdata.meanings.map(meaning =>{
      return(
      <div className="word_responsediv_meaning">
      <h2>{meaning.partOfSpeech}</h2>
      </div>)
    })

    }
    </div>
    )
  }
}
  }
}

}


    


export default Middlebar

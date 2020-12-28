import React,{useState} from 'react'
import axios from 'axios';
import './Middlebar.css'
import SearchIcon from '@material-ui/icons/Search';
function Middlebar(props) {
    const [wordtosearch, setwordtosearch]=useState('')
    const handlesubmit=(event)=>{
      console.log("Form submitted")
      console.log(wordtosearch)
      event.preventDefault()
      console.log(props.useremail)
      axios.get("http://localhost:8001/getwordmeaning/"+wordtosearch+"/"+props.useremail).then(res=>
        {if (res.data=="Word not found"){
          console.log("word not found")
          return(<h1>Word not found</h1>)
          
        }}
      )
        
    }
    const handlechange=(event)=>{
      setwordtosearch(event.target.value)
      console.log(event.target.value)
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
      <h1>{props.useremail}</h1>
      </div>
      <div className="words_search">
        <h1>Words Searched</h1>
        <h1>Words Searched</h1>
        <h1>Words Searched</h1>
        <h1>Words Searched</h1>
        <h1>Words Searched</h1>
        <h1>Words Searched</h1>
        <h1>Words Searched</h1>
        <h1>Words Searched</h1>
        <h1>Words Searched</h1>
        <h1>Words Searched</h1>
        <h1>Words Searched</h1>
        <h1>Words Searched</h1>
        <h1>Words Searched</h1>
        <h1>Words Searched</h1>
        <h1>Words Searched</h1>
        <h1>Words Searched</h1>
        <h1>Words Searched</h1>
        <h1>Words Searched</h1>
        <h1>Words Searched</h1>
        <h1>Words Searched</h1>
      </div>
        </div>
    )
}

export default Middlebar

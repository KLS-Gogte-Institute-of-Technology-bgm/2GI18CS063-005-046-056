import React,{useState} from 'react'
import './Middlebar.css'
function Middlebar() {
    const [wordtosearch, setwordtosearch]=useState('')
    const handlesubmit=(event)=>{
      console.log("Form submitted")
      console.log(wordtosearch)
      event.preventDefault()
    }
    const handlechange=(event)=>{
      setwordtosearch(event.target.value)
      console.log(event.target.value)
    }
    return (
       
        <div className="middlebar">
             <div className="search_bar">
      <form  onSubmit={handlesubmit}>
    <input className="form_input" type="text"  onChange={handlechange}/>
    <input  className="form_button" type="submit" value="Search" />
    </form>
      {wordtosearch}
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

import { useState } from "react";
import Navbar from "./Navbar";
import TextForm from "./TextForm";


function App() {


     const [btnname, setBtnname] = useState('Dark Mode')
     const [classname, setClassname] = useState('dark')
     const [mystyle, setMystle] = useState({
          backgroundColor: 'white',
          color: 'black'
     });
     const changeBg=()=>{
          if(mystyle.color === 'black'){
               setMystle({
                    color: 'white',
                    backgroundColor: 'rgb(35, 36, 37)',
                    transition: 'all ease .5s'
               })
               setBtnname('Light Mode')
               setClassname('primary')
          }else{
               setMystle({
                    color: 'black',
                    backgroundColor: 'white',
                    transition: 'all ease .5s'
               })
               setBtnname('Dark Mode')
               setClassname('dark')
          }
         
     }

     return (
          <div className="App"  style={mystyle}>
               <button id="btn" className={classname} onClick={changeBg}>{btnname}</button>
               <Navbar logo="Logo" home="Home" link="Link" dropdown="Dropdown" action="Dropdown" anotherAction="Another Action" somethingElseHere="Something" disabled="Disabled" search="Search"/>
               <TextForm/>
          </div>
     );
}

export default App;

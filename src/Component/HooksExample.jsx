import React, {Fragment,useState } from 'react'
import faker from "faker/locale/en_IND";
// to use JS or React hooks
const HooksExample =()=>{
    let [name,setName]=useState(faker.name.firstName());
    let [photo,setPhoto]=useState(faker.image.animals());
     /*for(let i=0;i<10;i++){
         useState()
     }*/
    /*let [pinki,setPinki] = useState("pinki");
     //first parameter is for current value .
     //second parameter is fof updating .
     let changeName=()=>{
        setPinki("shubham");*/
     //updating
    return (
        <Fragment>
            <h1> my name is {name}</h1>
    <p><img src={photo} alt="name" style={{width:'300px',height:'300px'}}/>
    <button onMouseEnter={()=> setName(faker.image.animals)}>Change Photo </button></p>
            <button onClick={()=> setName(faker.name.firstName)}>Updates Randon Names</button>
            {/* <h1>{pinki}  is Pinki is here and learning React Hooks </h1> */}
            {/* <button onClick={changeName}>ChangeName</button> */}
        </Fragment>
    );
};//react function 
export default HooksExample;

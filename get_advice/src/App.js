import { useEffect, useState } from "react";

function App(){
const [patchLogo, getPatch] = useState("");
const [flightNumber, getFN] = useState("");
const [date, getDate] = useState("");
const [name, getName] = useState("");
const [crew, getCrew] = useState("");

const crewRoles = [...crew];
console.log(crewRoles.map((d)=> d.role));

    async function getData(){
        const response = await fetch("https://api.spacexdata.com/v5/launches/latest");
        const data = await response.json();
        getPatch(data.links.patch.small);
        getFN(data.flight_number);
        getDate(data.date_local);
        getName(data.name);
        getCrew(data.crew);

        /*
        data.links.patch.small
        data.flight_number
        data.date_local
        data.name
        data.crew
        */

        //console.log(getCrew());
        

    };

    useEffect(()=>{
        //this function will update in the DOM
        //fetch something
        getData();
    },[]);

    //return from app
    return(
        <div>
            <h1>SpaceX info</h1>
            <h2><img src={patchLogo} alt="SpaceX Crew 5 Patch Logo"></img></h2>
            <ul>
                <li>Flight Number: {flightNumber}</li>             
                <li>Date: {date}</li>             
                <li>Group Name: {name}</li>             
                <li>Crew:<ul>
                            
                         </ul>
                </li>                   
            </ul>
        </div>
    );
};

export default App;
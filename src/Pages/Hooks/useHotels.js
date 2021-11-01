import { useEffect, useState } from "react"

const UseHotels=()=>{
    const [hotels,setHotels]=useState([]);
    useEffect(()=>{
       fetch('https://shielded-cliffs-29571.herokuapp.com/hotels')
        .then(res=>res.json())
        .then(data => setHotels(data))
    },[])
    return [hotels]
}
export default UseHotels;
import { useEffect, useState } from "react"

const UseHotels=()=>{
    const [hotels,setHotels]=useState([]);
    useEffect(()=>{
       fetch('http://localhost:5000/hotels')
        .then(res=>res.json())
        .then(data => setHotels(data))
    },[])
    return [hotels]
}
export default UseHotels;
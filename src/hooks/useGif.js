import axios from "axios";
import { useEffect, useState } from "react";
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) =>{
    const [loading,setloading]=useState('false');
    const [gif,setgif]=useState('');
    async function fetchData(tag){
        setloading(true);
        try{
            const {data} = await axios.get(tag ? `${url}&tag=${tag}`  : url);
            console.log(data);
            const imageSource = data.data.images.downsized_large.url;
            setgif(imageSource);
        }
        catch(e){
            console.log("Error occured");
        }
        setloading(false);
    }
    useEffect(()=>{
        fetchData(tag='car');
    },[])
    return {gif,loading,fetchData}
}
;

export default useGif;

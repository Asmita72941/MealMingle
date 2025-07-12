import { useState,useEffect } from "react";

const useCarousels = () => {
    const [listOfCarousels, setListOfCarousels] = useState([]);

    useEffect(()=>{
        fetchCarousels();
    },[])

    const fetchCarousels = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667");

        const json = await data.json();

        const carousels = json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;

        setListOfCarousels(carousels);

    }

    return listOfCarousels;
}

export default useCarousels;

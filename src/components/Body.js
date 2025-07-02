import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurant] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667");

        const json = await data.json();

        const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setListOfRestaurant(restaurants);
    }

    return(
        <div>
            <div className="res-container flex flex-wrap">
                {
                    listOfRestaurants.map(restaurant => <RestaurantCard key={restaurant?.info?.id} resData={restaurant}/>)
                }
            </div>
        </div>
    )
}

export default Body;

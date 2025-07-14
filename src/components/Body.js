import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Carousel from "./Carousel";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useCarousels from "../utils/useCarousels";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflinePage from "./OfflinePage";
import { withPromotedLabel } from "./RestaurantCard";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    // copy of listOfRestaurants
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const listOfCarousels = useCarousels();

    const [searchText, setSearchText] = useState("");

    const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

    useEffect(()=>{
        fetchData();
    },[]);


    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667");

        const json = await data.json();

        const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setListOfRestaurant(restaurants);
        setFilteredRestaurant(restaurants);
    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return <OfflinePage/>
    }

    if(listOfRestaurants.length == 0){
        return <Shimmer/>
    }

    return(
        <div>

            <div className="flex">

                <div className="m-3 p-3">

                    <input type="text" className="search-box border-black" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>

                    <button className="px-4 py-2 bg-green-100 rounded-b-lg m-4" onClick={()=>{
                        // filter the restaurant cards and update the UI
                        const filteredRes = listOfRestaurants.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurant(filteredRes);
                    }}>Search</button>

                </div>

                <div className="m-3 px-7 pt-7">
                    <button className="px-4 py-2 bg-gray-200 rounded-b-lg"
                        onClick={()=>{
                            const filteredList = listOfRestaurants.filter(res => res?.info?.avgRatingString > 4.4);
                            setFilteredRestaurant(filteredList);
                    }}>Top Rated Restaurants</button>
                </div>

            </div>

            <div className="flex">
                {
                    listOfCarousels.slice(0,11).map(cor => <Carousel key={cor.id} resCor={cor}/>)
                }
            </div>

            <div className="res-container flex flex-wrap">
                {
                    filteredRestaurant.map(restaurant => <Link key={restaurant?.info?.id} to={"/restaurants/"+restaurant?.info?.id}> 

                    {restaurant?.info?.avgRatingString >= 4.5 ? <PromotedRestaurantCard resData={restaurant}/> : <RestaurantCard resData={restaurant}/>}

                    </Link>)
                }   
            </div>

        </div> 
    )
}

export default Body;


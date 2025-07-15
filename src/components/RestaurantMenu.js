import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(0);

    if(resInfo == null){
        return <Shimmer/>
    }

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c?.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');

    return (
        <div className="text-center">
            <h1 className="font-bold text-2xl my-5">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")}</p>
            <h3>{costForTwoMessage}</h3>

            {/* Categories accordian */}

            {
                categories.map((category,index) => <RestaurantCategory key={category?.card?.card?.categoryId} data={category?.card?.card}
                showItems={index === showIndex ? true : false}
                setShowIndex={()=>setShowIndex(index)}
                />)
            }

        </div>
    )
} 

export default RestaurantMenu;

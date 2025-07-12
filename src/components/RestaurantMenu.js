import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    if(resInfo == null){
        return <Shimmer/>
    }

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    return (
        <div className="text-center">
            <h1 className="font-bold text-2xl my-5">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")}</p>
            <h3>{costForTwoMessage}</h3>
        </div>
    )
}

export default RestaurantMenu;

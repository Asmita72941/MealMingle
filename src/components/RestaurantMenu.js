import {useEffect,useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
    const [resInfo,setResInfo] = useState(null);

    const {resId} = useParams();

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        setResInfo(json.data);
    }

    if(resInfo===null) return <Shimmer/>;

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

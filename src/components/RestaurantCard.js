import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId} = resData?.info;


    return(
        <div className="res-card w-[260px] m-4 p-4 cursor-pointer hover:bg-gray-100">
            <img
                alt="res-logo"
                src={CDN_URL+cloudinaryImageId}/>
            <h3 className="font-bold py-1 text-lg">{name}</h3>
            <h4 className="font-medium">{cuisines.join(", ")}</h4>
            <h4 className="font-normal">{avgRating}</h4>
            <h4 className="text-sm">{costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard;

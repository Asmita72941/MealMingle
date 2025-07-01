import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return(
        <div>
            <div className="res-container flex flex-wrap">
                <RestaurantCard name="Meghna Foods" cuisine="fix thali, shambhar"/>
                <RestaurantCard name="KFC" cuisine="burger, butter chicken masala"/>
            </div>
        </div>
    )
}

export default Body;

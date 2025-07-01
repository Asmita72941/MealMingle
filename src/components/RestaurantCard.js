const RestaurantCard = (props) => {
    const {name,cuisine} = props;
    return(
        <div className="res-card w-[260px] m-4 p-4 cursor-pointer hover:bg-gray-100">
            <img
                alt="res-logo"
                src="https://b.zmtcdn.com/data/pictures/9/18602729/1fa9222c14aed940d92bc9002bd7086e_o2_featured_v2.jpg?output-format=webp"/>
            <h3 className="font-bold py-1 text-lg">{name}</h3>
            <h4 className="font-medium">{cuisine}</h4>
            <h4 className="font-normal">4.4 stars</h4>
            <h4 className="text-sm">38 minutes</h4>
        </div>
    )
}

export default RestaurantCard;

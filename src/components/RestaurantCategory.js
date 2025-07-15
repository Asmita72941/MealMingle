import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
    const {data,showItems,setShowIndex} = props;

    const handleClick = () => {
        setShowIndex();
    }

    return(
        <div>
            
            <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 ">

                {/* Accordian Header */}
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>

                    <span className="font-bold text-lg">{data?.title} ({data?.itemCards?.length})</span>
                    <span>⬇️</span>

                </div>

                {/* Accordian Body */}

                {showItems && <ItemList items={data?.itemCards}/>}

            </div>

        </div>
    )
}

export default RestaurantCategory;


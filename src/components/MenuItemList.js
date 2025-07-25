import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { removeItem } from "../utils/cartSlice";


const MenuItemList = (props) => {
    const {items} = props;

    const dispatch = useDispatch();

    const handleRemoveItem = (item) => {
        dispatch(removeItem(item));
    }

    return(
        <div>
            {items.map(item => 

            <div key={item?.card?.info?.id} className="p-2 m-2 border-gray-400 border-b-3 text-left flex justify-between">

                <div className="w-9/12">
                    <div className="py-2">
                        <span>{item?.card?.info?.name}</span>
                        <span> - ₹{item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}</span>
                    </div>

                    <p className="text-xs">{item?.card?.info?.description}</p>
                </div>

                <div className="w-3/12 p-4">
                    <div className="absolute">
                        <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg" onClick={() => handleRemoveItem(item)}>
                            Remove -
                        </button>  
                    </div>

                    <img src={CDN_URL+item?.card?.info?.imageId}/>
                </div>

            </div>)}
        </div>
    )
}

export default MenuItemList;


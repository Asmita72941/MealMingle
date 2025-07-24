import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
    const onlineStatus = useOnlineStatus();

    const cartItems =  useSelector((store) => store.cart.items);

    return(
        <div className="header flex justify-between bg-green-200 shadow-lg">

            <div>
                <img className="w-28 " 
                    src={LOGO_URL}/>
            </div>

            <div className="flex">
                <ul className="flex m-5 p-5 text-lg">
                    <li>
                        Online Status {onlineStatus ? "💚": "❤️"}
                    </li>

                    <li className="mx-9">
                        <Link to="/">Home</Link>
                    </li>

                    <li className="mx-9">
                        <Link to="/about">About</Link>
                    </li>

                    <li className="mx-9">
                        <Link to="/contact">Contact</Link>
                    </li>

                    <li className="mx-9 font-bold text-xl">
                        <Link to="/cart">Cart -({cartItems.length} items)</Link>
                    </li>
                </ul>
            </div>

        </div> 
    )
}

export default Header;


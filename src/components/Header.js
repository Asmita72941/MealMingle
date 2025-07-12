import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {

    return(
        <div className="header flex justify-between bg-green-200 shadow-lg">

            <div>
                <img className="w-28 " 
                    src={LOGO_URL}/>
            </div>

            <div className="flex">
                <ul className="flex m-5 p-5 text-lg">
                    <li className="mx-9">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="mx-9">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="mx-9">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="mx-9">Cart</li>
                </ul>
            </div>

        </div> 
    )
}

export default Header;


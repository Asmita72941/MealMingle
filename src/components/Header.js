import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {

    return(
        <div className="header flex justify-between bg-green-200 shadow-lg">

            <div>
                <img className="w-28 "
                    src={LOGO_URL}/>
            </div>

            <div className="flex">
                <ul className="flex m-5 p-5 text-lg">
                    <li className="mx-9">Home</li>
                    <li className="mx-9">About</li>
                    <li className="mx-9">Contact</li>
                    <li className="mx-9">Cart</li>
                </ul>
            </div>

        </div>
    )
}

export default Header;


const Header = () => {
    return(
        <div className="header flex justify-between bg-green-200 shadow-lg">

            <div>
                <img className="w-28 "
                    src="https://th.bing.com/th/id/OIP.OcKQn1n1_SlK_tqi8VEG7QHaHT?pid=ImgDet&w=185&h=182&c=7&dpr=1.3"/>
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


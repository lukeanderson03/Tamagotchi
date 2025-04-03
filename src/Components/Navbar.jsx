import { Link } from "react-router-dom";

export function NavBar() {
    return (
        <div className='flex justify-around float-end w-96 pt-5'>
            <Link to="/">
                <button className="cursor-pointer">Home</button>
            </Link>
            <Link to="/about">
                <button className="cursor-pointer">About</button>
            </Link>
            <Link to="/store">
                <button className="cursor-pointer">Store</button>
            </Link>
        </div >
    );
}
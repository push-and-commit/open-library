import {useState} from "react";
import {NavLink} from "react-router";

const Nav = () => {


    const [searchQuery, setSearchQuery] = useState("");

    return <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/books">Books</NavLink>
                </li>
            </ul>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        // TODO : useDebounceValue to query on the API

                    />
                </li>
            </ul>
        </div>
    </nav>
};

export default Nav;
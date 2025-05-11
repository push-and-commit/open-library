import {useState, useEffect} from "react";

import conf from "../conf";
import {NavLink} from "react-router";

const Home = () => {

    const[trendingBooks, setTrendingBooks] = useState<[]>([]);

    useEffect(() => {
        async function fetchLibraryData() {
                const res = await fetch(`${conf.openLibraryUrl}search.json?q=ebook_access:no_ebook AND -ia:* AND readinglog_count:[25 TO *]`);
            if (res.ok) {
                const body = await res.json();
                setTrendingBooks(body.docs);
                console.log(body);
            } else {
                alert(`FAIL : ${res.status}`);
            }
        }
        fetchLibraryData();
    }, []);

    return trendingBooks.length > 0 ? (
        <div>
            <h2>Trending books</h2>
            <ul className="list-group">
                {
                    trendingBooks.map(({ key, title } : {key : string, title: string}) => (
                        <li key={key} className="list-group-item">
                            <NavLink to={key}>{title}</NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>
    ) : null;
};

export default Home;
import {useState, useEffect} from "react";

import conf from "../conf";

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

    useEffect(() => {
        async function fetchWikipediaData() {
            const res = await fetch(`${conf.wikipediaUrl}?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch='New_England_Patriots'`);
            if (res.ok) {
                const body = await res.json();
                console.log(body);
            } else {
                alert(`FAIL : ${res.status}`);
            }
        }
        fetchWikipediaData();
    }, []);

    return trendingBooks.length > 0 ? (
        <div>
            <h2>Trending books</h2>
            <ul className="list-group">
                {
                    trendingBooks.map(({ title } : {title: string}) => (
                        <li className="list-group-item">{title}</li>
                    ))
                }
            </ul>
        </div>
    ) : null;
};

export default Home;
import {useEffect, useState} from "react";
import {useParams} from "react-router";

import type { BookType } from "../type.ts"
import conf from "../conf.ts"

const Book = () => {

    const [book, setBook] = useState<null | BookType>();
    const { key } = useParams();

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`${conf.openLibraryUrl}works/${key}.json`);
            if (res.ok) {
                const body = await res.json();
                setBook(body);
                console.log(body);
            } else {
                alert(`FAIL : ${res.status}`);
            }
        }
        fetchData();
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

    return book ? (
        <div>
            <h2>{book.title}</h2>
        </div>
    ) : (
        <div>
            <h2>Book not found</h2>
        </div>
    );
};

export default Book;
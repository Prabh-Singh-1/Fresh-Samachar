"use client"
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import Loader from "../components/Loader";

export default function Home() {
    const { search, setSearch } = useContext(SearchContext)
    const { searchClick, setSearchClick} = useContext(SearchContext);
    const [allnews, setAllnews] = useState([]);

    function createMarkup(data) {
        return { __html: data };
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://fresh-samachar.vercel.app/api/news?query=${search}`);
                const data = await response.json();
                console.log('data', data)
                console.log('Articles ', data.articles);
                setAllnews(data.articles || []);
            } catch (err) {
                console.error("Failed to fetch data from backend", err);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch(`https://fresh-samachar.vercel.app/api/news?query=${search}`);
            const data = await response.json();
            setAllnews(data.articles || []);
          } catch (err) {
            console.error("Failed to fetch data from backend", err);
          } finally {
            setSearchClick(false); 
          }
        }
        fetchData();
    
      }, [searchClick]);


    return (
        <>
            <div className="min-h-screen bg-gray-100">
                <main className="container mx-auto px-4 py-6">
                    <h1 className="text-3xl font-bold mb-4 text-center">Hot News</h1>
                    {allnews.length === 0 && <div><Loader /></div>}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {allnews.map((news, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-lg overflow-hidden"
                            >
                                <img
                                    src={news.urlToImage || "./news icon.png"}
                                    alt={news.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-bold mb-2">{news.title}</h3>
                                    <p className="text-gray-500 text-sm">
                                        <span>{news.source.name}</span>
                                        <span>
                                            {news.publishedAt
                                                ? new Date(news.publishedAt).toLocaleDateString()
                                                : "Unknown Date"}
                                        </span>
                                    </p>
                                    <p className="text-gray-700 my-2" dangerouslySetInnerHTML={createMarkup(news.description)}></p>
                                    <p className="text-gray-500 text-sm">
                                        Author: {news.author}
                                    </p>
                                    <Link
                                        href={news.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline"
                                    >
                                        Read more
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>


            </div>

        </>
    );
}

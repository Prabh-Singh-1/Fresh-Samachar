"use client"
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import { SearchContext } from "./context/SearchContext";
import Loader from "./components/Loader";
import { redirect } from 'next/navigation'

const page = () => {
  const { search, setSearch } = useContext(SearchContext)
  const { allnews, setAllnews } = useContext(SearchContext);

  // const [allnews, setAllnews] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=bitcoin&from=2025-01-01&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        const data = await response.json();
        setAllnews(data.articles || []);
      } catch (err) {
        console.error("Failed to fetch data from server", err);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${search}&from=2025-01-01&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        const data = await response.json();
        setAllnews(data.articles || []);
      } catch (err) {
        console.error("Failed to fetch data from server", err);
      }
    }
    fetchData();
  }, [search]);

  function createMarkup(data) {
    return { __html: data };
  }
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <section className="bg-white py-10 shadow-md">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Featured News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <img
                  src="https://i.ytimg.com/vi/Osj5BaAfj84/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDLvWDSnP9FyniWBKhFT5ZO7VPnzg"
                  alt="Featured News"
                  className="w-full h-60 object-cover rounded-md"
                />  
              </div>
              <div className="space-y-4">
                <p className="text-lg text-gray-700">
                  Stay informed with the latest updates from around the world.
                  Dive into our featured news stories that matter the most.
                </p>
                <button onClick={()=>redirect("/Explore")} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Explore Fresh News
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold mb-4">News Categories</h2>
          <div className="flex space-x-4 overflow-auto">
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300">
              Business
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300">
              Entertainment
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300">
              Health
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300">
              Science
            </button>
          </div>
        </section>

        <section className="container mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
          {allnews.length === 0 && <div><Loader /></div>}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {allnews.map((news, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-md overflow-hidden"
              >
                <img
                  src={news.urlToImage || "./news icon.png"}
                  alt={`Article ${news + 1}`}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 text-sm" dangerouslySetInnerHTML={createMarkup(news.description)}></p>
                  <Link className="mt-4 text-blue-600 hover:underline" href={news.url} target="_blank">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default page
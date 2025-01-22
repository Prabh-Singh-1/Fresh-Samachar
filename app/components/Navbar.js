"use client"
import React, { useState, useContext } from 'react'
import Link from 'next/link'
import { SearchContext } from '../context/SearchContext'

const Navbar = () => {
    const { search, setSearch } = useContext(SearchContext);
    const { searchClick, setSearchClick} = useContext(SearchContext);

    const [togglenav, settogglenav] = useState(false);
    const [searchtoggle, setsearchtoggle] = useState(false);
    const [categorybtn, setCategorybtn] = useState(false);
    function handleChange() {
        setsearchtoggle(true)
        setSearch(search)
        setTimeout(() => {
            setsearchtoggle(!searchtoggle)
        }, 500)
       
    }
    function handleBlur() {
        if (search === "") {
            setSearch("Top India News Today")
        }
    }
    function handleSearch(e){
       
        if(e.key === "Enter")
        {
            setSearchClick(true);
            handleChange()
        }
    }
    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-row gap-2 flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="./news icon.png" className="w-10" alt="News icon" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Fresh Samachar</span>
                    </Link>
                    <div className="flex md:order-2 gap-1">
                        <button type="button" onClick={ ()=>{handleChange()} } data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                        <div className={`relative ${searchtoggle ? "" : "hidden"} md:block`}>
                            <button onClick={ handleSearch } className="cursor-pointer absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span className="sr-only">Search icon</span>
                            </button>
                            <input type="text" id="search-navbar"  onKeyDown={handleSearch}  className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." value={search} onChange={(e) => { setSearch(e.target.value) }} onBlur={handleBlur} />
                        </div>
                        <button onClick={() => { settogglenav(true) }} data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false" onBlur={() => setTimeout(() => {
                            settogglenav(false)
                        }, 3600)}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className={`items-center justify-between ${togglenav ? "" : "hidden"} w-full md:flex md:w-auto md:order-1`} id="navbar-search" >
                        <div className="relative mt-3 md:hidden">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="text" id="search-navbar"   onKeyDown={handleSearch}  className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                        </div>
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link href="/Explore" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Explore News</Link>
                            </li>
                            <li>
                                <div onClick={() => setCategorybtn(!categorybtn)} onBlur={() => {
                                    setTimeout(() => {
                                        setCategorybtn(false)
                                    }, 500)
                                }} className="relative block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    <button id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay" data-dropdown-delay="500" data-dropdown-trigger="hover" className="text-white flex flex-row justify-center items-center" type="button">
                                        Categories
                                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button>
                                    <div id="dropdownDelay" className={`z-10 ${categorybtn ? "" : "hidden"} absolute top-7 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
                                            <li className='w-full'>
                                                <Link href={`Category/Cricket`} className="w-full text-justify block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Cricket</Link>
                                            </li>
                                            <li>
                                                <Link href={`Category/Indian Politics`} className="w-full text-justify block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Politics</Link>
                                            </li>
                                            <li>
                                                <Link href={`Category/Current affairs`} className="w-full text-justify block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Current affairs</Link>
                                            </li>
                                            <li>
                                                <Link href={`Category/Health`} className="w-full text-justify block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Health</Link>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Link href="/About" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    )
}

export default Navbar

import React, { useState, useEffect } from 'react'
import axios from '../axios';
import requests from '../request';

function Banner(){
    const [movie, setMovie] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    },[]);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }



    return (
        <header className='banner text-white object-contain h-[400px]'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition: "center center",
            }}
        >
            <div className='banner_contents p-10 pt-36 sm:p-36 h-[190px]'>
            
                <h1 className='text-4xl lg:text-6xl font-bold pb-2'>  
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                    <div className='banner_buttons '>
                        <button className='banner_button cursor-pointer text-white outline-none border-0 rounded-sm pl-[2rem] pr-[2rem] mr-[1rem] pt-[0.5rem] pb-[0.5rem]  bg-opacity-50 bg-slate-900 hover:bg-slate-300 hover:text-black'>Play</button>
                        {/* <button className='banner_button cursor-pointer text-white outline-none border-0 rounded-sm pl-[2rem] pr-[2rem] mr-[1rem] pt-[0.5rem] pb-[0.5rem]  bg-opacity-50 bg-slate-900 hover:bg-slate-300 hover:text-black'>My List</button> */}
                    </div>
                    <h1 className='banner_description w-[45rem] max-w-[360px] h-[80px] leading-5 pt-4 text-sm'>
                        {truncate(movie?.overview, 150)}
                    </h1>
            </div>
            <div className='banner_bottom_fade h-[7.2rem] pt-60 sm:p-0  bg-gradient-to-t from-[#111] to-transparent' />
        </header>
    )
}

export default Banner
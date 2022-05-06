import React, {useEffect, useState} from 'react';
import axios from '../axios';
import '../App.css';
import ReactPlayer from 'react-player';
import requests from '../request';

const base_url="https://image.tmdb.org/t/p/original/";
const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "api_key=c77fb007d079b965094bb390667189f5";

function Row ({title, fetchUrl, isLargeRow}) {

    const [movies, setMovies] = useState([]);
    const [movieId, setMovieId] = useState("");
    const [played, setPlayed] = useState(0);
    const [fetchVideos, setFetchVideos] = useState("");
    const [vidKey, setVidKey] = useState("");


    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            // console.log(request.data.results)

            return request;
        }
        fetchData();
    }, [fetchUrl]);


    const handleClick = (movie) => {
        if (movieId){
            setMovieId();
            
        }else{
            setMovieId(movie.id).catch((error) => console.log(error));
            setFetchVideos(`${API_URL} /movie/${movie.id}/videos?${API_KEY}`)
            .then(videoData => {
                console.log(videoData);
                console.log(fetchVideos);
            }).catch((error) => console.group(error));
        }

        
        let id =  movie.id;
        fetch(API_URL + '/movie/' + id + '/videos?' + API_KEY).then(res => res.json())
        .then(videoData => {
            //console.log(videoData);
            
            if(videoData){
                
                if(videoData.results.length > 0){
                    var embed = []; 
                    const keys = [];
                    videoData.results.forEach(video => {
                        let {name, key, site} = video
                        console.log(video.key)
                        keys.push(`${key}`); 
                    })
                    //console.log(keys[0])
                    setVidKey(keys[0])

                }
            }
        })
        
    
    };



    return (
        <>


        <div className='row ml-5'>

            <h2 className='font-bold'>{title}</h2>
            <div className='row-posters flex overflow-hidden overflow-x-scroll p-5 '>
                {movies.map((movie)=>(
                    ((isLargeRow && movie.poster_path) || 
                    (!isLargeRow && movie.backdrop_path)) && (
                    <img
                        onClick={() => handleClick(movie)}
                        key={movie.id}
                        className={` w-full max-h-[100px] object-contain mr-[10px] transition-transform hover:scale-110 row-poster ${isLargeRow && "row-poster-large"} `}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                    />

                    )

                ))}
            </div>

            
            
                {
                movieId &&<ReactPlayer 
                url={`https://www.youtube.com/watch?v=${vidKey}`}
                controls={true}  
                />
                } 
            
        </div>
        </>
    );
}

export default Row;
import React, { useEffect, useState } from 'react'
import Loader from "../components/Loader"
import MovieCard from '../components/MovieCard'
import { useDispatch, useSelector } from 'react-redux'
import { addMoviesList, addToMovies } from '../redux/slices/favSlice'

const Home = () => {
  const [movieData,setMovieData]=useState([])
  const [loading,setLoading]=useState(false)
  const dispatch=useDispatch()


  //fetching .env variable ,movie data api url
  const apiUrl=process.env.REACT_APP_MOVIE_URL
  
  const getMoviesData=async()=>{
    setLoading(true)
    try{
      const response=await fetch(apiUrl)
      const data=await response.json() 

      //sorting data in decreasing order of rating
      const sortedData = await data.sort(function(a, b){return b.rating-a.rating});
      setMovieData(sortedData)
      dispatch(addMoviesList(sortedData))

    } catch(error){
      console.log(error)
      console.log("error in fetchng movies data from api")
    }
    setLoading(false)
  }

  useEffect(()=>{
    getMoviesData()
  },[])


  return (
    <div className='w-full min-h-[calc(100vh-5rem)]  flex justify-center items-center '>
      {
        loading ? (
          <div>
            <Loader/>
          </div>
        ) : (
          <>
          {
           movieData.length ? (
              <div>
                {
                  movieData.map((item)=>{
                    return <MovieCard key={item.id} data={item} />
                  })
                }
              </div>
            ) : (
              <div className=''>
                Data Not Found
              </div>
            )
          }
          </>
        )
      }
        
    </div>
  )
}

export default Home
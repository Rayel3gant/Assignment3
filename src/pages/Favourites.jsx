import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../components/MovieCard'
import { useNavigate } from 'react-router-dom'

const Favourites = () => {
  const { favouritesList }=useSelector((state)=>state.fav)

  const navigate=useNavigate()
  return (
    <div>
      {
        (favouritesList.length) ? (
          <div>
          {
            favouritesList.map((item)=>{
              return <MovieCard key={item.id} data={item} type={2} />
            })
          }

          </div>
        ) : (
          <div className='w-full h-[calc(100vh-5rem)] flex gap-y-4 flex-col items-center justify-center '>
              <div className='md:text-3xl text-xl text-white font-semibold'>No movie added to favourites yet</div>

              <button onClick={()=>navigate("/")} className='text-sm font-semibold bg-yellow-400 rounded-md border-1 border-black p-2 w-fit hover:scale-110 transition-all duration-1000'>Add Now</button>
          </div>

        )
      }
    </div>
  )
}

export default Favourites
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoMdHeart } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { addToFavourites, removeFromFavourites } from '../redux/slices/favSlice';
import { RiDeleteBinLine } from "react-icons/ri";

const MovieCard = (props) => {
    const dispatch=useDispatch()
    const data=props.data
    const type=props.type || 0
    const { favouritesList }=useSelector((state)=>state.fav)
    let alreadyExist=false
    favouritesList.map((item)=>{
        if(item.id===data.id){
            alreadyExist=true
        }
    })

    
    const favouriteHandler=()=>{
        dispatch(addToFavourites(data))
        console.log("added to favourites",data)
    }

    const deleteHandler=()=>{
        dispatch(removeFromFavourites(data))
        console.log("removed from favourites",data)
    }
  return (
    <div className='w-[400px] rounded-md mx-auto border-b-4  border-blue-800 md:px-12 px-4 md:h-[150px] min-h-[200px] py-6 md:py-12 bg-[#1e90ff] my-8  md:w-[650px] lg:w-[1000px] flex flex-col md:flex-row items-start justify-between'>

        <div className={`text-3xl w-full  text-white flex flex-row md:flex-col justify-between gap-y-4 `}>
            <div className='text-left font-bold md:text-3xl text-xl'>{data.movie}</div>
            <div className='w-[50px]'>
                {
                    (alreadyExist===false) ? (
                        <div className='w-[50px] h-[50px] rounded-full flex justify-center items-center bg-blue-400'>
                            <button onClick={favouriteHandler}><IoMdHeart className='text-red-500'/></button>
                        </div>

                    ) : (<></>)
                }
                {
                    (type===2) ? (
                        <div className='w-[50px] h-[50px] rounded-full flex justify-center items-center bg-blue-400'>
                            <button onClick={deleteHandler}><RiDeleteBinLine/></button>
                        </div>
                    ) : (<></>)
                }
            </div> 
        </div>

        <div className='flex md:w-[150px] flex-col md:gap-y-4 gap-y-2 items-start'>
            <div>Rating: {data.rating}</div>

            <a href={data.imdb_url} target="_blank" >
                <div className='flex text-sm gap-x-2 items-center bg-yellow-400 rounded-md border-1 border-black p-2 w-fit hover:scale-110 transition-all duration-1000'>
                    <p>More Info</p>
                    <MdKeyboardDoubleArrowRight className='text-xl'/>
                </div>
                 
            </a>
        </div>


    </div>
  )
}

export default MovieCard
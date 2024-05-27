import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"


const initialState={
    favouritesList: localStorage.getItem("favouritesList") ? JSON.parse(localStorage.getItem("favouritesList")):[],
    moviesList:[]
}


const favSlice=createSlice({
    name:"favourites",
    initialState,
    reducers:{
        addToFavourites: (state,action)=>{
            const movie=action.payload
            const index=state.favouritesList.findIndex((item)=>item.id===movie.id)

            if(index>=0){
                toast.error("movie already in favourites list")
                return
            }

            state.favouritesList.push(movie)
            toast.success("movie added to favourites list")
        },
        removeFromFavourites:(state,action)=>{
            const movie=action.payload
            const index=state.favouritesList.findIndex((item)=>item.id===movie.id)

            if(index>=0){
                state.favouritesList.splice(index,1)
                toast.warn("movie removed from favourites list")
            }
        },
        addMoviesList:(state,action)=>{
            state.moviesList=action.payload
        }
      
    }
})

export const { addToFavourites , removeFromFavourites ,addMoviesList }=favSlice.actions
export default favSlice.reducer
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Movie() {
    const {id} = useParams();
    const api = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=`;
    const [movie, setMovie] = useState([]);

    const loadMovies = async (url) => {
        try {
            const response = await fetch(url)
            const data = await response.json();
            console.log(data)
            console.log(movie)
                setMovie(data.meals[0])              
            
        } catch (error) {
            console.log(error)
        }
        
    }
    useEffect(()=> {   

            loadMovies(`${api}${id}`)
    },[id])
    const {strMealThumb, strArea, strCategory } = movie;
    return (
        <div className="card">
            <img src={strMealThumb} alt={id}/>
            <h2>{strArea}</h2>
            <h3>{strCategory}</h3>
        </div>
    )
}
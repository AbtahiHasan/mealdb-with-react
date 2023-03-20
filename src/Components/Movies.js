import { useGlobalContext } from "../context";
import { NavLink } from "react-router-dom";
export default function Movies() {
    const {movies} = useGlobalContext();
    return ( 
            <section className="grid">
                {movies.map( (movie) => { 
                    const {strMeal, idMeal, strMealThumb} = movie;
                return (
                    <NavLink to={`movie/${idMeal}`} key={idMeal}>
                        <article>
                            <h2>{strMeal}</h2>
                            <img src={strMealThumb} alt={strMeal}/>
                        </article>
                    </NavLink>
                
                )})}                 
            </section>                        
                     
    )
}
import  {createContext, useContext, useEffect, useState} from "react";

const AppContext = createContext();
export const AppProvider = ({children}) => {
    const api = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;

    const [loading, setLoading] = useState(true);
    const [movies, setMovie] = useState([]);
    const [error, setError] = useState({status: "false", msg: ""});
    const [query, setQuery] = useState("fish");

    const loadMovies = async (url) => {
        try {
            const response = await fetch(url)
            const data = await response.json();

            if(data.meals.length !== 0) {
                setLoading(false)
                setMovie(data.meals)
            } else {
                setError({
                    status: "true", msg: "Something is went wrong"
                    })
            }
            
        } catch (error) {
            console.log(error)
        }
        
    }
    useEffect(()=> {       
        const timer = setTimeout(() => {
            loadMovies(`${api}${query}`)
        }, 800)

        return () => clearTimeout(timer);
    },[query])
    return <AppContext.Provider value={{loading, movies, error, query, setQuery}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}
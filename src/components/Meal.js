import { useEffect, useState } from "react"
import "./Styles.css"
import { useFetch } from "./CustomHookFetch";

export function Meal({ meal }) {
    const [imageUrl, setImageUrl] = useState("");
    const k = process.env.REACT_APP_KEY;
    const [data] = useFetch(`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${k}&includeNutrition=false`);

    const [id, setId] = useState();    
        useEffect(() => {
            setId(meal.id);
            setImageUrl(data.image);
                        
        }, [id]);


    return (
        <div class="card" id="divCard">
            <img src={imageUrl} alt="receta" class="card-img-top" />
            <div class="card-body">
                <h5 class="card-title">{meal.title}</h5>
                <ul>
                    <li class="lista">Tiempo de preparación: {meal.readyInMinutes} minutos</li>
                    <li class="lista">Porciones: {meal.servings}</li>
                </ul>
                <a href={meal.sourceUrl} class="btn btn-light">Ir a la receta</a>
            </div>
        </div>
    )
}
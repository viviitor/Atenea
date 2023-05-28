import { useState } from "react"
import { MealList } from "./MealList";
import "./Styles.css"

export const Home =()=>{

    const [cal, setCal] = useState(2000);
    const [mealData, setMealData] = useState(null);
    const uri = process.env.REACT_APP_URL;
    const k = process.env.REACT_APP_KEY;

    function getMeals(){
        fetch (`${uri}apiKey=${k}&timeFrame=day&targetCalories=${cal}`)
        .then((response)=>response.json())
        .then((data)=>{
         setMealData(data);        
            
            console.log(data);
        })
        .catch(()=>{
         console.log("error");   
        })
    }

    function handleChange(e){
        setCal(e.target.value)
    }

    return(
        <div class="p-5 text-center bg-light" id="divHeader">
        <section>
        <h1 class="mb-3">BIENVENIDO A TU PLAN DE ALIMENTACIÓN</h1>
        <input type='number'
        placeholder="Calorias"
        onChange={handleChange}/>
        <button type="submit"
        class="btn btn-dark"
        onClick={getMeals}>Mostrar</button>
        <br></br><br></br><br></br>
        </section>
        {mealData && < MealList mealData={mealData}/>}
        <br></br><br></br>
        <a id="salir" href="/">Cerrar Sesión</a>
        </div>
    )
}
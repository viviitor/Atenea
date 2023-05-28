import { Meal } from "./Meal";

export function MealList({mealData}){

    const nutrients = mealData.nutrients;
    return(
        <main role="main" class="container my-auto" id="meallist">
            <section>
                <h1>Información Nutricional</h1>
                <ul>
                    <li class="lista">Calorias: {nutrients.calories.toFixed(0)}</li>
                    <li class="lista">Carbohidratos: {nutrients.carbohydrates.toFixed(0)}</li>
                    <li class="lista">Grasas: {nutrients.fat.toFixed(0)}</li>
                    <li class="lista">Proteinas: {nutrients.protein.toFixed(0)}</li>        
                </ul>
            </section>
            <section>
                 {mealData.meals.map((meal) =>{
                    return <Meal key={meal.id} meal={meal}/>
                 })}
            </section>
            </main>
    )
}
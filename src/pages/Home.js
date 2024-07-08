import React from 'react'
import { recipe } from '../dummy/data'


const Home = () => {
  return (
    <div>

      <h1>This is Home Page</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi cupiditate blanditiis aut sit? Qui velit ea nulla dolorem saepe a laboriosam, odit dignissimos beatae neque aliquid iusto culpa deserunt esse.</p>
      <p>-------------------------------------------------------------------------------</p>

      <div className="recipe">
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} className='h-[400px] w-[400px]' />
      <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
      <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
      <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} minutes</p>
      <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} minutes</p>
      <p><strong>Servings:</strong> {recipe.servings}</p>
      <p><strong>Calories Per Serving:</strong> {recipe.caloriesPerServing}</p>
      <p><strong>Rating:</strong> {recipe.rating} (based on {recipe.reviewCount} reviews)</p>
      <p><strong>Tags:</strong> {recipe.tags.join(', ')}</p>
      <p><strong>Meal Type:</strong> {recipe.mealType.join(', ')}</p>

      <h2>Ingredients:</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h2>Instructions:</h2>
      <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>



    </div>
  )
}

export default Home
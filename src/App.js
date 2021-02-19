import './App.css';
import React, {useState, useEffect} from 'react';
import {Recipe} from './Recipe';

function App() {
  const APP_ID = "8c91a824";
  const APP_KEY = "0aa5273aaa38da41e3bfca939693741a";
  const API_URL = `https://www.edamam.com/search?q=banana&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recipes, setRecipe] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setRecipe(data.hits);
    console.log(data.hits);
  }

  return (
    <div>
      {
        recipes.map((r,id) => (
          <Recipe key={id} title={r.recipe.label} image={r.recipe.image} calories={r.recipe.calories} />
        ))
      }
    </div>
  );
}

export default App;
